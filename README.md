# Serverless: Rust
The following is an example of deploying a Rust AWS Lambda function, which uses DynamoDB as the database. All deployment is managed by the AWS CDK tool.

**Quick start:**

- `npm ci`: install all our deployment dependencies.
- `npm run build`: build the Rust executable and package it as an asset for CDK.
- `AWS_REGION=<YOUR_REGION> npm run cdk:deploy`: deploy the packaged asset.
- `AWS_REGION=<YOUR_REGION> npm run deploy`: performs the two steps above for you.

Other than that, just use your regular Rust development setup.

### Overview

- [Building](#building)
- [Deployment using CDK](#deployment-using-cdk)
- [Deployment using AWS CLI](#deployment-using-aws-cli)
- [Libraries:](#libraries)

## Building
A basic build of the Lambda runtime is possible by following the instructions in the [rust-runtime README](https://github.com/awslabs/aws-lambda-rust-runtime/blob/5d50e1ca29b20fccaf85074a6904fa4b6ece4f05/README.md#aws-cli). In short, we cross-compile a static binary for `x86_64-unknown-linux-musl`, rename the binary to `bootstrap`, and CDK uses that as its asset. With provided runtimes, AWS Lambda looks for an executable called `bootstrap`, so this is why we need the renaming step.

```bash
$ rustup target add x86_64-unknown-linux-musl
$ cargo build --release --target x86_64-unknown-linux-musl --features vendored
$ cp ./target/x86_64-unknown-linux-musl/release/sls-rust ./bootstrap && zip lambda.zip bootstrap && rm bootstrap
```

## Deployment using CDK
A couple of notes:

- In the setup included here we require you to explicitly set the `AWS_REGION` environment variable, to avoid mistakenly deploying into some random region.
- If this is the first CDK deployment ever on your AWS account/region, then run `AWS_REGION=<YOUR_REGION> npm run cdk:bootstrap` first. This creates the necessary CDK stack resources on the cloud.
- The CDK deployment bundles the `target/cdk/release` folder as its assets. This is where the `bootstrap` file needs to be located (handled by `npm run build`).

To deploy your function, call `AWS_REGION=<YOUR_REGION> npm run cdk:deploy`,

```bash
$ AWS_REGION=eu-central-1 npm run cdk:deploy
...
sls-rust: deploying...
[0%] start: Publishing bdbf8354358bc096823baac946ba64130b6397ff8e7eda2f18d782810e158c39:current
[100%] success: Published bdbf8354358bc096823baac946ba64130b6397ff8e7eda2f18d782810e158c39:current
sls-rust: creating CloudFormation changeset...
[██████████████████████████████████████████████████████████] (5/5)

 ✅  sls-rust

Outputs:
sls-rust.entryArn = arn:aws:lambda:eu-central-1:xxxxxxxxxxxxxx:function:sls-rust-main

Stack ARN:
arn:aws:cloudformation:eu-central-1:xxxxxxxxxxxxxx:stack/sls-rust/xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

NOTE: The security prompt is automatically disabled on CIs that set `CI=true`. You can remove this check by setting `--require-approval never` in the `cdk:deploy` npm command.

If you want to check if you CDK generated CloudFormation is valid, you can do that via,

```bash
$ AWS_REGION=<YOUR_REGION> npm run cdk:synth
```

And finally, if you want to see a diff between your deployed stack and your local stack,

```bash
$ AWS_REGION=<YOUR_REGION> npm run cdk:diff
```


## Deployment using AWS CLI
For real-usage we will deploy using AWS CDK, but you can test it by deploying it via the AWS CLI. We'll do a couple of steps additional steps for the first time setup:

1. Set up a role to use with our Lambda function.
2. Attach policies to that role to be able to actually do something.
3. Deploy the Lambda function using the `lambda.zip` we've built.
4. Invoke the function with a test payload.
5. (Optional) Update the Lambda function with a new `lambda.zip`.

The rest assumes you have run `npm run build` to build the `lambda.zip` asset we will use to deploy our function.

**Set up the IAM Role:**
```bash
$ aws iam create-role --role-name sls-rust-test-execution --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
```

We also need to set some basic policies on the IAM Role for it to be invokeable and for XRay traces to work,
```bash
$ aws iam attach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
$ aws iam attach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess
```

**Deploy our function:**
```bash
$ aws lambda create-function --function-name sls-rust-test \
  --handler doesnt.matter \
  --cli-binary-format raw-in-base64-out \
  --zip-file fileb://./lambda.zip \
  --runtime provided \
  --role arn:aws:iam::$(aws sts get-caller-identity | jq -r .Account):role/sls-rust-test-execution \
  --environment Variables={RUST_BACKTRACE=1} \
  --tracing-config Mode=Active
```

NOTE: You can replace the `$(aws sts get-caller-identity | jq -r .Account)` call with your AWS account ID, if you do not have [jq](https://stedolan.github.io/jq/) installed.

**Invoke our function:**
```bash
$ aws lambda invoke --function-name sls-rust-test \
  --cli-binary-format raw-in-base64-out \
  --payload '{"firstName": "world"}' \
  output.json > /dev/null && cat output.json && rm output.json
{"message":"Hello, world!"}
```

**(Optional) Update the function:**
We can also update the function code again, after creating a new asset `lambda.zip`,

```bash
$ aws lambda update-function-code \
    --cli-binary-format raw-in-base64-out \
    --function-name  sls-rust-test \
    --zip-file fileb://lambda.zip
```

**(Optional) Clean up the function:**

```bash
$ aws lambda delete-function --function-name sls-rust-test
$ aws iam detach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
$ aws iam detach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess
$ aws iam delete-role --role-name sls-rust-test-execution
```

**XRay Traces:**

After having done this a couple of times, we can gather some traces in XRay to give us an idea of how our Rust application performs in general, and when it hits a cold start. For a simple "Hello, world!" applications, such as the one you can get using `cargo build --package lambda --example hello --release --target x86_64-unknown-linux-musl`, this is an overview of all the Traces after having force a bunch of cold starts:


You can expand the following traces to see how a regular trace looks like in XRay:

<a href="https://codetalk.io/resources/images/serverless-rust-cold-starts-overview.png" target="_blank" rel="noopener noreferrer"><img src="https://codetalk.io/resources/images/serverless-rust-cold-starts-overview.thumbnail.png" loading="lazy" alt="Cold starts overview" title="Cold starts overview" style="margin-right: 1%; width: 49%;" /></a>


## Naming convention

A couple of names need to be in sync:

- The stack name is specified in the `deployment/bin/stack.ts` file, in the `STACK_NAME` variable.
- The `name` field in the `package.json` is used to target the correct stack and should match `STACK_NAME`.

## Libraries
We are using a couple of libraries, in various state of maturity/release:

- The master branch of [aws-lambda-rust-runtime](https://github.com/awslabs/aws-lambda-rust-runtime) pending on [#216](https://github.com/awslabs/aws-lambda-rust-runtime/issues/216) ([README from PR](https://github.com/awslabs/aws-lambda-rust-runtime/blob/5d50e1ca29b20fccaf85074a6904fa4b6ece4f05/README.md)) to be finalised for official async/await support.
  - To statically build you might also need OpenSSL development headers, but we let the [openssl-sys package manage that](https://github.com/sfackler/rust-openssl/issues/980) for us with a `openssl-sys/vendored`.
  - We will need the musl tools, which we use instead of glibc, via `apt-get install musl-tools` for Ubuntu or `brew tap SergioBenitez/osxct && brew install FiloSottile/musl-cross/musl-cross` for macOS.
  - We need zip to create our deployment package, `apt-get install zip`.
- [Rusoto](https://github.com/rusoto/rusoto) for talking with the AWS SDK. It recently landed official async/await support.
- [dynomite]() for ergonomic DynamoDB interactions.
- [aws-cdk](https://docs.aws.amazon.com/cdk/latest/guide/home.html) for deploying to AWS, using CloudFormation under-the-hood. We'll use their support for [Custom Runtimes](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html).
- The [aws-cdk fork](https://github.com/localstack/aws-cdk) of [localstack](https://github.com/localstack/localstack) for a local development setup.
- [cargo watch](https://github.com/passcod/cargo-watch) so we can develop using `cargo watch`, installable via `cargo install cargo-watch`.
