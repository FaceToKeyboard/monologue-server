import express from 'express';
import helmet from 'helmet';
import path from 'path';
import cors from 'cors';
import getMessages from '../database/controllers/getMessages.js';
import postMessage from '../database/controllers/postMessage.js';

const app = express();
const clientPath = path.resolve('client', 'dist');
app.use(express.static(clientPath));
app.use(cors());
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: "'self'"
  },
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/messages', (req, res) => {
  getMessages(req.query.userId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(500).send('Internal server error');
    });
});

app.post('/messages', (req, res) => {
  postMessage(req.body)
    .then(() => {
      res.status(201).send('Created');
    })
    .catch(() => {
      res.status(500).send('Internal server error');
    });
});

export default app;
