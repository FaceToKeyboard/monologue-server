import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  date: { type: Date, required: true },
  messageType: String,
  messageContent: mongoose.Schema.Types.Mixed,
});

const MessageModel = mongoose.model('Message', messageSchema, 'Messages');

export default MessageModel;
