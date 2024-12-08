import React, { useState } from 'react';

import { Place } from '../../types';
import { PlacesForm } from './components/places-form/PlacesForm';
import { PlacesItems } from './components/places-items/PlacesItems';
import { PlaceError } from './components/places-error/PlacesError';
import { nearbyPlacesObservable, isErrorObservable, isLoadingObservable } from '../../services';
import { Loader } from '../../components/loader/Loader' 

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [isError, setIsError] = useState<boolean>(false)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   nearbyPlacesObservable.subscribe(setNearbyPlaces)
   isErrorObservable.subscribe(setIsError)
   isLoadingObservable.subscribe(setIsLoading)

   return  <div>
    
     
      <PlacesForm/>
      {isLoading ? <Loader/> : 
        isError || !nearbyPlaces.length ? 
        <PlaceError message={isError ?
            "Something went wrong" :
             "No results found"}/> :
        <PlacesItems places={nearbyPlaces}/>}
     
      
   </div>
  
  };

  export { NearbyPlaces };