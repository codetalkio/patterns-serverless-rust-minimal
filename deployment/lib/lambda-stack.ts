import * as core from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as s3 from "@aws-cdk/aws-s3";
import * as cdk from "@aws-cdk/core";

const { CDK_LOCAL } = process.env;

interface Props {}

export class LambdaStack extends core.Stack {
  constructor(scope: cdk.App, id: string, props: Props) {
    super(scope, id);

    const bootstrapLocation = `${__dirname}/../../target/cdk/release`;

    // Our Lambda function details.
    const entryId = "main";
    const entryFnName = `${id}-${entryId}`;
    const entry = new lambda.Function(this, entryId, {
      functionName: entryFnName,
      description: "Rust serverless minimal microservice",
      runtime: lambda.Runtime.PROVIDED_AL2,
      handler: `${id}`, // The handler value syntax is `{cargo-package-name}.{bin-name}`.
      code:
        CDK_LOCAL !== "true"
          ? lambda.Code.fromAsset(bootstrapLocation)
          : lambda.Code.fromBucket(s3.Bucket.fromBucketName(this, `LocalBucket`, "__local__"), bootstrapLocation),
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      tracing: lambda.Tracing.ACTIVE,
    });

    // Our Lambda function environment variables.
    entry.addEnvironment("AWS_NODEJS_CONNECTION_REUSE_ENABLED", "1");

    // Tag our resource.
    core.Aspects.of(entry).add(new cdk.Tag("service-type", "API"));
    core.Aspects.of(entry).add(new cdk.Tag("billing", `lambda-${entryFnName}`));
  }
}
