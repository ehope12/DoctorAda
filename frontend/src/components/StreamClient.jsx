import { StreamChat } from 'stream-chat';

class StreamClient {
    static instance = null;
    static getInstance(apiKey) {
        if (!StreamClient.instance) {
            StreamClient.instance = new StreamChat(apiKey);
        }
        return StreamClient.instance;
    }
}

export default StreamClient;
