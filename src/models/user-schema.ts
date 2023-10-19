import { randomUUID } from 'crypto';
import mongoose from 'mongoose';
import User from '../models/user-schema.js';

const chatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  apssword: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});

export default mongoose.model('User', userSchema);
