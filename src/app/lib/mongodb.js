import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add MONGODB_URI to your environment variables');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return { client, db };
};
