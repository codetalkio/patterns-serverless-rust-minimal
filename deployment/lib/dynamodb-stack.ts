import * as core from "@aws-cdk/core";
import * as dynamo from "@aws-cdk/aws-dynamodb";
import * as cdk from "@aws-cdk/core";

interface Props {
  region: string;
  tableName: string;
  enableStream: boolean;
}

export class DynamoDBStack extends core.Stack {
  constructor(scope: cdk.App, id: string, props: Props) {
    super(scope, id);

    // Our Lambda function details.
    const table = new dynamo.Table(this, props.tableName, {
      tableName: props.tableName,
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: "pk",
        type: dynamo.AttributeType.STRING,
      },
      sortKey: {
        name: "sk",
        type: dynamo.AttributeType.STRING,
      },
      // Optional: Enable a DynamoDB stream.
      stream: props.enableStream ? dynamo.StreamViewType.NEW_AND_OLD_IMAGES : undefined,
    });

    // Tag our resource.
    core.Aspects.of(table).add(new cdk.Tag("service-type", "Database"));
    core.Aspects.of(table).add(new cdk.Tag("billing", `dynamodb-${props.tableName}`));

    // CloudFormation exports.
    new cdk.CfnOutput(this, `${id}-${props.tableName}-table-name`, {
      description: `Name of the ${id} ${props.tableName} table`,
      exportName: `${id}-${props.tableName}-table-name`,
      value: props.tableName,
    });
    new cdk.CfnOutput(this, `${id}-${props.tableName}-arn`, {
      description: `AWS ARN for the ${id} ${props.tableName} DynamoDB resource`,
      exportName: `${id}-${props.tableName}-table-arn`,
      value: table.tableArn,
    });

    if (props.enableStream) {
      new cdk.CfnOutput(this, `${id}-${props.tableName}-stream-arn`, {
        description: `AWS ARN for the ${id} ${props.tableName} DynamoDB stream resource`,
        exportName: `${id}-${props.tableName}-table-stream-arn`,
        value: table.tableStreamArn!,
      });
    }
  }
}
