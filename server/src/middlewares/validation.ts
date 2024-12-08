
import { Request, Response, NextFunction } from 'express';
import { getNearbyPlacesSchema } from '../validation-schema';
import { ApiError } from '../exceptions';
import { HTTPStatusCode } from '../enums';


const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const { latitude, longitude } = req.query;

  const result = getNearbyPlacesSchema.safeParse({ latitude, longitude });

  if (!result.success) {
    next(new ApiError(result.error.message, HTTPStatusCode.BadRequest))
  }

  next();
};

export { validationMiddleware }
