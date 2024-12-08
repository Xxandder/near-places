import { Request, Response, NextFunction } from 'express';
import { generateSearchPlacesCacheKey } from '../utils'
import { redis } from '../redis';

const checkCache = async (req: Request, res: Response, next: NextFunction) => {
    const { latitude, longitude } = req.query;
  
    const cacheKey = generateSearchPlacesCacheKey({
        latitude: Number(latitude), 
        longitude: Number(longitude)
    })
  
    const cachedData = await redis.get(cacheKey);
   
    if (cachedData) {
        return res.send(JSON.parse(cachedData));
    }

    res.locals.cacheKey = cacheKey; 
    next();

  };

  export { checkCache }