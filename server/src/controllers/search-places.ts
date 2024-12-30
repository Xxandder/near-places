import { NextFunction, Request, Response } from "express";

import { nearbyPlacesService } from '@/services/nearby-places'
import { Place } from "@/types";

import { redis } from "@/redis";

const getNearbyPlaces = async (req: Request, res: Response, next: NextFunction) => {
        const {longitude, latitude} = req.query
        try{
            let places: Place[] = [];
            if(longitude && latitude){
                places = await nearbyPlacesService.getPlacesNearby({
                    latitude: Number(latitude as string), 
                    longitude: Number(longitude as string)
                })
               
            }
            await redis.set(res.locals.cacheKey, JSON.stringify(places), 'EX', 3600); 
            res.status(200).json(places)
         
        }catch(e){
            console.log(e)
            next(e)
        }
    
}


export { getNearbyPlaces };