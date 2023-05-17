import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import connectDB from './db.js';
import activityRoutes from './activityRoutes.js';

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', activityRoutes);

//not found
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
