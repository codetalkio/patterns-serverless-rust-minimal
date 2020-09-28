# Patterns: Serverless Rust (minimal) ![ci badge](https://github.com/codetalkio/patterns-serverless-rust-minimal/workflows/ci/badge.svg?branch=master)
The following is an minimal templae for deploying a Rust AWS Lambda function. All deployment is managed by the AWS CDK tool.

If you are interested in a more fully-featured version of this, check out [patterns-serverless-rust](https://github.com/codetalkio/patterns-serverless-rust) for how to expose a GraphQL endpoint and use DynamoDB.

**✨ Features ✨**

- 🦀 Ready-to-use serverless setup using Rust and [AWS CDK](https://github.com/aws/aws-cdk).
- 👩‍💻 Local development setup using [LocalStack](https://github.com/localstack/localstack).
- 🚗 CI using [GitHub actions](https://github.com/features/actions) and automatic asset uploading.
- 🚀 Deployments via [GitHub releases](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-releases).

Remaining:

- [ ] Add LocalStack

### Overview

- [Quick start](#️-quick-start)
- [Building](#-building)
- [Deployment using CDK](#-deployment-using-cdk)
- [Deployment using AWS CLI](#-deployment-using-aws-cli)
- [GitHub Actions (CI/CD)](#--github-actions-cicd)
- [Performance Traces using AWS XRay](#️️-performance-traces-using-aws-xray)
- [Naming convention](#-naming-convention)
- [Libraries](#-libraries)
- [Contributing](#️-contributing)

## ⚡️ Quick start

- `npm ci`: install all our deployment dependencies.
- `npm run build`: build the Rust executable and package it as an asset for CDK.
- `AWS_REGION=<YOUR_REGION> npm run cdk:deploy`: deploy the packaged asset.

Other than that, just use your regular Rust development setup.

## 📦 Building
We build our executable by running `npm run build`.

Behind the scenes, the `build` NPM script does the following:

- Adds our `x86_64-unknown-linux-musl` toolchain
- Runs `cargo build --release --target x86_64-unknown-linux-musl --features vendored`
- Renames and moves our executable to `./target/cdk/release/bootstrap`



In other words, we cross-compile a static binary for `x86_64-unknown-linux-musl`, rename the binary to `bootstrap`, and CDK uses that as its asset. With custom runtimes, AWS Lambda looks for an executable called `bootstrap`, so this is why we need the renaming step.

## 🚢 Deployment using CDK
We build and deploy by running `AWS_REGION=<YOUR_REGION> npm run deploy`, or just `AWS_REGION=<YOUR_REGION> npm run cdk:deploy` if you have already run `npm run build` previouslt.

A couple of quick notes:

- We require you to explicitly set the `AWS_REGION` environment variable (to avoid mistakenly deploying into some random region).
- If this is the first CDK deployment ever on your AWS account/region, run `AWS_REGION=<YOUR_REGION> npm run cdk:bootstrap` first. This creates the necessary CDK stack resources on the cloud.
- The CDK deployment bundles the `target/cdk/release` folder as its assets. This is where the `bootstrap` file needs to be located (handled by `npm run build`).


> 💡: The rest assumes you have run `npm run build` to create the `boostrap` asset we will use to deploy our function.

**Deploy the Rust asset:**

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

> 💡:  The security prompt is automatically disabled on CIs that set `CI=true`. You can remove this check by setting `--require-approval never` in the `cdk:deploy` npm command.

**Validate you CDK CloudFormation:**

If you want to check if you CDK generated CloudFormation is valid, you can do that via,

```bash
$ AWS_REGION=<YOUR_REGION> npm run cdk:synth
```

**Compare local against deployed:**

And finally, if you want to see a diff between your deployed stack and your local stack,

```bash
$ AWS_REGION=<YOUR_REGION> npm run cdk:diff
```


## 🚢 Deployment using AWS CLI
For real-usage we will deploy using AWS CDK, but you can dip your feet by deploying the Rust function via the AWS CLI.

We'll do a couple of steps additional steps for the first time setup. Only step 5. is necessary after having done this once:

1. Set up a role to use with our Lambda function.
2. Attach policies to that role to be able to actually do something.
3. Deploy the Lambda function using the `lambda.zip` we've built.
4. Invoke the function with a test payload.
5. (Optional) Update the Lambda function with a new `lambda.zip`.

> 💡: The rest assumes you have run `npm run build` followed by `npm run build:archive` to create the `lambda.zip` asset we will use to deploy our function.

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

> 💡: You can replace the `$(aws sts get-caller-identity | jq -r .Account)` call with your AWS account ID, if you do not have [jq](https://stedolan.github.io/jq/) installed.

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

## 🚗 🚀 GitHub Actions (CI/CD)
Using [GitHub actions](/actions) allows us to have an efficient CI/CD setup with minimal work.

The CI will work seamlessly without any manual steps, but for deployments via [GitHub releases](/releases) to work, you will need to set up your GitHub secrets for the repository for the following variables:

- **RELEASE_AWS_ACCESS_KEY_ID**
- **RELEASE_AWS_SECRET_ACCESS_KEY**
- **RELEASE_AWS_SECRET_ACCESS_KEY**

These are used in the `.github/workflows/release.yml` workflow for deploying the CDK stack whenever a GitHub release is made.

If you have a QA environment, you can also use pre-releases by adding the following additional variables:

- **PRE_RELEASE_AWS_ACCESS_KEY_ID**
- **PRE_RELEASE_AWS_SECRET_ACCESS_KEY**
- **PRE_RELEASE_AWS_SECRET_ACCESS_KEY**

which triggers the `.github/workflows/pre-release.yml` workflow instead.

## 🕵️‍♀️ Performance Traces using AWS XRay

Since we have enabled `tracing: lambda.Tracing.ACTIVE` in CDK and `tracing-config Mode=Active` in the CLI, we will get XRay traces for our AWS Lambda invocations.

You can checkout each trace in the AWS Console inside the XRay service, which is extremely valuable for figuring our timings between services, slow AWS SDK calls, annotating cost centers in your code, and much more.

## ❝ Naming convention

A couple of names need to be in sync:

- The stack name is specified in the `deployment/bin/stack.ts` file, in the `STACK_NAME` variable.
- The `name` field in the `package.json` is used to target the correct stack and should match `STACK_NAME`.
- The `name` of the Rust package in `Cargo.toml` is used in the `build:rename` NPM script to move the executable.

## 📚 Libraries
We are using a couple of libraries, in various state of maturity/release:

- The master branch of [aws-lambda-rust-runtime](https://github.com/awslabs/aws-lambda-rust-runtime) pending on [#216](https://github.com/awslabs/aws-lambda-rust-runtime/issues/216) ([README from PR](https://github.com/awslabs/aws-lambda-rust-runtime/blob/5d50e1ca29b20fccaf85074a6904fa4b6ece4f05/README.md)) to be finalised for official async/await support.
  - To statically build you might also need OpenSSL development headers, but we let the [openssl-sys package manage that](https://github.com/sfackler/rust-openssl/issues/980) for us with a `openssl-sys/vendored`.
  - We will need the musl tools, which we use instead of glibc, via `apt-get install musl-tools` for Ubuntu or `brew tap SergioBenitez/osxct && brew install FiloSottile/musl-cross/musl-cross` for macOS.
  - We need zip to create our deployment package when using the CLI, `apt-get install zip`.
- [aws-cdk](https://docs.aws.amazon.com/cdk/latest/guide/home.html) for deploying to AWS, using CloudFormation under-the-hood. We'll use their support for [Custom Runtimes](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html).
- The [aws-cdk fork](https://github.com/localstack/aws-cdk) of [localstack](https://github.com/localstack/localstack) for a local development setup.
- [cargo watch](https://github.com/passcod/cargo-watch) so we can develop using `cargo watch`, installable via `cargo install cargo-watch`.

## 🙋‍♀️ Contributing
Have any improvements our ideas? Don't be afraid to create an issue to discuss what's on your mind!
