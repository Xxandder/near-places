import { Place } from "../types";
import { Observable } from "./Observable";

const nearPlacesObservable = new Observable<Place[]>()

export { nearPlacesObservable };