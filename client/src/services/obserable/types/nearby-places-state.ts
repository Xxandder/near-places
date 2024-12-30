import { Place } from "@/types";

type NearbyPlacesState = {
    data: Place[];
    error: string | null
    isLoading: boolean
}

export { NearbyPlacesState };