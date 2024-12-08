declare namespace NodeJS {
    interface ProcessEnv {
        CURRENT_API: 'foursquare' | 'google';
        SEARCH_PLACES_API_BASE_URL: string;
        API_KEY: string;
        MAX_AMOUNT_OF_PLACES: number;
        MIN_AMOUNT_OF_PLACES: number;
        MAX_BATCH_SIZE: number;
        MAX_RADIUS: number;
        INITIAL_RADIUS: number;
    }
}