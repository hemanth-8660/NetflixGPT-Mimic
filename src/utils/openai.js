import OpenAI from "openai";
import { OpenAIApiKey } from "./constants";
const client = new OpenAI({
    apiKey: OpenAIApiKey,
    dangerouslyAllowBrowser: true
});



export default client;