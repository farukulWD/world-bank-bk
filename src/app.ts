import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Hi world bank !');
});
app.use('/api/v1', router);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
