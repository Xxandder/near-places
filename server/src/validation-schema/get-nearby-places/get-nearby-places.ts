
import { z } from 'zod';

import { ValidationSchemaErrorMessage } from '../enums';

const getNearbyPlacesSchema = z.object({
  latitude: 
    z.string()
    .refine((coordinate) => {
      const numberCoordinate = Number(coordinate)
      return numberCoordinate <= 90 && numberCoordinate >= -90
    }, {
      message: ValidationSchemaErrorMessage.INCORRECT_LONGITUDE 
    }),
  longitude: z
    .string()
    .refine((coordinate) => {
      const numberCoordinate = Number(coordinate)
      return numberCoordinate <= 180 && numberCoordinate >= -180
    }, {
      message: ValidationSchemaErrorMessage.INCORRECT_LONGITUDE 
    }),
});

export { getNearbyPlacesSchema };