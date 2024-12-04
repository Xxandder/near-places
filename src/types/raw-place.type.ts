import { type Place } from "./place.type";

type RawPlace = Omit<Place, 'distance'> & {
    distance?: number;
};

export { RawPlace };