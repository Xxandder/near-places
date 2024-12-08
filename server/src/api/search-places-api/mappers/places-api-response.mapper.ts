import { Place, RawPlace } from "../../../../../client/src/types/types";
import { PlacesResponse } from "../foursquare-search-places-api/types/types";

const placesApiMapper = (places: PlacesResponse['results']): RawPlace[] => {
    const mappedPlaces = places.map(place=>{
        return {
            name: place.name,
            distance: place.distance,
            coordinates: {
                latitude: place.geocodes.main.latitude,
                longitude: place.geocodes.main.longitude
            },
            category: place.categories && place.categories[0].name,
            address: place.location.formatted_address
        }
    })
    return mappedPlaces;
}

export { placesApiMapper };