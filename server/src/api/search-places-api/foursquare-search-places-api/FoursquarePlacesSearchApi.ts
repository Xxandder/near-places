import { HTTPMethod } from "../../../../../client/src/enums/enums"
import { type RawPlace, type Coordinates} from "../../../../../client/src/types/types"
import { type PlacesResponse } from "./types/types"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { placesApiMapper } from "../mappers/places-api-response.mapper"
import { BasePlacesApi } from "../base-search-places-api/BaseSearchPlacesApi"

class FoursquarePlacesSearchApi<T> extends BasePlacesApi{

    public constructor(
        maxAmountOfPlaces: number,
        minAmountOfPlaces: number,
        maxBatchSize: number,
        maxRadius: number,
        initialRadius: number,
        apiKey: string,
        baseUrl: string

    ){
        super(
            maxAmountOfPlaces,
            minAmountOfPlaces,
            maxBatchSize,
            maxRadius,
            initialRadius,
            apiKey,
            baseUrl
        )
    }

    async makeRequest({
        coordinates,
        radius,
        limit
    }: {
        coordinates: Coordinates,
        radius?: number,
        limit?: number
    }): Promise<Response>{
        const headers = new Headers()
        headers.append('Authorization', this.apiKey)
        const response = await this.load({
            path:  SearchPlacesApiPath.PLACES_NEARBY,
            method: HTTPMethod.GET,
            payload: null,
            headers,
            queryParams: {
                ll: `${coordinates.latitude}%2C${coordinates.longitude}`,
                limit: `${limit ?? this.maxAmountOfPlaces}`,
                radius: `${radius}`
            }
        })
        return response 
    }

    async getLength(response: Response): Promise<number>{
        const responseJson = await response.json()
        return responseJson.results.length
    }

    async parseResponse(response: Response): Promise<RawPlace[]> {
        const responseJson = await response.json()
        const results: PlacesResponse['results'] = (responseJson as PlacesResponse).results
        const places = placesApiMapper(results.slice(0, this.maxAmountOfPlaces))

        return places
    }


}

export { FoursquarePlacesSearchApi };