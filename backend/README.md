# Amplify notes

If at any point during development the GraphQL API (mock)
gets into a "bad state"

> ⚠ will reset to remote settings ⚠

First `git commit` and save your work (e.g., to
`schema.graphql`)

```sh
amplify env pull --restore
```

this will restore the local API state to match that of the
latest remote environment (last `amplify push`)

If you get this error when trying the above:

```
There was an error initializing your environment.
File at path: '<path to local amplify directory...>\team-provider-info.json' does not exist
```

> ⚠ will reset to remote settings ⚠

then run:

```
λ amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: env
Using default provider  awscloudformation
√ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

And you should now be able to:

```
λ amplify env pull --restore
√ Successfully pulled backend environment env from the cloud.
```

If you run into this:

```sh
× An error occurred when pushing the resources to the cloud

Attempting to add and remove a global secondary index at the
same time on the SubTable table in the Sub stack.
An error occurred during the push operation: Attempting to
add and remove a global secondary index at the same time on
the SubTable table in the Sub stack.
```

There is a work-around proposed in [this issue] (currently
awaiting a response in that comment thread). However, if the
table that the error references (i.e. `SubTable` = `type Sub`), you can do this:

1. Comment out the offending `type`
2. Comment out any references to the offending type
3. `amplify push` without the offending type or any
   references
4. Uncomment the (now with hopefully no simultaneous
   add/remove conflict) `type` and references in other types
5. `amplify push` again

[this issue]: https://github.com/aws-amplify/amplify-cli/issues/3923#issuecomment-708449489

## `amplify update function` Issues

If you ever need to update a function (e.g., to add
permissions to an existing/already deployed function) and
use `amplify update function`, all of your original lambda
settings are overwritten. Therefore, you will need to go
into the AWS Console and manually reconfigure some settings
including:

-   Environment variables
-   Lambda timeout (**IMPORTANT** -> broke my cron job)
-   Lambda memory

## `amplify remove auth` Issues

### IMPORTANT: Make sure you have the latest [IAM Policy for the CLI](https://docs.amplify.aws/cli/usage/iam)

If you ever need to change your auth settings and run into:

```sh
Template error: instance of Fn::GetAtt references undefined resource authcognito...
```

This probably is due to having auth tied up with the schema
and the associated queries/mutations/etc.

To fix:

1. First remove all `@auth` directives in your
   `schema.graphql` for the authentication type you'd like
   to remove.
2. `amplify push` the changes
3. You may now need to `amplify update api` to add a dummy
   authorizer to push the auth changes to the cloud. There
   is [an issue] pending for [a fix here].

[an issue]:
https://github.com/aws-amplify/amplify-cli/issues/229 [a fix
here]:
https://github.com/aws-amplify/amplify-cli/issues/229#issuecomment-494205438

```diff
λ amplify update api
? Please select from one of the below mentioned services:
+ GraphQL
? Select from the options below
+ Walkthrough all configurations
? Choose the default authorization type for the API
+ Amazon Cognito User Pool
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

Do you want to use the default authentication and security configuration?
+ Default configuration

 Warning: you will not be able to edit these selections.

How do you want users to be able to sign in?
+ Email
Do you want to configure advanced settings?
+ No, I am done.

Successfully added auth resource granicusd45229b2 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud


? Do you want to configure advanced settings for the GraphQL
+ API No, I am done.

GraphQL schema compiled successfully.

Edit your schema at C:\Users\logan\Projects\aws\amplify\granicus\backend\amplify\backend\api\granicus\schema.graphql or place .graphql files in a directory at C:\Users\logan\Projects\aws\amplify\granicus\backend\amplify\backend\api\granicus\schema
Successfully updated resource

```

4. Once you've `amplify push`d the dummy authorizer, you can
   now `amplify push` again to push the deleted authorizer
   to the cloud.

> **IMPORTANT: the prompt will ask you: `? Do you want to update code for your updated GraphQL API`. Answer `No`.**

```sh
C:\Users\logan\Projects\aws\amplify\granicus\backend (master -> origin) (amp-granicus@0.2.67)
λ amplify push
√ Successfully pulled backend environment env from the cloud.

Current Environment: env

| Category | Resource name    | Operation | Provider plugin   |
| -------- | ---------------- | --------- | ----------------- |
| Auth     | granicusd45229b2 | Create    | awscloudformation |
| Api      | granicus         | Update    | awscloudformation |
| Auth     | granicus00cc77e7 | Delete    | awscloudformation |
| Api      | subs             | No Change | awscloudformation |
| Function | cronJob1         | No Change | awscloudformation |
| Function | cronJob2         | No Change | awscloudformation |
| Function | cronJob3         | No Change | awscloudformation |
| Function | cronJob4         | No Change | awscloudformation |
| Function | cronJob5         | No Change | awscloudformation |
| Function | upload           | No Change | awscloudformation |
? Are you sure you want to continue? Yes

GraphQL schema compiled successfully.

