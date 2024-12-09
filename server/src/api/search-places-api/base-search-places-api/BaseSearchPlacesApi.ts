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
        let radius_low_boundary = 0;
        let radius_upper_boundary = this.maxRadius;
        let response: Response;
        let responseJson;
        while(true){
            response = await this.makeRequest({
                coordinates,
                limit,
                radius: currentRadius
            })
            responseJson = await response.json()
            const placesLength = await this.getLength(responseJson)
            if(currentRadius >= this.maxRadius){
                break;
            }
            if(placesLength < this.minAmountOfPlaces){
                radius_low_boundary = currentRadius;
                currentRadius += Math.round((radius_upper_boundary - currentRadius) / 2);
               
                continue;
            }
            else if(placesLength >= this.maxBatchSize){
                radius_upper_boundary = currentRadius;
                currentRadius -= Math.round((currentRadius - radius_low_boundary)  / 2);
               
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
