import React, { useState } from 'react';

import { PlacesForm } from './components/places-form/PlacesForm';


import { Place } from '../../types/place.type';
import { PlacesItems } from './components/places-items/PlacesItems';

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])

   

   return  <div>
      <PlacesForm setNearbyPlaces={setNearbyPlaces}/>
      <PlacesItems places={nearbyPlaces}/>
   </div>
  
  };

  export { NearbyPlaces };