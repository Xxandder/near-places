import { Coordinates } from "../types";

const coordinatesPrecision = process.env['COORDINATES_PRECISION']

const generateSearchPlacesCashKey = (coordinates: Coordinates) => {
    return `nearby-places:` + 
        `${coordinates.latitude.toFixed(coordinatesPrecision)}:` +
        `${coordinates.longitude.toFixed(coordinatesPrecision)}`;
}

export { generateSearchPlacesCashKey };