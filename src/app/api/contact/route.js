import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { ConnectionString } from '@/app/lib/database';

// Define contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export async function POST(req) {
  try {
    await mongoose.connect(ConnectionString);

    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || 'Database error' },
      { status: 500 }
    );
  }
}