Edit your schema at C:\Users\logan\Projects\aws\amplify\granicus\backend\amplify\backend\api\granicus\schema.graphql or place .graphql files in a directory at C:\Users\logan\Projects\aws\amplify\granicus\backend\amplify\backend\api\granicus\schema
? Do you want to update code for your updated GraphQL API No
| Updating resources in the cloud. This may take a few minutes...
```

### `Template error`

If you get this error:

```sh
Template error: instance of Fn::GetAtt references undefined resource authgranicus138b64d0
An error occurred during the push operation: Template error: instance of Fn::GetAtt references undefined resource authgranicus138b64d0
```

You should go to:

```sh
<project>/amplify/backend/api/parameters.json
```

and delete the `AuthCognitoUserPoolId` Object and try again

Now we...

```sh
λ amplify update api
? Please select from one of the below mentioned services: GraphQL
? Select from the options below Update auth settings
? Choose the default authorization type for the API API key
? Enter a description for the API key: 10_21_2020
? After how many days from now the API key should expire (1-365): 365
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
Cognito UserPool configuration
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource granicus7814967e locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

GraphQL schema compiled successfully.

# AWS Architectural Bottlenecks

## Lambda Concurrency Limits (aka: `EMFILE` Errors)

In Lambda (CloudWatch) logs, if you ever get something like:

```sh
2020-12-10T16:52:51.905Z	5bfabb92-80a7-4c68-9882-3243d5de3413	ERROR	{ FetchError: request to https://<your-api-gateway-app>.us-east-1.amazonaws.com/env/subs failed, reason: connect EMFILE 52.85.144.123:443 - Local (undefined:undefined)
    at ClientRequest.<anonymous> (/var/task/node_modules/node-fetch/lib/index.js:1461:11)
    at ClientRequest.emit (events.js:198:13)
    at ClientRequest.EventEmitter.emit (domain.js:448:20)
    at TLSSocket.socketErrorListener (_http_client.js:401:9)
    at TLSSocket.emit (events.js:198:13)
    at TLSSocket.EventEmitter.emit (domain.js:448:20)
    at emitErrorNT (internal/streams/destroy.js:91:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:59:3)
    at process._tickCallback (internal/process/next_tick.js:63:19)
  message:
   'request to https://<your-api-gateway-app>.us-east-1.amazonaws.com/env/subs failed, reason: connect EMFILE 52.85.144.123:443 - Local (undefined:undefined)',
  type: 'system',
  errno: 'EMFILE',
  code: 'EMFILE' }
```

