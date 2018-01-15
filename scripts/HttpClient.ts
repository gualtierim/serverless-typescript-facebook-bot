import rp = require("request-promise-native");
import {Dictionary} from "lodash";

export class HttpClient {

    async get(uri: string, headers: Dictionary<string> = {}): Promise<any> {
        return await rp({method: "GET", uri: uri, headers: headers, json: true}).promise();
    }

    async post(uri: string, body: Object, headers?: Dictionary<string>): Promise<any> {
        return await rp({
            method: "POST",
            uri: uri,
            body: body,
            headers: headers,
            json: true,
            resolveWithFullResponse: true
        }).promise().then((response: any) => {
            if (response.statusCode !== 200) {
                Promise.reject("Bad request");
            }

            return Promise.resolve(response.body);
        });
    }
}