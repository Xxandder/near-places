import { NextFunction, Request, Response, Router } from 'express'

import { getNearbyPlaces } from '../controllers/search-places';

const router = Router()

router.get('/', getNearbyPlaces)

export { router };