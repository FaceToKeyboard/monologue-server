import pino from 'pino';
import app from './app.js';
import dbConnect from '../database/index.js';

const logger = pino();

const port = process.env.SERVER_PORT || 3000;

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

dbConnect(dbHost, dbPort, dbName)
  .catch(err => logger.debug('Error connecting to database: %o', err))
  .then(() => {
    logger.info(`Connected to DB: mongodb://${dbHost}:${dbPort}/${dbName}`)
    app.listen(port, () => {
      logger.info('Server running on %d', port);
      logger.info('🚀🚀🚀🚀🚀🚀🚀');
    });
  });
