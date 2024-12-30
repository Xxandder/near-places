import { BasePlacesApi } from "./base-search-places-api/BaseSearchPlacesApi";
import { FoursquarePlacesSearchApi } from "./foursquare-search-places-api/FoursquarePlacesSearchApi";
import { ApiName } from "./enums";

import { baseUrl,
    apiKey,
    maxAmountOfPlaces,
    minAmountOfPlaces,
    maxBatchSize,
    maxRadius,
    initialRadius,
    currentApi 
} from '@/config'



function createPlacesApi(): BasePlacesApi {
    switch (currentApi) {
        case ApiName.FOURSQUARE:
            return new FoursquarePlacesSearchApi(
                maxAmountOfPlaces,
                minAmountOfPlaces,
                maxBatchSize,
                maxRadius,
                initialRadius,
                apiKey,
                baseUrl
            );
        default:
            throw new Error(`Unknown api: ${currentApi}`);
    }
}

const searchPlacesApi = createPlacesApi()

export { searchPlacesApi }