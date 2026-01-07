import { Client, Account, Databases, Query } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://appbuild.store/v1')
  .setProject('695e017e00001491e99e');

export const account = new Account(client);
export const databases = new Databases(client);
export { client, Query };
