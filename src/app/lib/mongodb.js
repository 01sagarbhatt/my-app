// /lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let db;

export default async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
     console.log("✅ MongoDB connected successfully");
    db = client.db('mydatabase'); // Make sure this is defined
  }
  return db;
}
