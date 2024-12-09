import { Place } from "../types";
import { Observable } from "./Observable";

type NearbyPlacesState = {
    data: Place[];
    error: string | null
    isLoading: boolean
}

const nearbyPlacesObservable = new Observable<NearbyPlacesState>();

export { nearbyPlacesObservable };