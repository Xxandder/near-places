import { Coordinates } from "../types";

const coordinatesPrecision = process.env['COORDINATES_PRECISION']

const generateSearchPlacesCacheKey = (coordinates: Coordinates) => {
    return `nearby-places:` + 
        `${coordinates.latitude.toFixed(coordinatesPrecision)}:` +
        `${coordinates.longitude.toFixed(coordinatesPrecision)}`;
}

export { generateSearchPlacesCacheKey };