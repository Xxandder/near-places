import express, { Application } from 'express';
import cors from 'cors';

import dotenv from 'dotenv'; 
dotenv.config();

import { searchPlacesRouter } from './routes';

import { exceptionHandler } from './middlewares'



const app: Application = express();

const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(searchPlacesRouter)

app.use(exceptionHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  

export default app;
