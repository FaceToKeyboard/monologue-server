import { expect } from 'chai';
import mongoose from 'mongoose';
import MessageModel from '../database/models/messageModel.js';
import postMessage from '../database/controllers/postMessage.js';

const messageSample = {
    userId: 2,
    messageType: 'text',
    messageContent: 'This is a POST',
  };

describe('postMessage()', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:27017/monologue-test')
      .then(() => done())
      .catch(done);
  });

  it('should be able to insert a document into the DB', (done) => {
    postMessage(messageSample)
      .then(() => MessageModel.find({userId: 2}).lean())
      .then(data => {
        expect(data).to.have.length(1);
        expect(data[0].messageContent).to.equal('This is a POST');
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
