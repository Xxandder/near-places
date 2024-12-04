import { HTTPMethod } from "../../enums/enums"
import { PlacesResponse, type Coordinates } from "../../types/types"
import { BaseApi } from "../base-api/BaseApi"
import { SearchPlacesApiPath } from "./enums/search-places-api-path.enum"

class SearchPlacesApi extends BaseApi{

    public constructor(baseUrl: string){
        super(baseUrl)
    }

    async getPlacesNearby(coordinates: Coordinates){

        const response = await this.load({
            path:  SearchPlacesApiPath.PLACES_NEARBY,
            method: HTTPMethod.GET,
            payload: null,
            headers: new Headers,
            queryParams: {
                latitude: `${coordinates.latitude}`,
                longitude: `${coordinates.longitude}`
            }
        })
        
        const places = (await response.json()) as PlacesResponse
        return places
    }

    //possible new api calls

}

export { SearchPlacesApi };