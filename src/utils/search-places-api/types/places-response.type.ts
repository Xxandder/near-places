
type PlacesResultItem = {
    categories?: [
        {
            name: string
        }   
    ],
    distance: number,
    geocodes: {
        main: {
            latitude: number,
            longitude: number
        }
    },
    location: {
        formatted_address: string
    },
    name: string,
}

type PlacesResponse = {
    results: PlacesResultItem[]
}

export { type PlacesResponse };