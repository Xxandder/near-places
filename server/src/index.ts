import express, { Application } from 'express';
import cors from 'cors';

import { router as nearbyPlacesRouter } from './routes/nearby-places';

import { exceptionHandler } from './middlewares/error-handler'

const app: Application = express();

const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(nearbyPlacesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  

export default app;
