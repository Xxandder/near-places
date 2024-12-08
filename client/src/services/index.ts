import { Place } from "../types";
import { Observable } from "./observer";

const nearPlacesObservable = new Observable<Place[]>()

export { nearPlacesObservable };