import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/database";

// Mongoose Schema
const RoomSchema = new mongoose.Schema({
  type: String,
  location: String,
  rent: Number,
  amenities: String,
  availableFrom: Date,
});

const Room = mongoose.models.Room || mongoose.model("Room", RoomSchema);

export async function GET() {
  try {
    await mongoose.connect(ConnectionString);
    const result = await Room.find({});
    return NextResponse.json({ result, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
}


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
