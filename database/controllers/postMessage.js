import MessageModel from '../models/messageModel.js';

const postMessage = (message) => MessageModel.create(message);

export default postMessage;
