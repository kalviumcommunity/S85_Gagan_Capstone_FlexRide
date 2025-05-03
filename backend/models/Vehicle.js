import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['Car', 'Bike', 'Scooter'], required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
  pricePerHour: { type: Number, required: true },
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Vehicle', vehicleSchema);
