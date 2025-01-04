
import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod'
import { ApiError } from '../exceptions';
import { HTTPStatusCode } from '../enums';
import { ValidationSource as ValidationSourceEnum } from './enums';
import { ValidationSource as ValidationSourceType } from './types';

const validationMiddleware = (schema: z.Schema, validationSource: ValidationSourceType) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            switch(validationSource){
                case ValidationSourceEnum.BODY:
                    schema.parse(req.body);
                    break;
                case ValidationSourceEnum.QUERY:
                    schema.parse(req.query);
                    break;
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
