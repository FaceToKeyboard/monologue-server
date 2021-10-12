import pino from 'pino';
import app from './app.js';

const logger = pino();

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  logger.info('Server running on ', port);
  logger.info('🚀🚀🚀🚀🚀🚀🚀');
});
