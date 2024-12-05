import { Coordinates } from "./coordinates.type"

type Place = {
    name: string,
    distance: number,
    coordinates: Coordinates
    category?: string,
    address?: string
}

export { type Place };