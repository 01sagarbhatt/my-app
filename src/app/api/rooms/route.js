import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { ConnectionString } from '@/app/lib/database';

const roomSchema = new mongoose.Schema({
  type: String,
  location: String,
  rent: Number,
  amenities: String,
  availableFrom: Date,
  createdAt: { type: Date, default: Date.now }
});

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

// pages/api/rooms.js or app/api/rooms/route.js

export async function GET() {
  try {
    await mongoose.connect(ConnectionString);
    const result = await Room.find().sort({ createdAt: -1 });
    
    // Return in the expected format
    return NextResponse.json({
      success: true,
      result: result
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     await mongoose.connect(ConnectionString);
//     const result = await Room.find().sort({ createdAt: -1 });
//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await mongoose.connect(ConnectionString);
//     const result = await Room.find({});
//     return NextResponse.json({ result, success: true });
//   } catch (error) {
//     return NextResponse.json({ error: error.message, success: false }, { status: 500 });
//   }
// }


export async function POST(request) {
  try {
    await mongoose.connect(ConnectionString);

    const body = await request.json();

    const newRoom = new Room(body);
    const savedRoom = await newRoom.save();

    return NextResponse.json({
      success: true,
      message: "Room added successfully",
      result: savedRoom,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await mongoose.connect(ConnectionString);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Room ID is required' },
        { status: 400 }
      );
    }

    const result = await Room.findByIdAndDelete(id);
    
    if (!result) {
      return NextResponse.json(
        { error: 'Room not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Room deleted successfully' }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}