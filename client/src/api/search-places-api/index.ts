import { ApiPath } from '@/enums';
import { SearchPlacesApi } from './SearchPlacesApi';

import { searchPlacesApiPort, searchPlacesApiUrl } from '@/config';

const searchPlacesApi = new SearchPlacesApi(`${searchPlacesApiUrl}:${searchPlacesApiPort}${ApiPath.NEARBY_PLACES}`);

export { searchPlacesApi };