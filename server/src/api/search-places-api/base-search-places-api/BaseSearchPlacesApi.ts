import { type Coordinates, type RawPlace } from "../../../types";
import { BaseApi } from "../../base-api";

abstract class BasePlacesApi extends BaseApi{
    protected constructor(
        protected maxAmountOfPlaces: number,
        protected minAmountOfPlaces: number,
        protected maxBatchSize: number,
        protected maxRadius: number,
        protected initialRadius: number,
        protected apiKey: string,
        protected baseUrl: string
    ) {
        super(baseUrl)
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
        limit = this.maxAmountOfPlaces
    ): Promise<RawPlace[]> {
       
        let currentRadius = this.initialRadius;
        let radiusLowerBoundary = 0;
        let response: Response;
        let responseJson;
        while(true){
            if(currentRadius > this.maxRadius){
                break;
            }
            response = await this.makeRequest({
                coordinates,
                limit,
                radius: currentRadius
            })
            responseJson = await response.json()
            const placesLength = await this.getLength(responseJson)
            if(placesLength < this.minAmountOfPlaces){
              
                radiusLowerBoundary = currentRadius
                const multiplier = 2 - (placesLength ? (this.minAmountOfPlaces - placesLength) / this.minAmountOfPlaces : 1)
                currentRadius *= Math.round(2 * multiplier)
                
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
