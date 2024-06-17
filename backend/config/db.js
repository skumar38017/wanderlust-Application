<<<<<<< HEAD
import mongoose from 'mongoose';
import { MONGODB_URI } from './utils.js';
export default function connectDB() {
  try {
    mongoose.connect(MONGODB_URI);
=======
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export default function connectDB() {
  const url = process.env.MONGODB_URI;

  try {
    mongoose.connect(url);
>>>>>>> master
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
<<<<<<< HEAD
    console.log(`Database connected: ${MONGODB_URI}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${MONGODB_URI}`);
=======
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err}`);
>>>>>>> master
  });
  return;
}
