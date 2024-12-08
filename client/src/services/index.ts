import { Place } from "../types";
import { Observable } from "./Observable";

const nearbyPlacesObservable = new Observable<Place[]>()

export { nearbyPlacesObservable };