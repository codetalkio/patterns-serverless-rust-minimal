import * as core from "@aws-cdk/core";
import * as cdkEvents from "@aws-cdk/aws-events";
import * as cdkEventTargets from "@aws-cdk/aws-events-targets";
import * as iam from "@aws-cdk/aws-iam";
import * as lambda from "@aws-cdk/aws-lambda";
import * as cdk from "@aws-cdk/core";

interface Props {
  region: string;
  tableName: string;
}

export class LambdaStack extends core.Stack {
  constructor(scope: cdk.App, id: string, props: Props) {
    super(scope, id);

    // Our Lambda function details.
    const entryId = "main";
    const entryFnName = `${id}-${entryId}`;
    const entry = new lambda.Function(this, entryId, {
      functionName: entryFnName,
      description: "Rust serverless microservice",
      runtime: lambda.Runtime.PROVIDED,
      handler: `${id}`, // The handler value syntax is `{cargo-package-name}.{bin-name}`.
      code: lambda.Code.fromAsset(`${__dirname}/../../target/cdk/release`),
      memorySize: 128,
      timeout: cdk.Duration.seconds(10),
      tracing: lambda.Tracing.ACTIVE,
    });

    // Our Lambda function environment variables.
    entry.addEnvironment("AWS_NODEJS_CONNECTION_REUSE_ENABLED", "1");

    // Tag our resource.
    core.Aspects.of(entry).add(new cdk.Tag("service-type", "API"));
    core.Aspects.of(entry).add(new cdk.Tag("billing", `lambda-${entryFnName}`));

    // CloudFormation exports.
    new cdk.CfnOutput(this, `${entryFnName}-arn`, {
      description: `AWS ARN for the ${entryFnName} lambda resource`,
      exportName: `${entryFnName}-function-arn`,
      value: entry.functionArn,
    });

    // Set up the DynamoDB operations the function is allowed on the table ARN.
    entry.addToRolePolicy(
      new iam.PolicyStatement({
        resources: [cdk.Fn.importValue(`${id}-dynamo-${props.tableName}-table-arn`)],
        actions: [
          "dynamodb:Query",
          "dynamodb:UpdateItem",
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:BatchGetItem",
          "dynamodb:DeleteItem",
          "dynamodb:ConditionCheckItem",
        ],
      })
    );

    // Optionally: Keep the lambda function warm by pinging `concurrencyNumber` of it every 5 minutes (this will obvisouly cost a tiny, tiny bit).
    // const concurrencyNumber = 5;
    // const warmer = new cdkEvents.Rule(this, "Warmer", {
    //   schedule: cdkEvents.Schedule.expression("rate(5 minutes)"),
    // });
    // warmer.addTarget(
    //   new cdkEventTargets.LambdaFunction(entry, {
    //     event: cdkEvents.RuleTargetInput.fromObject({ warmer: true, concurrency: concurrencyNumber }),
    //   })
    // );
  }
}
