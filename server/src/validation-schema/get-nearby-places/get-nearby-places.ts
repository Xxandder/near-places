
import { z } from 'zod';

import { ValidationSchemaErrorMessage } from '../enums';

export const getNearbyPlaces = z.object({
  latitude: 
    z.number()
    .min(-90, { message: ValidationSchemaErrorMessage.INCORRECT_LATITUDE })
    .max(90, { message: ValidationSchemaErrorMessage.INCORRECT_LATITUDE }),
  longitude: z
    .number()
    .min(-180, { message: ValidationSchemaErrorMessage.INCORRECT_LONGITUDE })
    .max(180, { message: ValidationSchemaErrorMessage.INCORRECT_LONGITUDE })
});

