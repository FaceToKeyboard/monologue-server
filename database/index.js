import mongoose from 'mongoose';

const dbConnect = (dbHost, dbPort, dbName) => (
  mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
);

export default dbConnect;
