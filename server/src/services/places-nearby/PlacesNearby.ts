import { 
    type Coordinates, 
    type Place, 
    type RawPlace } from "../../types";

import { searchPlacesApi } from "../../../../server/src/api/search-places-api/search-places-api";

type RequestError = {
    message: string
}

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<Place[] | Error>{
        // TODO coordinates validation

        const rawPlaces: RawPlace[] = await searchPlacesApi.getPlacesNearby(coordinates);
        
        if(!rawPlaces.length){
            return []
        }
        const processedPlaces = this.processRawPlaces(coordinates, rawPlaces)

        const sortedPlaces = processedPlaces.sort((a, b)=> {
            return a.distance - b.distance
        })
        return sortedPlaces
        
    }

    processRawPlaces(personCoordinates: Coordinates, places: RawPlace[]): Place[]{
        const processedPlaces = places.map(place=>{
            const processedPlace: Place = {
                name: place.name,
                coordinates: place.coordinates,
                distance: place.distance ?? this.getDistance(personCoordinates, place.coordinates),
                ...(place.category && {category: place.category}),
                ...(place.address && {address: place.address})
            }
            return processedPlace
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