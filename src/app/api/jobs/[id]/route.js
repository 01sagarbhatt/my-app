import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb"; // You export default async function connectDB()
import Job from "@/app/models/Job";
import { ObjectId } from "mongodb";

export async function PUT(request, context) {
  const params = await context.params;
  const { id } = params;

  let body = await request.json();

  // Remove _id from body if present to avoid updating it
  if ("_id" in body) {
    delete body._id;
  }

  try {
    const db = await connectDB();
    const jobsCollection = db.collection("jobs");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
    }

    const result = await jobsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("PUT ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, context) {
  const params = await context.params;
  const { id } = params;

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
    }

    const db = await connectDB();
    const jobsCollection = db.collection("jobs");

    const result = await jobsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
