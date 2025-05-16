import connectDB from "@/app/lib/mongodb";
import { UniversityModel } from "@/app/lib/UniversityModal";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();
    
    const updatedCollege = await UniversityModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    
    if (!updatedCollege) {
      return NextResponse.json(
        { error: "College not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "College updated successfully", result: updatedCollege },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to update college" },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedCollege = await UniversityModel.findByIdAndDelete(id);
    
    if (!deletedCollege) {
      return NextResponse.json(
        { error: "College not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "College deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to delete college" },
      { status: 400 }
    );
  }
}