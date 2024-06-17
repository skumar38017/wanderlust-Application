import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js';
<<<<<<< HEAD
import { PORT } from './config/utils.js';
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';
import { connectToRedis } from './services/redis.js';
const app = express();
const port = PORT || 5000;
=======
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';
const app = express();
const port = process.env.PORT || 5000;
>>>>>>> master

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(compression());

// Connect to database
connectDB();

<<<<<<< HEAD
// Connect to redis
connectToRedis();

=======
>>>>>>> master
// API route
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Yay!! Backend of wanderlust app is now accessible');
=======
  res.send('Yay!! Backend of wanderlust app is now accessible ');
>>>>>>> master
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
