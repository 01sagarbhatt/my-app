import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  collegeAddress: { type: String },
  contactNumber: { type: String },
  collegeDescription: { type: String }
});

// Prevent model overwrite error in development
export const UniversityModel = mongoose.models.universites || mongoose.model("universites", universitySchema);