import MessageModel from '../models/message';

const getMessages = (userId) => MessageModel.find({ userId });

export default getMessages;
