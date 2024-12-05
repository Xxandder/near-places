import React, { useState } from 'react';

import { PlacesForm } from './components/places-form/PlacesForm';


import { Place } from '../../types/place.type';
import { PlacesItems } from './components/places-items/PlacesItems';
import { PlaceError } from './components/places-error/PlacesError'

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [isError, setIsError] = useState<boolean>(false)

   return  <div>
      <PlacesForm setNearbyPlaces={setNearbyPlaces} setIsError={setIsError}/>
      {isError || !nearbyPlaces.length ? 
         <PlaceError message={nearbyPlaces.length ?
             "Something went wrong" :
              "No results found"}/> :
         <PlacesItems places={nearbyPlaces}/>
      }
      
   </div>
  
  };

  export { NearbyPlaces };