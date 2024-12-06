import { SearchPlacesApi } from "./SearchPlacesApi"
import { BASE_URL } from "./constants/constants"

const searchPlacesApi = new SearchPlacesApi(BASE_URL)

export { searchPlacesApi }