# TUI Backend task
This app was builded as a backend test task for TUI project.
App provides a single endpoint for collecting repositories with their branches by userName.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
You will be automatically redirects to `/docs` page

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn start`

Runs the app in the prodcution mode.

### `yarn test`

Runs available tests together with linter fixes.

## Deployment
Further instruction showint pushing this application to AWS.

`aws cloudformation create-stack  --profile YOUR_PROFILE --stack-name github-user-activity --template-body file://./ecs.yml --capabilities CAPABILITY_NAMED_IAM --parameters ParameterKey=SubnetID,ParameterValue=YOUR_SUBNET_ID ParameterKey=VPCID,ParameterValue=YOUR_VPC_ID`

if you want to use anoher Docker image => see the instruction at `deploy-to-ecr` file.

Demo of this app is available on this Public IP `3.124.206.133`

