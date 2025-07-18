import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function GET() {
  try {
    const db = await connectDB();
    const users = await db.collection('users').find({}).toArray();
    
    // Convert MongoDB _id to string and remove sensitive data
    const sanitizedUsers = users.map(user => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
        password: user.password, // include this for login match
      role: user.role || 'User', // Default role if not specified
      status: user.status,
      createdAt: user.createdAt
    }));

    return NextResponse.json(sanitizedUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}



// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return new Response(JSON.stringify({ message: 'Missing fields' }), { status: 400 });
//     }

//     const db = await connectDB();

//     const existingUser = await db.collection('users').findOne({ email });
//     if (existingUser) {
//       return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
//     }

//     await db.collection('users').insertOne({
//       name,
//       email,
//       password,
//       createdAt: new Date(),
//       status: 'registered',
//     });

//     return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
//   }
// }

export async function POST(req) {
  const { name, email, password } = await req.json();
  const db = await connectDB();

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "User registered successfully" });
}