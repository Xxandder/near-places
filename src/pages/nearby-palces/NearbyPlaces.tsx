import React, { useState } from 'react';

import { PlacesForm } from './components/places-form/PlacesForm';


import { Place } from '../../types/place.type';
import { PlacesItems } from './components/places-items/PlacesItems';

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [isError, setIsError] = useState<boolean>(false)

   return  <div>
      <PlacesForm setNearbyPlaces={setNearbyPlaces} setIsError={setIsError}/>
      {isError ? 
         <div>Something went wrong</div> :
         <PlacesItems places={nearbyPlaces}/>
      }
      
   </div>
  
  };

  export { NearbyPlaces };