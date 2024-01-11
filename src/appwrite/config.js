import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("65a05a15e5700eeb68d5");               // Your project ID

export const account = new Account(client);
export default client;