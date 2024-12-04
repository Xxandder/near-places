import { HTTPMethod } from "../../enums/enums"
import { type RawPlace, type Coordinates} from "../../types/types"
import { type PlacesResponse } from "./types/types"
import { BaseApi } from "../base-api/BaseApi"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { API_KEY, MAX_AMOUNT_OF_PLACES, RADIUS } from "./constants/constants"
import { placesApiMapper } from "./mappers/places-api-response.mapper"

class SearchPlacesApi extends BaseApi{

    public constructor(baseUrl: string){
        super(baseUrl)
    }

    async getPlacesNearby(
        coordinates: Coordinates, 
        limit=MAX_AMOUNT_OF_PLACES, 
        radius=RADIUS
    ): Promise<RawPlace[]>{
        const headers = new Headers()
        headers.append('Authorization', API_KEY)

        const response = await this.load({
            path:  SearchPlacesApiPath.PLACES_NEARBY,
            method: HTTPMethod.GET,
            payload: null,
            headers,
            queryParams: {
                latitude: `${coordinates.latitude}`,
                longitude: `${coordinates.longitude}`,
                limit: `${limit}`,
                radius: `${radius}`
            }
        })
        if(!response.ok){
            const errorData = await response.json()
            throw new Error(errorData.message || 'Something went wrong')
        }
        const places = placesApiMapper((await response.json()) as PlacesResponse)
        return places
    }

    //possible new api calls

}

export { SearchPlacesApi };