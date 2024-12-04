import { HTTPMethod } from "../../enums/enums"
import { type RawPlace, type Coordinates} from "../../types/types"
import { type PlacesResponse } from "./types/types"
import { BaseApi } from "../base-api/BaseApi"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { 
    API_KEY, 
    MAX_AMOUNT_OF_PLACES, 
    MIN_AMOUNT_OF_PLACES, 
    MIN_RADIUS, 
    MAX_RADIUS,
    RADIUS_MULTIPLIER
 } from "./constants/constants"
import { placesApiMapper } from "./mappers/places-api-response.mapper"

class SearchPlacesApi extends BaseApi{

    public constructor(baseUrl: string){
        super(baseUrl)
    }

    async getPlacesNearby(
        coordinates: Coordinates, 
        limit=MAX_AMOUNT_OF_PLACES, 
        minRadius=MIN_RADIUS
    ): Promise<RawPlace[]>{
        const headers = new Headers()
        headers.append('Authorization', API_KEY)

        let currentRadius = minRadius;
        let responseJson;

        do{
            const response = await this.load({
                path:  SearchPlacesApiPath.PLACES_NEARBY,
                method: HTTPMethod.GET,
                payload: null,
                headers,
                queryParams: {
                    ll: `${coordinates.latitude}%2C${coordinates.longitude}`,
                    limit: `${limit}`,
                    radius: `${currentRadius}`
                }
            })
            if(!response.ok){
                const errorData = await response.json()
                throw new Error(errorData.message || 'Something went wrong')
            }
            responseJson = await response.json();

            if(currentRadius >= MAX_RADIUS){
                break;
            }
            currentRadius = currentRadius * RADIUS_MULTIPLIER > MAX_RADIUS ? 
                MAX_RADIUS : Math.round(currentRadius * RADIUS_MULTIPLIER)
        }
        while(responseJson.results.length < MIN_AMOUNT_OF_PLACES)
        const places = placesApiMapper(responseJson as PlacesResponse)
        return places
    }

    //possible new api calls

}

export { SearchPlacesApi };