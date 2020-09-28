import * as cdk from "@aws-cdk/core";

import { LambdaStack } from "../lib/lambda-stack";

const STACK_NAME = "sls-rust-minimal";

/**
 * Construct for the Serverless Rust Application.
 *
 * NOTE: We export the our construct so that it's possible to stitch it into a larger deployment.
 */
export default class Stack {
  public lambdaStack: LambdaStack;

  constructor(app: cdk.App) {
    const region = process.env.AWS_REGION;
    if (!region) {
      // We require that we've set an AWS region.
      console.error("[SlsRust] No AWS_REGION specified! This is required to ensure we are in control of the deployment.");
      process.exit(1);
    }

    // Set up our Lambda Stack.
    this.lambdaStack = new LambdaStack(app, `${STACK_NAME}`, { region });
  }
}

const app = new cdk.App();
new Stack(app);
