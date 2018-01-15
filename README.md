# serverless-typescript-facebook-bot

A example of a facebook Bot written in typescript ready to work inside serverless architectures.

## Deploy

To deploy with example is used serverless: a common utility to deploy serverless architectures.
In particular, this example contains a configuration for AWS world.

**Note:** You might want to look take a look at the Facebook Messenger Platform [quickstart guide](https://developers.facebook.com/docs/messenger-platform/quickstart) or the Facebook Messenger Platform [in-depth documentation](https://developers.facebook.com/docs/messenger-platform/product-overview/setup).

### Variables
- FB_ACCESS_TOKEN: the public token of your facebook's page
- FB_VERIFY_TOKEN: the private token used to authenticate your application
- VERSION: the version of your API

### Steps
- Change the value of the environment variables declarated inside `activate.sh`
- Activate the environment that contains the variables launching the command `source activate.sh`
- Install the nodeJS modules `npm install`
- Run the deploy `serverless deploy`
- Fill the public endpoint of your facebook webHook
- Activate your application with a post call at `https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=${FB_ACCESS_TOKEN}`