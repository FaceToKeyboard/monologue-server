import { expect } from 'chai';
import mongoose from 'mongoose';
import MessageModel from '../database/models/messageModel.js';
import getMessages from '../database/controllers/getMessages.js';

const messageSample = [
  {
    userId: 1,
    messageType: 'text',
    messageContent: 'Hello world',
  },
  {
    userId: 1,
    messageType: 'text',
    messageContent: 'Another message',
  },
  {
    userId: 1,
    messageType: 'text',
    messageContent: 'The third message',
  },
];

describe('getMessages()', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:27017/monologue-test')
      .then(() => MessageModel.create(messageSample))
      .then(() => done())
      .catch(done);
  });

  it('should retrieve all messages by a particular userId', (done) => {
    const userId = 1;
    getMessages(userId).lean()
      .then((dbResults) => {
        expect(dbResults).to.have.length(3);
        expect(dbResults[0]).to.include.all.keys('userId', 'messageType', 'messageContent');
        done();
      })
      .catch(done);
  });

  after((done) => {
    mongoose.connection.db.dropCollection('Messages')
      .then(() => mongoose.disconnect(done))
      .catch(done);
  });
});
