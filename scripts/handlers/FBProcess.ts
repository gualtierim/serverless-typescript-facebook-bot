import {FacebookClient} from "../FacebookClient";

export class FBProcess {
    private facebookClient: FacebookClient;

    constructor() {
        this.facebookClient = new FacebookClient();
    }

    async process(senderId): Promise<any> {
        return await this.facebookClient.sendMessage({
            recipient: {
                id: senderId
            },
            message: {
                text: new Date().toString()
            }
        })
    }
}