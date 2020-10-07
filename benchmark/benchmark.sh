#!/usr/bin/env bash

topLevelFolder=$(git rev-parse --show-toplevel)
cd "$topLevelFolder"

COLD_STARTS=10
WARM_STARTS=5

awsAccountId=$(aws sts get-caller-identity | jq -r .Account)
benchmarkSuffix=$RANDOM
benchmarkStartTime=$(date +%s)

echo "----- The benchmark will be run on AWS Account $awsAccountId with benchmark suffix $benchmarkSuffix -----"

##############################################################################
#                   Prepare our assets for deployment                        #
##############################################################################
echo "[Build] Building the asset."
npm run build

echo "[Build] Making asset ready to deploy using AWS CLI."
npm run build:archive

##############################################################################
#                   Prepare our deployment resources                         #
##############################################################################
echo "[Deployment] Settup up IAM role."
aws iam create-role \
  --role-name sls-benchmark-execution \
  --assume-role-policy-document \
  '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}' > /dev/null

echo "[Deployment] Attaching IAM policies."
aws iam attach-role-policy \
  --role-name sls-benchmark-execution \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole > /dev/null
aws iam attach-role-policy \
  --role-name sls-benchmark-execution \
  --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess > /dev/null

echo -n "[Deployment] Waiting 10 seconds for the IAM policies to update."
for i in {1..10}; do
  echo -n "."
  sleep 1
done
echo ""

echo "[Deployment] Creating Lambda function 'sls-benchmark-$benchmarkSuffix'."
aws lambda create-function \
  --function-name "sls-benchmark-$benchmarkSuffix" \
  --handler doesnt.matter \
  --cli-binary-format raw-in-base64-out \
  --zip-file fileb://./lambda.zip \
  --runtime provided \
  --role "arn:aws:iam::$awsAccountId:role/sls-benchmark-execution" \
  --tracing-config Mode=Active > /dev/null


##############################################################################
#                         Run the actual benchmark                           #
##############################################################################
warmStartsWithOneCold=$(($WARM_STARTS+1))
for cold in $(seq 1 $COLD_STARTS); do
  echo ""
  if [[ $cold != 1 ]]; then
    echo "[Benchmark] Updating function to force new cold start."
    aws lambda update-function-code \
        --cli-binary-format raw-in-base64-out \
        --function-name "sls-benchmark-$benchmarkSuffix" \
        --zip-file fileb://lambda.zip > /dev/null
  fi

  for warm in $(seq 1 "$warmStartsWithOneCold"); do
    warm=$((warm-1))
    if [[ $warm == 0 ]]; then
      echo "[Benchmark] Invoking function. Cold Start $cold/$COLD_STARTS."
    else
      echo "                               Warm Start $warm/$WARM_STARTS"
    fi
    aws lambda invoke \
      --function-name "sls-benchmark-$benchmarkSuffix" \
      --cli-binary-format raw-in-base64-out \
      --payload '{"firstName": "world"}' \
      tmp-output.json > /dev/null && rm tmp-output.json
  done
done


##############################################################################
#                        Fetch our benchmark results                         #
##############################################################################
echo ""
echo -n "[Benchmark] Waiting 10 seconds for AWS XRay to generate traces."
for i in {1..10}; do
  echo -n "."
  sleep 1
done
echo ""
benchmarkEndTime=$(date +%s)

echo "[Benchmark] Fetching AWS XRay traces from $benchmarkStartTime - $benchmarkEndTime."
aws xray get-trace-summaries \
    --start-time "$benchmarkStartTime" \
    --end-time "$benchmarkEndTime" \
    --filter-expression 'service(id(name: "sls-benchmark-'$benchmarkSuffix'", type: "AWS::Lambda"))' > ./benchmark/trace-summaries.json


##############################################################################
#                          Post-process our results                          #
##############################################################################
cat > ./benchmark/response-times.md << 'EOF'
## Response Times

The following are the response time results from AWS XRay, generated after running `npm run benchmark`.

| Response time | Initialization | Invocation | Overhead | Cold Start | Warm Start |
|---------------|----------------|------------|----------|------------|------------|
EOF

responseTimes=$(cat ./benchmark/trace-summaries.json | jq -c -r '.TraceSummaries | .[] | .Id')
traceIds=""
tracesProcessed=0
for t in $responseTimes; do
  tracesProcessed=$((tracesProcessed + 1))
  traceIds="$traceIds $t"
  if [[ $tracesProcessed == 4 ]]; then
    echo "[Benchmark] Fetching a batch of XRay traces."
    aws xray batch-get-traces --no-paginate --trace-ids $traceIds > ./benchmark/traces.json
    npm run ts-node -- ./benchmark/post-process.ts >> ./benchmark/response-times.md
    traceIds=""
    tracesProcessed=0
  fi
done
if [[ $tracesProcessed != 4 ]]; then
  echo "[Benchmark] Fetching a batch of XRay traces."
  aws xray batch-get-traces --no-paginate --trace-ids $traceIds > ./benchmark/traces.json
  npm run ts-node -- ./benchmark/post-process.ts >> ./benchmark/response-times.md
fi

cat >> ./benchmark/response-times.md << 'EOF'

## XRay Example of a Cold Start

<img width="1476" alt="Screenshot 2020-10-07 at 23 01 40" src="https://user-images.githubusercontent.com/1189998/95387505-178a1d00-08f1-11eb-83a7-7bc32eee48e2.png">

## XRay Example of a Warm Start

<img width="1479" alt="Screenshot 2020-10-07 at 23 01 23" src="https://user-images.githubusercontent.com/1189998/95387509-1953e080-08f1-11eb-8d46-ac25efa235e4.png">

EOF

##############################################################################
#                     Finally, clean up our resources                        #
##############################################################################
if [[ $ONLY_POST_PROCESS == "" ]]; then
  echo ""
  echo "[Cleanup] Deleting function 'sls-benchmark-$benchmarkSuffix'."
  aws lambda delete-function --function-name "sls-benchmark-$benchmarkSuffix" > /dev/null
  echo "[Cleanup] Detaching policies."
  aws iam detach-role-policy --role-name sls-benchmark-execution --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole > /dev/null
  aws iam detach-role-policy --role-name sls-benchmark-execution --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess > /dev/null
  echo "[Cleanup] Deleting role."
  aws iam delete-role --role-name sls-benchmark-execution > /dev/null
fi

echo ""
echo ""
echo "👍 Benchmark is done!"
