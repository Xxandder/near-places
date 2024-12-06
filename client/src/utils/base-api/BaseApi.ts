import { HTTPMethod } from "../../enums/enums";
import { ValueOf } from "../../types/types";

type queryParamsType = Record<string, string>


class BaseApi {
    protected baseUrl: string;

    public constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    protected async load({
        path,
        method,
        payload,
        headers,
        queryParams
    }:{
        path: string,
        method: ValueOf<typeof HTTPMethod>,
        payload: BodyInit | null,
        headers: Headers,
        queryParams: queryParamsType
    }){
        const fullUrl = this.getFullEndpoint(path, queryParams)

        const response = await fetch(fullUrl, {
            method,
            body: payload,
            headers: headers
        })
        return response
    }

    protected getFullEndpoint(
        path: string, 
        queryParams: queryParamsType
    ): string{
        let fullUrl = `${this.baseUrl}${path}`
        if(Object.keys(queryParams).length !== 0){
            fullUrl += '?'
        }
        Object.keys(queryParams).forEach((param, index) => {
            if(index !== 0){
                fullUrl += '&'
            }
            fullUrl += `${param}=${queryParams[param]}`
        })
        return fullUrl
    }

}

export { BaseApi };