import { BasePlacesApi } from "./base-search-places-api/BaseSearchPlacesApi";
import { FoursquarePlacesSearchApi } from "./foursquare-search-places-api/FoursquarePlacesSearchApi";
import { BASE_URL } from "./constants/constants"

function createPlacesApi(currentApi: string): BasePlacesApi {
    switch (currentApi) {
        case "current":
            return new CurrentPlacesApi(baseUrl);
        case "alternative":
            return new AlternativePlacesApi(baseUrl);
        default:
            throw new Error(`Unknown environment: ${environment}`);
    }
}

const searchPlacesApi = new SearchPlacesApi(BASE_URL)

export { searchPlacesApi }