import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error('Please add MONGODB_URI to your environment variables');
}

// In development, use a global variable to preserve value across module reloads caused by HMR (Hot Module Replacement)
if (!global._mongoClientPromise) {
  client = new MongoClient(uri); // ✅ No need for options
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(dbName || "default");
  return { client, db };
};
