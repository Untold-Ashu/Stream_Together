import e from 'express';
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true }, // Unique identifier for room
  hostId: { type: String, required: true }, // User ID of the room host
  privateKey: { type: String, required: true }, // Key to join the room
  participants: [{ type: String }], // Array of user IDs
  currentPlaybackState: {
    contentType: { type: String, enum: ['youtube', 'local', 'other'], required: true },
    videoUrl: { type: String }, // URL for external content
    timestamp: { type: Number, default: 0 }, // Current playback position in seconds
    isPlaying: { type: Boolean, default: false }, // Play/Pause state
  },
  chatHistory: [
    {
      senderId: { type: String },
      message: { type: String },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
