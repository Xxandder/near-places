import { NextFunction, Request, Response } from "express";

import { placesNearby } from '../services/places-nearby/palces-nearby'
import { Place } from "../types";


const getNearbyPlaces = async (req: Request, res: Response, next: NextFunction) => {
        const {longitude, latitude} = req.query
        try{
            let places: Place[] = [];
            if(longitude && latitude){
                places = await placesNearby.getPlacesNearby({
                    latitude: parseInt(latitude as string), 
                    longitude: parseInt(longitude as string)
                })
               
            }
            res.status(200).json(places)
         
        }catch(e){
            res.status(500).send({
                message: 'Error'
            })
        }
    
}


export { getNearbyPlaces };