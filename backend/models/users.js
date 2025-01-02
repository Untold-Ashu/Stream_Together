import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    userId: { type: String, required: true, unique: true }, // UUID for user
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    roomsCreated: { type: [String], default: [] }, // Array of room IDs
    roomsJoined: [
      {
          roomId: { type: String, required: true },
          roomName: { type: String, required: true }
      }
  ], // Array of room IDs
    role: { type: String, enum: ['host', 'participant'], default: 'participant' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  const User = mongoose.model('User', userSchema);
export default User;