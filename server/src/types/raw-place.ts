import { type Place } from ".";

type RawPlace = Omit<Place, 'distance'> & {
    distance?: number;
};

export { RawPlace };