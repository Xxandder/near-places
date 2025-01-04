import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env['SEARCH_PLACES_API_BASE_URL'] as string
const apiKey = process.env['API_KEY'] as string;
const maxAmountOfPlaces = Number(process.env['MAX_AMOUNT_OF_PLACES'])
const minAmountOfPlaces = Number(process.env['MIN_AMOUNT_OF_PLACES'])
const maxBatchSize = Number(process.env['MAX_BATCH_SIZE'])
const maxRadius = Number(process.env['MAX_RADIUS'])
const initialRadius = Number(process.env['INITIAL_RADIUS'])
const currentApi = process.env['CURRENT_API']
const coordinatesPrecision = Number(process.env['COORDINATES_PRECISION'])
const port = Number(process.env['PORT'])


export { 
    baseUrl,
    apiKey,
    maxAmountOfPlaces,
    minAmountOfPlaces,
    maxBatchSize,
    maxRadius,
    initialRadius,
    currentApi,
    coordinatesPrecision,
    port
}