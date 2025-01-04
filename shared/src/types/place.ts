import { type Coordinates } from "./coordinates"

type Place = {
    name: string,
    distance: number,
    coordinates: Coordinates
    category?: string,
    address?: string
}

export { type Place };