import { Coordinates, Place, PlacesResponse } from "../../types/types";
import { searchPlacesApi } from "../../utils/search-places-api/search-places-api";

type RequestError = {
    message: string
}

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<PlacesResponse | RequestError>{
        // TODO coordinates validation
        try{
            const response: PlacesResponse = await searchPlacesApi.getPlacesNearby(coordinates);
            return response
        }catch(e){
            return {
                message: (e as Error).message
            }
        }
    }
   

    // TODO method for processing raw data
}

export { PlacesNearby };