This is due to your Lambda having a limited number of HTTP/file sockets open concurrently. I fix this using [async-sema](https://github.com/vercel/async-sema). You can look at the index.js file for either lambda in this project (as both required this governor to not hit these limits and error out).

You might also be interested in learning more about ["unreserved account concurrency"](https://www.youtube.com/watch?v=7Bc97tAySkU).

## AWS API Gateway Limits

-   Maximum time for a response = 30 seconds (this includes cold start times of any underlying resources - e.g., lambdas)

## AWS Lambda Payload Limits

-   Maximum payload size = 6MB
-   Maximum processing time = 15min

## AWS S3 Object Size Limits

-   Maximum file size = 5TB

## Evolving APIs with @key

There are a few important things to think about when making
changes to APIs using @key. When you need to enable a new
access pattern or change an existing access pattern you
should follow these steps.

1. Create a new index that enables the new or updated access
   pattern.
2. If adding an @key with 3 or more fields, you will need to
   back-fill the new composite sort key for existing data.
   With a @key(fields: ["email", "status", "date"]), you
   would need to backfill the status#date field with
   composite key values made up of each object’s status and
   date fields joined by a #. You do not need to backfill
   data for @key directives with 1 or 2 fields.
3. Deploy your additive changes and update any downstream
   applications to use the new access pattern.
4. Once you are certain that you do not need the old index,
   remove its @key and deploy the API again.

## Configure the [API Key](https://docs.amplify.aws/cli/graphql-transformer/config-params):

Much of the behavior of the GraphQL Transform logic is
configured by passing arguments to the directives in the
GraphQL SDL definition. However, certain other things are
configured by passing parameters to the CloudFormation
template itself. This provides escape hatches without
leaking too many implementation details into the SDL
definition. You can pass values to these parameters by
adding them to the `parameters.json` file in the API
directory of your amplify project.

Delete the existing API Key

```sh
{
  "CreateAPIKey": 0
}
```

Create new API Key

```sh
{
  "CreateAPIKey": 1
}
```

# Amplify Granicus API

## Refreshing Environment Variables after Key Refresh

The amplify CLI will configure environment variables for the
GraphQL API and/or the REST API, but will overwrite any
additional (i.e., Granicus API key) variables. So, upon
refreshing the GraphQL API keys, you have to go into the AWS
console to manually add in the `GD_KEY` env variables for
those lambdas to retain access.

Architecture

```diff
+ USER EVENTS
  - read                                          O   I
  - write
- ORDER                        001 002 003 004 005 006 007
# Chron Job (batch)
  - READ details for dates              O
  - CREATE details for dates            |   I-->O
# Granicus API                          |   |   |
  - bulletin details                    I-->O   |
# Appsync Fns                                   |
  - READ a detail                               |
  - CREATE a detail                             I-->O
# DynamoDB                                          |
  - CREATE                                          I-->O
  - READ
  - UPDATE
  - DELETE

```

0. PREP: One time call: fetch all old bulletin details
1. Daily chron job: fetch last week of bulletin details
2. CREATE item in DB for each new bulletin

## Prep

## Calling Your Sweet Newly Minted GraphQL API

Check out this [handy post] for more info. I just used
Postman with a `POST` and the `x-api-key` header

[handy post]: https://medium.com/@hiroyuki.osaki/call-graphql-api-with-apollo-link-from-lambda-13c809e982c9

### Add a Detail

```graphql
mutation {
    createBulletinDetail(
        input: { subject: "test from postman", to_text: "logan@bleep.io", addresses_count: 1 }
    ) {
        id
    }
}
```

### Get Bulletin Details

```graphql
query {
    listBulletinDetails {
        items {
            id
            created_at
            subject
            to_text
        }
    }
}
```

with `fetch` use [nanographql]

[nanographql]: https://github.com/yoshuawuyts/nanographql

## Dealing with CLI Errors on `amplify push`

If you get this error when trying to `amplify push`:

```sh
× An error occurred when pushing the resources to the cloud

Resource is not in the state stackUpdateComplete
An error occured during the push operation: Resource is not in the state stackUpdateComplete

```

Step 1: `amplify delete`

```sh
C:\Users\logan\Projects\aws\amp-granicus
λ amplify delete
? Are you sure you want to continue? (This would delete all the environments of the project from the cloud and wipe out all the local amplify resource files) Yes
- Deleting resources from the cloud. This may take a few minutes...
Deleting env:dev
√ Project deleted in the cloud
Project deleted locally.
```

Step 2: `amplify init`

```sh

C:\Users\logan\Projects\aws\amp-granicus
λ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project amp-granicus
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using none
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use amp-granicus
Adding backend environment dev to AWS Amplify Console app: d10wu8ux5vje28
\ Initializing project in the cloud...

```

Then you'll see:

```sh

√ Successfully created initial AWS cloud resources for deployments.
√ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!
```

Go ahead and `amplify add <something>`

```sh

λ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: <whatevs>
? Choose the default authorization type for the API API key
? Enter a description for the API key: <WHATEVS_API_KEY>
? After how many days from now the API key should expire (1-365): 7
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? Yes
? Provide your schema file path: src/schema.graphql
...
√ Generated GraphQL operations successfully and saved at src\graphql
√ Code generated successfully and saved in file src\API.ts
√ All resources are updated in the cloud

```

And you'll get your environment:

```sh
GraphQL endpoint: https://75zy4wltrvfypazzsnkweypfwe.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: da2-bz5xff5xd5fx7bvnofitwp2poq
```

# `KEY` Locations

## Starter Instructions

1. Change project name in `package.json`

```diff
{
-  "name": "ts-starter",
+  "name": "<whatevs>",
-  "description": "typescript configuration and starter project",
+  "description": "<also whatevs...>",
...
-  "repository": "https://github.com/loganpowell/ts-starter",
+  "repository": "https://github.com/<profile>/<repo>",
-  "homepage": "https://github.com/loganpowell/ts-starter",
+  "homepage": "https://github.com/<profile>/<repo>",
-  "scripts": {
-    "pages": "gh-pages -d @-0/spool",
# referenceTitle from ./jsdoc/jsdoc.json:
+    "pages": "gh-pages -d <referenceTitle>",
    ...
```

2. Update `./jsdoc/jsdoc.json`

```diff
  "source": {
    "include": ["src", "README.md"],
    "includePattern": "\\.(jsx|js|ts|tsx)$",
-   "excludePattern": "(node_modules/|spool/)"
+   "excludePattern": "(node_modules/|<project>/)"
  },
  "templates": {
-   "referenceTitle": "`@-0/spool` docs",
+   "referenceTitle": "<project> docs",
    "disableSort": true,
    "collapse": false
  },
```

3. `npm i`

## Tests

-   Unit tests should live next to (in the same directory as)
    the functions that they test.
-   integration tests (tests that connect unit tests together
    that don't have an associated function definition) should
    live in the `/tests` directory

## Dependencies

1. `concurrently`: concurrently runs
    - typescript compiler `watch` mode
    - jest tests
    - run with `npm run tests`
2. compiled from/to esm modules throughout (uses typescript
   compiler)
3. enables esm modules for tests (uses `babel-jest`)
4. integrated with jsdoc template from [better-docs]
5. checks for circular dependencies in `lib` output using
   `madge`

## Customizing

If you don't need one of the features above, just delete its
directory and any related scripts from `package.json`

[better-docs]: https://github.com/SoftwareBrothers/better-docs
