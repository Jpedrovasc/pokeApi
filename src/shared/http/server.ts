import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '../errors/AppError';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' })); 

app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: error.constructor.name, 
        message: error.message,
      });
    }
    return response.status(500).json({
      status: error.constructor.name, 
      message: error.message,
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});
