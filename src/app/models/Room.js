import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  type: String,
  location: String,
  rent: Number,
  availableFrom: Date,
  amenities: String,
  description: String,
  contact: String,
  images: [String],
}, { timestamps: true });

export default mongoose.models.Room || mongoose.model('Room', RoomSchema);
