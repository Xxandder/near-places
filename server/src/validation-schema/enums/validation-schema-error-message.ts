const ValidationSchemaErrorMessage = {
    INCORRECT_LATITUDE: 'Latitude must be between -90 and 90',
    INCORRECT_LONGITUDE: 'Longitude must be between -180 and 180'
} as const;

export { ValidationSchemaErrorMessage };