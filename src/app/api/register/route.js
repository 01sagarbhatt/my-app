import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
//  import bcrypt from 'bcryptjs';
import { ConnectionString } from '@/app/lib/database';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(req) {
  try {
    await mongoose.connect(ConnectionString);

    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
    //   password: hashedPassword,
      password,
    });

    await newUser.save();

    return NextResponse.json({ success: true, message: 'Registration successful' });

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
