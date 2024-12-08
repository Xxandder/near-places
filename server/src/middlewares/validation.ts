
import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod'
import { getNearbyPlacesSchema } from '../validation-schema';
import { ApiError } from '../exceptions';
import { HTTPStatusCode } from '../enums';
import { ValidationSource } from './types';

const validationMiddleware = (schema: z.Schema, validationSource: ValidationSource) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (validationSource === 'body') {
                schema.parse(req.body);
            } else if (validationSource === 'query') {
                schema.parse(req.query);
            }
            next(); 
        } catch (error) {
            if (error instanceof ZodError) {
               next(new ApiError(error.message, HTTPStatusCode.BadRequest))
            }
        }
    };
}

export { validationMiddleware }
