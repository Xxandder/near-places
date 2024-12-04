import { Coordinates, Place } from "../../types/types";
import { searchPlacesApi } from "../../utils/search-places-api/search-places-api";

type RequestError = {
    message: string
}

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<Place[] | RequestError>{
        // TODO coordinates validation
        try{
            const rawPlaces: Place[] = await searchPlacesApi.getPlacesNearby(coordinates);
            
            return rawPlaces
        }catch(e){
            return {
                message: (e as Error).message
            }
        }
    }

  

    // TODO method for processing raw data
}

export { PlacesNearby };