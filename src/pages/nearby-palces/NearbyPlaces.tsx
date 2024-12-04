import React, { useState } from 'react';

import { PlacesForm } from './places-form/PlacesForm';


import { Place } from '../../types/place.type';

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])



   return  <div>
      <PlacesForm />

   </div>
  
  };

  export { NearbyPlaces };