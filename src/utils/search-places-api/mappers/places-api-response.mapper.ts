import { Place } from "../../../types/types";
import { PlacesResponse } from "../types/types";

const placesApiMapper = (places: PlacesResponse['results']): Place[] => {
    const mappedPlaces = places.map(place=>{
        return {
            name: place.name,
            distance: place.distance,
            coordinates: {
                latitude: place.geocodes.main.latitude,
                longitude: place.geocodes.main.longitude
            },
            category: place.categories && place.categories[0].name
        }
    })
    return mappedPlaces;
}

export { placesApiMapper };