import { log } from 'console';
import { connect, disconnect } from 'mongoose';

async function connectMongo() {
  try {
    await connect(process.env.MONGODB_URl);
  } catch (err) {
    log('unable to connect to the MongoDB' + err.message);
    throw new Error('unable to connect to the MongoDB');
  }
}

async function disconnectMongo() {
  try {
    await disconnect();
  } catch (err) {
    log('unable to disconnect from the MongoDB' + err.message);
    throw new Error('unable to disconnect to the MongoDB');
  }
}

export { connectMongo, disconnectMongo };
