import {APIGatewayEvent, Callback, Context, Handler} from "aws-lambda";
import {FBProcess} from "./scripts/handlers/FBProcess";

export const processMessage: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
    await new FBProcess().process(JSON.parse(event.body)['entry'][0]['messaging'][0]['sender']['id']);
    cb(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Response sent',
            input: event
        })
    });
};

export const verifyWebHook: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
    if (event.queryStringParameters['hub.verify_token'] === process.env.FB_VERIFY_TOKEN && event.queryStringParameters['hub.challenge']) {
        return cb(null, {
            statusCode: 200,
            body: parseInt(event.queryStringParameters['hub.challenge'])
        });
    } else {
        return cb(new Error("Invalid token"));
    }
};


