import { Coordinates } from "@/types";
import { coordinatesPrecision } from "@/config";

const generateSearchPlacesCacheKey = (coordinates: Coordinates) => {
    return `nearby-places:` + 
        `${coordinates.latitude.toFixed(coordinatesPrecision)}:` +
        `${coordinates.longitude.toFixed(coordinatesPrecision)}`;
}

export { generateSearchPlacesCacheKey };