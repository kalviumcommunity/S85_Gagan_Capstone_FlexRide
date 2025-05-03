import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isStudent: { type: Boolean, default: false },
  profilePicture: { type: String },
  contactNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
