import { HTTPMethod } from "../../enums/enums"
import { type RawPlace, type Coordinates} from "../../types/types"
import { type PlacesResponse } from "./types/types"
import { BaseApi } from "../base-api/BaseApi"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { 
    API_KEY, 
    MAX_AMOUNT_OF_PLACES, 
    MIN_AMOUNT_OF_PLACES, 
    MAX_RADIUS,
    INITIAL_RADIUS,
    MAX_BATCH_SIZE
 } from "./constants/constants"
import { placesApiMapper } from "./mappers/places-api-response.mapper"

class SearchPlacesApi extends BaseApi{

    public constructor(baseUrl: string){
        super(baseUrl)
    }

    

    async getPlacesNearby(
        coordinates: Coordinates, 
        limit=MAX_AMOUNT_OF_PLACES, 
    ): Promise<RawPlace[]>{
        const headers = new Headers()
        headers.append('Authorization', API_KEY)

        let currentRadius = INITIAL_RADIUS;
        let radius_low_boundary = 0;
        let radius_upper_boundary = MAX_RADIUS;
        let responseJson;

        while(true){
            const response = await this.load({
                        path:  SearchPlacesApiPath.PLACES_NEARBY,
                        method: HTTPMethod.GET,
                        payload: null,
                        headers,
                        queryParams: {
                            ll: `${coordinates.latitude}%2C${coordinates.longitude}`,
                            limit: `30`,
                            radius: `${currentRadius}`
                        }
                    })
            responseJson = await response.json();

            if(responseJson.results.length < MIN_AMOUNT_OF_PLACES){
                radius_low_boundary = currentRadius;
                currentRadius += Math.round((radius_upper_boundary - currentRadius) / 2);
               
                continue;
            }
            else if(responseJson.results.length >= MAX_BATCH_SIZE){
                radius_upper_boundary = currentRadius;
                currentRadius -= Math.round((currentRadius - radius_low_boundary)  / 2);
               
                continue;
            }
            else{
                break;
            }
        }
        const results: PlacesResponse['results'] = (responseJson as PlacesResponse).results
        
        const places = placesApiMapper(results.slice(0, MAX_AMOUNT_OF_PLACES))
        return places
    }

    //possible new api calls

}

export { SearchPlacesApi };