import { Place } from "../types";
import { Observable } from "./Observable";

const nearbyPlacesObservable = new Observable<Place[]>();
const isErrorObservable = new Observable<boolean>();


export { nearbyPlacesObservable, isErrorObservable };