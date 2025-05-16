import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  collegeAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  collegeDescription: { type: String, required: true },  // Added image URL field
  universityLink: { type: String, required: true }, // Added university link field
  createdAt: { type: Date, default: Date.now }
});

// Prevent model overwrite error
export const UniversityModel = mongoose.models.Universities ||  mongoose.model("Universities", universitySchema);