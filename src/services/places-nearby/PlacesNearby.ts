import { Coordinates, Place, PlacesResponse } from "../../types/types";
import { searchPlacesApi } from "../../utils/search-places-api/search-places-api";

class PlacesNearby {

    async getPlacesNearby(coordinates: Coordinates): Promise<PlacesResponse>{
        // TODO coordinates validation
        
        const response: PlacesResponse = await searchPlacesApi.getPlacesNearby(coordinates);
        
        // TODO response processing
        return response

        
    }
   

    // TODO method for processing raw data
}

export { PlacesNearby };