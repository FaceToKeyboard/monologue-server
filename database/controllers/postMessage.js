import MessageModel from '../models/message';

const postMessage = (message) => MessageModel.create(message);

export default postMessage;
