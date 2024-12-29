import { Router } from 'express'

import { getNearbyPlaces } from '@/controllers/search-places';
import { validationMiddleware, checkCache } from '@/middlewares';
import { getNearbyPlacesSchema } from '@/validation-schema';

const router = Router()

router.get('/', validationMiddleware(getNearbyPlacesSchema, 'query'), checkCache, getNearbyPlaces)

export { router };