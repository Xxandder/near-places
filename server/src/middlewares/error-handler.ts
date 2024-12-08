import { Request, Response, NextFunction } from 'express';
import { ErrorMessage, ApiError } from '../exceptions';
import { HTTPStatusCode } from '../enums';

const exceptionHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if(error instanceof ApiError){
    return res
      .status(error.errorCode)
      .send({
        errors: error.serializeErrors()
    });
  }
  return res
  .status(HTTPStatusCode.InternalServerError)
  .send({message: ErrorMessage.GENERIC});
 
};

export { exceptionHandler };