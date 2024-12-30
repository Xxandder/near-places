
import { ApiPath } from '@/enums';
import { SearchPlacesApi } from './SearchPlacesApi';

const searchPlacesApiUrl = process.env['SEARCH_PLACES_API_URL']
const searchPlacesApiPort = process.env['SEARCH_PLACES_API_PORT']


const searchPlacesApi = new SearchPlacesApi(`${searchPlacesApiUrl}:${searchPlacesApiPort}${ApiPath.NEARBY_PLACES}`);

export { searchPlacesApi };