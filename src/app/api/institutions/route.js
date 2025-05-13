import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectionString } from "@/app/lib/database";
import { UniversityModel } from "@/app/lib/UniversityModal";




export async function GET() {
  try {
    await mongoose.connect(ConnectionString);
    const result = await UniversityModel.find({}); // Use model, not schema
    return NextResponse.json({ result, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    await mongoose.connect(ConnectionString, {
      dbName: "mydatabase",
    });

    const payload = await request.json();
    const data = new UniversityModel(payload);
    const result = await data.save();

    console.log("Saved Data:", result);
    console.log("Payload Received:", payload);

    return NextResponse.json({
      result,
      success: true,
      message: "Record successfully saved!",
    });
  } catch (error) {
    console.error("❌ Save Failed:", error.message);
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
}



