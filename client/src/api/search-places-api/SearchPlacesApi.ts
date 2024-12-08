import { Coordinates, Place } from "../../types";
import { BaseApi } from "../base-api";
import { SearchPlacesApiPath } from './enums';

class SearchPlacesApi extends BaseApi{
    async getNearbyPlaces(coordinates: Coordinates): Promise<Place[]>{
        try{

            const response = await this.load({
                path: `${SearchPlacesApiPath.GET_PLACES_BY_COORDINATES}`,
                method: 'GET',
                payload: null,
                headers: new Headers(),
                queryParams: {
                    longitude: `${coordinates.longitude}`,
                    latitude: `${coordinates.latitude}`
                }
            })
            const responseJson = await response.json()
            if(responseJson.errors){
                throw new Error(responseJson.errors[0].message)
            }
            return responseJson as Place[];
        }catch(e){
            throw new Error('Something went wrong')
        }
       
    }
}

export { SearchPlacesApi };