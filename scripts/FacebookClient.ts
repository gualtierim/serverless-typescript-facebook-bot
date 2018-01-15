import {FacebookMessage} from "./Types";
import {HttpClient} from "./HttpClient";

export class FacebookClient {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async sendMessage(message: FacebookMessage): Promise<void> {
        return await this.httpClient.post(
            `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_ACCESS_TOKEN}`,
            message
        );
    }
}