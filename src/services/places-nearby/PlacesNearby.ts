import { Coordinates, Place, RawPlace } from "../../types/types";
import { searchPlacesApi } from "../../utils/search-places-api/search-places-api";

type RequestError = {
    message: string
}

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<Place[] | RequestError>{
        // TODO coordinates validation
        try{
            const rawPlaces: RawPlace[] = await searchPlacesApi.getPlacesNearby(coordinates);
            
            const processedPlaces = this.processRawPlaces(coordinates, rawPlaces)
            return processedPlaces
        }catch(e){
            return {
                message: (e as Error).message
            }
        }
    }

    processRawPlaces(personCoordinates: Coordinates, places: RawPlace[]): Place[]{
        const processedPlaces = places.map(place=>{
            return {
                name: place.name,
                coordinates: place.coordinates,
                distance: place.distance || this.getDistance(personCoordinates, place.coordinates)
            }
        })
        return processedPlaces
    }

    private getDistance(locationA: Coordinates, locationB: Coordinates): number{

        const EARTH_RADIUS_KM = 6371; 
        const DEG_TO_RAD = Math.PI / 180;
      
        const deltaLatitude = (locationB.latitude - locationA.latitude) * DEG_TO_RAD; 
        const deltaLongitude = (locationB.longitude - locationA.longitude) * DEG_TO_RAD;
      
        
        const avgLat = ((locationA.latitude + locationB.latitude) / 2) * DEG_TO_RAD;
      
      
        const deltaX = deltaLongitude * EARTH_RADIUS_KM * 1000 * Math.cos(avgLat); 
        const deltaY = deltaLatitude * EARTH_RADIUS_KM * 1000;
      
        return Math.round(Math.sqrt(deltaX ** 2 + deltaY ** 2));
    }

    

  

    // TODO method for processing raw data
}

export { PlacesNearby };