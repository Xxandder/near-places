import React, { useState } from 'react';

import { Place } from '../../types';
import { PlacesForm } from './components/places-form/PlacesForm';
import { PlacesItems } from './components/places-items/PlacesItems';
import { PlaceError } from './components/places-error/PlacesError';
import { nearbyPlacesObservable, isErrorObservable } from '../../services';

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [isError, setIsError] = useState<boolean>(false)

   nearbyPlacesObservable.subscribe(setNearbyPlaces)
   isErrorObservable.subscribe(setIsError)
   return  <div>
      <PlacesForm setIsError={setIsError}/>
      {isError || !nearbyPlaces.length ? 
         <PlaceError message={isError ?
             "Something went wrong" :
              "No results found"}/> :
         <PlacesItems places={nearbyPlaces}/>
      }
      
   </div>
  
  };

  export { NearbyPlaces };