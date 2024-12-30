import { Router } from 'express'

import { getNearbyPlaces } from '@/controllers/search-places';
import { validationMiddleware, checkCache } from '@/middlewares';
import { getNearbyPlacesSchema } from '@/validation-schema';
import { ValidationSource } from '@/middlewares/enums';

const router = Router()

router.get('/', validationMiddleware(getNearbyPlacesSchema, ValidationSource.QUERY), checkCache, getNearbyPlaces)

export { router };