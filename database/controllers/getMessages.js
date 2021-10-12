import MessageModel from '../models/messageModel.js';

const getMessages = (userId) => MessageModel.find({ userId });

export default getMessages;
