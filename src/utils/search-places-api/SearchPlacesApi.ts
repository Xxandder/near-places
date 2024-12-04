import { HTTPMethod } from "../../enums/enums"
import { PlacesResponse, type Coordinates } from "../../types/types"
import { BaseApi } from "../base-api/BaseApi"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"
import { API_KEY } from "./constants/constants"

class SearchPlacesApi extends BaseApi{

    public constructor(baseUrl: string){
        super(baseUrl)
    }

    async getPlacesNearby(coordinates: Coordinates){
        const headers = new Headers()
        headers.append('Authorization', API_KEY)

        const response = await this.load({
            path:  SearchPlacesApiPath.PLACES_NEARBY,
            method: HTTPMethod.GET,
            payload: null,
            headers,
            queryParams: {
                latitude: `${coordinates.latitude}`,
                longitude: `${coordinates.longitude}`
            }
        })
        if(!response.ok){
            const errorData = await response.json()
            throw new Error(errorData.message || 'Something went wrong')
        }
        
        const places = (await response.json()) as PlacesResponse
        return places
    }

    //possible new api calls

}

export { SearchPlacesApi };