import { Coordinates, Place } from "../../types";
import { BaseApi } from "../base-api/BaseApi";
import { SearchPlacesApiPath } from './enums';

class SearchPlacesApi extends BaseApi{
    async getNearbyPlaces(coordinates: Coordinates): Promise<Place[]>{
        try{

            const nearbyPlaces = await this.load({
                path: `${SearchPlacesApiPath.GET_PLACES_BY_COORDINATES}`,
                method: 'GET',
                payload: null,
                headers: new Headers(),
                queryParams: {
                    longitude: `${coordinates.longitude}`,
                    latitude: `${coordinates.latitude}`
                }
            })
            return (await nearbyPlaces.json()) as Place[];
        }catch(e){
            throw new Error('Something went wrong')
        }
       
    }
}

export { SearchPlacesApi };