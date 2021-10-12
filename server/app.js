import express from 'express';
import path from 'path';
import getMessages from '../database/controllers/getMessages.js';
import postMessage from '../database/controllers/postMessage.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve('..', 'client', 'dist')));

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
