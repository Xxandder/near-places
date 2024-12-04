type PlacesResponse = {
    results: [
        {
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
                address: string
            },
            name: string,
        }
    ]
}

export { type PlacesResponse };