import express from 'express';
import helmet from 'helmet';
import path from 'path';
import cors from 'cors';
import logger from '../utils/logger.js';
import getMessages from '../database/controllers/getMessages.js';
import postMessage from '../database/controllers/postMessage.js';

const clientPath = path.resolve('client', 'dist');

const app = express();
app.use(express.static(clientPath));
app.use(cors());
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/messages', (req, res) => {
  logger.debug('GET /messages - Query: %o', req.query);
  logger.debug('GET /messages - Body: %o', req.body);
  logger.debug('GET /messages - Params: %o', req.params);
  getMessages(req.query.userId)
    .then((dbResponse) => {
      logger.debug('Retrieved data from DB: %o', dbResponse);
      res.status(200).send(dbResponse);
    })
    .catch((err) => {
      res.status(500).send('Internal server error');
      logger.debug('Error retrieving from DB: %o', err);
    });
});

app.post('/messages', (req, res) => {
  postMessage(req.body)
    .then((dbResponse) => {
      res.status(201).send('Created');
      logger.debug('Saved data to DB. DB response: %o', dbResponse);
    })
    .catch((err) => {
      res.status(500).send('Internal server error');
      logger.debug('Error retrieving from DB: %o', err);
    });
});

export default app;
