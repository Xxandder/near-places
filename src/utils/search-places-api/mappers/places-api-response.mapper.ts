import { PlacesResponse, Place } from "../../../types/types";

const placesApiMapper = (places: PlacesResponse): Place[] => {
    const mappedPlaces = places.results.map(place=>{
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