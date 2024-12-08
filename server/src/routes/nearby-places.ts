import { Router } from 'express'

import { getNearbyPlaces } from '../controllers/search-places';
import { validationMiddleware } from '../middlewares';
import { getNearbyPlacesSchema } from '../validation-schema';

const router = Router()

router.get('/', validationMiddleware(getNearbyPlacesSchema, 'query'), getNearbyPlaces)

export { router };