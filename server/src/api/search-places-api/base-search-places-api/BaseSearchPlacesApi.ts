import { type Coordinates, type RawPlace } from "@/types";
import { PlacesApiConfig } from '../types'
import { BaseApi } from "../../base-api";

abstract class BasePlacesApi extends BaseApi{
    protected maxAmountOfPlaces: number;
    protected minAmountOfPlaces: number;
    protected maxBatchSize: number;
    protected maxRadius: number;
    protected initialRadius: number;
    protected apiKey: string;
    protected baseUrl: string;

    protected constructor(config: PlacesApiConfig) {
        super(config.baseUrl)
        this.maxAmountOfPlaces = config.maxAmountOfPlaces
        this.minAmountOfPlaces = config.minAmountOfPlaces
        this.maxBatchSize = config.maxBatchSize
        this.maxRadius = config.maxRadius
        this.initialRadius = config.initialRadius
        this.apiKey = config.apiKey
        this.baseUrl = config.baseUrl
    }

    protected abstract makeRequest({
        coordinates,
        radius,
        limit
    }: {
        coordinates: Coordinates,
        radius?: number,
        limit?: number
    }): Promise<Response>;

    protected abstract parseResponse(response: Response): Promise<RawPlace[]>;

    protected abstract getLength(response: Response): Promise<number>;

    public async getPlacesNearby(
        coordinates: Coordinates, 
    ): Promise<RawPlace[]> {
       
        let currentRadius = this.initialRadius;
        let radiusLowerBoundary = 0;
        let response: Response;
        let responseJson;
        let lastFoundPlacesNumber = 0;
        while(true){
            if(currentRadius > this.maxRadius){
                break;
            }
            response = await this.makeRequest({
                coordinates,
                radius: currentRadius
            })
            responseJson = await response.json()
            const placesLength = await this.getLength(responseJson)
            if(placesLength <= this.minAmountOfPlaces){
                radiusLowerBoundary = currentRadius
                const multiplier = placesLength - lastFoundPlacesNumber ? 2 -
                 (this.minAmountOfPlaces - placesLength - lastFoundPlacesNumber) /
                  (this.minAmountOfPlaces - lastFoundPlacesNumber) : 2
                currentRadius *= Math.round(multiplier)
                lastFoundPlacesNumber = placesLength - lastFoundPlacesNumber;
                continue;
            }
            else if(placesLength >= this.maxBatchSize){
                currentRadius -= Math.round((currentRadius - radiusLowerBoundary) / 2);
                continue;
            }
            else{
                break;
            }
        }

        const places: RawPlace[] = await this.parseResponse(responseJson)
        return places

    }
}

export { BasePlacesApi };
