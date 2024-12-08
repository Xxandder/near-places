import { BasePlacesApi } from "./base-search-places-api/BaseSearchPlacesApi";
import { FoursquarePlacesSearchApi } from "./foursquare-search-places-api/FoursquarePlacesSearchApi";

const currentApi = process.env['CURRENT_API']
const maxAmountOfPlaces = Number(process.env['MAX_AMOUNT_OF_PLACES'])
const minAmountOfPlaces = Number(process.env['MIN_AMOUNT_OF_PLACES'])
const baseUrl = process.env['SEARCH_PLACES_API_BASE_URL'] as string
const maxBatchSize = Number(process.env['MAX_BATCH_SIZE'])
const maxRadius = Number(process.env['MAX_RADIUS'])
const initialRadius = Number(process.env['INITIAL_RADIUS'])
const apiKey = process.env['API_KEY'] as string


function createPlacesApi(): BasePlacesApi {
    switch (currentApi) {
        case "foursquare":
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