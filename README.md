# Patterns: Serverless Rust (minimal) ![ci badge](https://github.com/codetalkio/patterns-serverless-rust-minimal/workflows/ci/badge.svg?branch=master)
The following is an minimal template for deploying a Rust AWS Lambda function. All deployment is managed by the AWS CDK tool.

If you are interested in a more fully-featured version of this, check out [🚧 patterns-serverless-rust 🚧](https://github.com/codetalkio/patterns-serverless-rust) for how to expose a GraphQL endpoint and use DynamoDB.

**✨ Features ✨**

- 🦀 Ready-to-use serverless setup using Rust and [AWS CDK](https://github.com/aws/aws-cdk).
- 🚗 CI using [GitHub Actions](https://github.com/features/actions).
- 👩‍💻 Testing of deployment in CI using [LocalStack](https://github.com/localstack/localstack). (🚧 Work in progresss 🚧)
- 🚀 Deployments via [GitHub Releases](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-releases).

<img width="784" alt="Screenshot 2020-10-06 at 22 56 27" src="https://user-images.githubusercontent.com/1189998/95259406-6bc8ca80-0827-11eb-9132-0c6494921fe7.png">


### Overview

- [Quick start](#️-quick-start)
- [Building](#-building)
- [Deployment using CDK](#-deployment-using-cdk)
- [Deployment using AWS CLI](#-deployment-using-aws-cli)
- [Development using LocalStack](#-development-using-localstack)
- [GitHub Actions (CI/CD)](#--github-actions-cicd)
- [Performance Traces using AWS XRay](#️️-performance-traces-using-aws-xray)
- [Libraries](#-libraries)
- [Contributing](#️-contributing)

## ⚡️ Quick start

- `npm ci`: install all our deployment dependencies.
- `npm run build`: build the Rust executable and package it as an asset for CDK.
- `npm run cdk:deploy`: deploy the packaged asset.
- The stack name is controlled by the `name` field in `package.json`.

Other than that, just use your regular Rust development setup, and the commands below (all prefixed with `npm run`):

| Command | Description | Purpose |
|---------|-------------|---------|
| `build` | Build the Rust executable for release | 📦 |
| `build:archive` | Creates a `./lambda.zip` for deployment using the AWS CLI | 📦 |
| `build:clean` | Cleans build artifcats from `target/cdk` | 📦 |
| `deploy` | Cleans and builds a new executable, and deploys it via CDK | 📦 + 🚢 |
| `cdk:bootstrap` | Bootstrap necessary resources on first usage of CDK in a region | 🚢 |
| `cdk:deploy` | deploy this stack to your default AWS account/region | 🚢 |
| `cdklocal:start` | Starts the LocalStack docker image | 👩‍💻 |
| `cdklocal:bootstrap` | Bootstrap necessary resources for CDK against LocalStack | 👩‍💻 |
| `cdklocal:deploy` | Deploy this stack to LocalStack | 👩‍💻 |


## 📦 Building
We build our executable by running `npm run build`.

Behind the scenes, the `build` NPM script does the following:

- Adds our `x86_64-unknown-linux-musl` toolchain
- Runs `cargo build --release --target x86_64-unknown-linux-musl -Z unstable-options --out-dir target/cdk/release`


In other words, we cross-compile a static binary for `x86_64-unknown-linux-musl`, put the executable, `bootstrap`, in `target/cdk/release`, and CDK uses that as its asset. With custom runtimes, AWS Lambda looks for an executable called `bootstrap`, so this is why we need the renaming step.

## 🚢 Deployment using CDK
We build and deploy by running `npm run deploy`, or just `npm run cdk:deploy` if you have already run `npm run build` previouslt.

A couple of notes:

- If this is the first CDK deployment ever on your AWS account/region, run `npm run cdk:bootstrap` first. This creates the necessary CDK stack resources on the cloud.
- The CDK deployment bundles the `target/cdk/release` folder as its assets. This is where the `bootstrap` file needs to be located (handled by `npm run build`).


**Generate our build assets**

```bash
$ npm run build
```

**Deploy the Rust asset**

To deploy your function, call `npm run cdk:deploy`,

```bash
$ npm run cdk:deploy
...
sls-rust: deploying...
[0%] start: Publishing bdbf8354358bc096823baac946ba64130b6397ff8e7eda2f18d782810e158c39:current
[100%] success: Published bdbf8354358bc096823baac946ba64130b6397ff8e7eda2f18d782810e158c39:current
sls-rust: creating CloudFormation changeset...
[██████████████████████████████████████████████████████████] (5/5)

 ✅  sls-rust

Outputs:
sls-rust.entryArn = arn:aws:lambda:eu-west-1:xxxxxxxxxxxxxx:function:sls-rust-main

Stack ARN:
arn:aws:cloudformation:eu-west-1:xxxxxxxxxxxxxx:stack/sls-rust/xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> 💡  The security prompt is automatically disabled on CIs that set `CI=true`. You can remove this check by setting `--require-approval never` in the `cdk:deploy` npm command.

**Validate you CDK CloudFormation**

If you want to check if you CDK generated CloudFormation is valid, you can do that via,

```bash
$ npm run cdk:synth
```

**Compare local against deployed**

And finally, if you want to see a diff between your deployed stack and your local stack,

```bash
$ npm run cdk:diff
```


## 🚢 Deployment using AWS CLI
For real-usage we will deploy using AWS CDK, but you can dip your feet by deploying the Rust function via the AWS CLI.

We'll do a couple of steps additional steps for the first time setup. Only step 5. is necessary after having done this once:

1. Set up a role to use with our Lambda function.
2. Attach policies to that role to be able to actually do something.
3. Deploy the Lambda function using the `lambda.zip` we've built.
4. Invoke the function with a test payload.
5. (Optional) Update the Lambda function with a new `lambda.zip`.

**Generate our build assets**

```bash
$ npm run build && npm run build:archive
```

**Set up the IAM Role**
```bash
$ aws iam create-role \
  --role-name sls-rust-test-execution \
  --assume-role-policy-document \
  '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
```

We also need to set some basic policies on the IAM Role for it to be invokeable and for XRay traces to work,
```bash
$ aws iam attach-role-policy \
  --role-name sls-rust-test-execution \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
$ aws iam attach-role-policy \
  --role-name sls-rust-test-execution \
  --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess
```

**Deploy our function**
```bash
$ aws lambda create-function \
  --function-name sls-rust-test \
  --handler doesnt.matter \
  --cli-binary-format raw-in-base64-out \
  --zip-file fileb://./lambda.zip \
  --runtime provided \
  --role arn:aws:iam::$(aws sts get-caller-identity | jq -r .Account):role/sls-rust-test-execution \
  --environment Variables={RUST_BACKTRACE=1} \
  --tracing-config Mode=Active
```

> 💡 You can replace the `$(aws sts get-caller-identity | jq -r .Account)` call with your AWS account ID, if you do not have [jq](https://stedolan.github.io/jq/) installed.

**Invoke our function**
```bash
$ aws lambda invoke \
  --function-name sls-rust-test \
  --cli-binary-format raw-in-base64-out \
  --payload '{"firstName": "world"}' \
  tmp-output.json > /dev/null && cat tmp-output.json && rm tmp-output.json
{"message":"Hello, world!"}
```

**(Optional) Update the function**
We can also update the function code again, after creating a new asset `lambda.zip`,

```bash
$ aws lambda update-function-code \
    --cli-binary-format raw-in-base64-out \
    --function-name  sls-rust-test \
    --zip-file fileb://lambda.zip
```

**Clean up the function**

```bash
$ aws lambda delete-function --function-name sls-rust-test
$ aws iam detach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
$ aws iam detach-role-policy --role-name sls-rust-test-execution --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess
$ aws iam delete-role --role-name sls-rust-test-execution
```

## 👩‍💻 Development using LocalStack

🚧 Work in progresss 🚧

LocalStack allows us to deploy our CDK services directly to our local environment:

- `npm run cdklocal:start` to start the LocalStack services.
- `npm run cdklocal:boostrap` to create the necessary CDK stack resources on the cloud.
- `npm run cdklocal:deploy` to deploy our stack.

We can now target the local services with `cdklocal` or by setting the `endpoint` option on the AWS CLI, e.g. `aws --endpoint-url=http://localhost:4566`.

Currently it seems `npm run cdklocal:deploy` doesn't create the actual Lambda, so a way to set it up at the moment is,

```bash
$ aws --endpoint-url=http://localhost:4566 lambda create-function \
  --function-name sls-rust-minimal \
  --handler doesnt.matter \
  --cli-binary-format raw-in-base64-out \
  --code S3Bucket="__local__",S3Key="$(pwd)/target/cdk/release" \
  --runtime provided \
  --role arn:aws:iam::000000000000:role/sls-rust-test-execution \
  --environment Variables={RUST_BACKTRACE=1} \
  --tracing-config Mode=Active
```

This mounts the `./target/cdk/release` directory. Whenever we update the `bootstrap` executable in here (still targeting `x86_64-unknown-linux-musl`) , it will be reflected in the Lambda function.

We can then invoke it from our applications or via,

```bash
$ aws --endpoint-url=http://localhost:4566 lambda invoke \
  --function-name sls-rust-minimal \
  --cli-binary-format raw-in-base64-out \
  --payload '{"firstName": "world"}' \
  tmp-output.json > /dev/null && cat tmp-output.json && rm tmp-output.json
{"message":"Hello, world!"}
```

## 🚗 🚀 GitHub Actions (CI/CD)
Using [GitHub actions](/actions) allows us to have an efficient CI/CD setup with minimal work.

| Workflow | Trigger | Purpose | Environment Variables |
|----------|---------|---------|-----------------------|
| **ci** | push | Continously test the build along with linting, formatting, best-practices (clippy), and validate deployment against LocalStack | |
| **pre-release** | Pre-release using GitHub Releases | Deploy to a QA or staging environment |  **PRE_RELEASE_AWS_ACCESS_KEY_ID** <br /> **PRE_RELEASE_AWS_SECRET_ACCESS_KEY** <br /> **PRE_RELEASE_AWS_SECRET_ACCESS_KEY** |
| **release** | Release using GitHub Releases | Deploy to production environment | **RELEASE_AWS_ACCESS_KEY_ID** <br /> **RELEASE_AWS_SECRET_ACCESS_KEY** <br /> **RELEASE_AWS_SECRET_ACCESS_KEY** |

The CI will work seamlessly without any manual steps, but for deployments via [GitHub Releases](/releases) to work, you will need to set up your GitHub secrets for the repository for the variables in the table above.

These are used in the `.github/workflows/release.yml` and `.github/workflows/pre-release.yml` workflows for deploying the CDK stack whenever a GitHub pre-release/release is made.

## 🕵️‍♀️ Performance Traces using AWS XRay

Since we have enabled `tracing: lambda.Tracing.ACTIVE` in CDK and `tracing-config Mode=Active` in the CLI, we will get XRay traces for our AWS Lambda invocations.

You can checkout each trace in the AWS Console inside the XRay service, which is extremely valuable for figuring our timings between services, slow AWS SDK calls, annotating cost centers in your code, and much more.

We can benchmark our performance using `npm run benchmark`, which will deploy the AWS Lambda to your AWS account, invoke it a bunch of times and trigger cold starts, along with gathering up all the AWS XRay traces into a neat table.

Check out [the response-times table](./benchmark/response-times.md) for a the output of `npm run benchmark`.

## 📚 Libraries
We are using a couple of libraries, in various state of maturity/release:

- The master branch of [aws-lambda-rust-runtime](https://github.com/awslabs/aws-lambda-rust-runtime) pending on [#216](https://github.com/awslabs/aws-lambda-rust-runtime/issues/216) ([README from PR](https://github.com/awslabs/aws-lambda-rust-runtime/blob/5d50e1ca29b20fccaf85074a6904fa4b6ece4f05/README.md)) to be finalised for official async/await support.
  - We will need the musl tools, which we use instead of glibc, via `apt-get install musl-tools` for Ubuntu or `brew tap SergioBenitez/osxct && brew install FiloSottile/musl-cross/musl-cross` for macOS.
- [aws-cdk](https://docs.aws.amazon.com/cdk/latest/guide/home.html) for deploying to AWS, using CloudFormation under-the-hood. We'll use their support for [Custom Runtimes](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html).
- The [aws-cdk fork](https://github.com/localstack/aws-cdk) of [localstack](https://github.com/localstack/localstack) for a local development setup.
- [cargo watch](https://github.com/passcod/cargo-watch) so we can develop using `cargo watch`, installable via `cargo install cargo-watch`.

## 🙋‍♀️ Contributing
Have any improvements our ideas? Don't be afraid to create an issue to discuss what's on your mind!
