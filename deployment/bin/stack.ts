import * as cdk from "@aws-cdk/core";

import { LambdaStack } from "../lib/lambda-stack";
import * as pkg from "../../package.json";

const STACK_NAME = pkg.name;

/**
 * Construct for the Serverless Rust Application.
 *
 * NOTE: We export the our construct so that it's possible to stitch it into a larger deployment.
 */
export default class Stack {
  public lambdaStack: LambdaStack;

  constructor(app: cdk.App) {
    // Set up our Lambda Stack.
    this.lambdaStack = new LambdaStack(app, `${STACK_NAME}`, {});
  }
}

const app = new cdk.App();
new Stack(app);
