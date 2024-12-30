
import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod'
import { ApiError } from '../exceptions';
import { HTTPStatusCode } from '../enums';
import { ValidationSource } from './types';

const validationMiddleware = (schema: z.Schema, validationSource: ValidationSource) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            if (validationSource === 'body') {
                schema.parse(req.body);
            } else if (validationSource === 'query') {
                schema.parse(req.query);
            }
            next(); 
        } catch (error) {
          
            if (error instanceof ZodError) {
                const apiError = new ApiError(JSON.parse(error.message)[0].message, HTTPStatusCode.BadRequest)

                next(apiError)
            }
        }
    };
}

export { validationMiddleware }
