import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true }, // Name of the room
  roomId: { type: String, required: true, unique: true }, // Unique identifier for the room
  hostId: { type: String, required: true }, // User ID of the room host
  roomPassword: { type: String, required: true }, // Key to join the room
  participants: [
    {
      userId: { type: String, required: true }, // User ID of the participant
      username: { type: String, required: true }, // Username of the participant
      role: { type: String, enum: ['host', 'participant'], default: 'participant' }, // Role in the room
    }
  ],
  currentPlaybackState: {
    contentType: { type: String, enum: ['youtube', 'local', 'other'], required: false },
    videoUrl: { type: String }, // URL for external content
    timestamp: { type: Number, default: 0 }, // Current playback position in seconds
    isPlaying: { type: Boolean, default: false }, // Play/Pause state
  },
  chatHistory: [
    {
      senderId: { type: String }, // User ID of the sender
      message: { type: String }, // Message content
      timestamp: { type: Date, default: Date.now }, // Timestamp of when the message was sent
    },
  ],
  createdAt: { type: Date, default: Date.now }, // When the room was created
  updatedAt: { type: Date, default: Date.now }, // When the room was last updated
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
