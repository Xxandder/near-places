
import { API_PATH } from './constants';
import { SearchPlacesApi } from './SearchPlacesApi';

const searchPlacesApi = new SearchPlacesApi(API_PATH);

export { searchPlacesApi };