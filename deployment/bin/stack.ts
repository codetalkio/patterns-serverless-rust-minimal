import * as cdk from "@aws-cdk/core";

import { DynamoDBStack } from "../lib/dynamodb-stack";
import { LambdaStack } from "../lib/lambda-stack";

const STACK_NAME = "sls-rust";
const TABLE_NAME = "slsRustTest";

const app = new cdk.App();

/**
 * Construct for the Serverless Rust Application.
 *
 * NOTE: We export the our construct so that it's possible to stitch it into a larger deployment.
 */
export default class Stack {
  public lambdaStack: LambdaStack;
  public dynamoDBStack: DynamoDBStack;

  constructor(app: cdk.App) {
    // We require that we've set an AWS region.
    const region = process.env.AWS_REGION;
    if (!region) {
      console.error(
        "[SlsRust] No AWS_REGION specified! This is required to ensure we are in control of the deployment."
      );
      process.exit(1);
    }

    // Set up our DynamoDB stack.
    this.dynamoDBStack = new DynamoDBStack(app, `${STACK_NAME}-dynamo`, {
      region,
      tableName: TABLE_NAME,
      enableStream: false,
    });

    // Set up our Lambda Stack and mark it as depending on the DynamoDB stack.
    this.lambdaStack = new LambdaStack(app, `${STACK_NAME}`, { region, tableName: TABLE_NAME });
    this.lambdaStack.addDependency(this.dynamoDBStack);
  }
}

new Stack(app);
