import { Coordinates } from "./coordinates"

type Place = {
    name: string,
    distance: number,
    coordinates: Coordinates
    category?: string
}

export { type Place };