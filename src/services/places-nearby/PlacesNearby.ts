import { Coordinates, Place, PlacesResponse } from "../../types/types";
import { searchPlacesApi } from "../../utils/search-places-api/search-places-api";

type RequestError = {
    message: string
}

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<Place[] | RequestError>{
        // TODO coordinates validation
        try{
            const response: PlacesResponse = await searchPlacesApi.getPlacesNearby(coordinates);
            const processedPlaces = this.processPlacesNearby(response)
            return processedPlaces
        }catch(e){
            return {
                message: (e as Error).message
            }
        }
    }

    async processPlacesNearby(places: PlacesResponse): Promise<Place[]>{
        const processedPlaces = places.results.map(place=>{
            return {
                name: place.name,
                distance: place.distance,
                coordinates: {
                    latitude: place.geocodes.main.latitude,
                    longitude: place.geocodes.main.longitude
                },
                category: place.categories && place.categories[0].name
            }
        })
        return processedPlaces;
    }

    // TODO method for processing raw data
}

export { PlacesNearby };