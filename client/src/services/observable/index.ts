import { Observable } from "./Observable";
import { type NearbyPlacesState } from "./types";

const nearbyPlacesObservable = new Observable<NearbyPlacesState>();

export { 
    nearbyPlacesObservable, 
    type NearbyPlacesState, 
};