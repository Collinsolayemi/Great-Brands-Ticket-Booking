//creating a class for error handling
export class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(`${statusCode}: ${message}`);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }