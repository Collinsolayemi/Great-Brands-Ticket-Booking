import { Request, Response, NextFunction } from 'express';
import { AppError } from '../src/utils/error/app.error';


// Error handling middleware function
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if the error is an instance of AppError
  if (err instanceof AppError) {
    // If it's an AppError, send custom error response
    return res.status(err.statusCode).json({ error: err.message });
  } else {
    // If it's not an AppError, send a generic error response
    console.error('Unhandled error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the error handling middleware function
export { errorHandler };