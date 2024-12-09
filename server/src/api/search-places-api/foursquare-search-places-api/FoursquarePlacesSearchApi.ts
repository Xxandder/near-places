import { HTTPMethod } from "../../../enums"
import { type RawPlace, type Coordinates} from "../../../types"
import { type PlacesResponse } from "./types"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { placesApiMapper } from "../mappers"
import { BasePlacesApi } from "../base-search-places-api/BaseSearchPlacesApi"

class FoursquarePlacesSearchApi extends BasePlacesApi{

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

    async getLength(responseJson: any): Promise<number>{
        return responseJson.results.length
    }

    async parseResponse(responseJson: any): Promise<RawPlace[]> {
        const results: PlacesResponse['results'] = (responseJson as PlacesResponse).results
        const places = placesApiMapper(results.slice(0, this.maxAmountOfPlaces))

        return places
    }


}

export { FoursquarePlacesSearchApi };