import React, { useState } from 'react';

import { Place } from '../../types';
import { PlacesForm } from './components/places-form/PlacesForm';
import { PlacesItems } from './components/places-items/PlacesItems';
import { PlaceError } from './components/places-error/PlacesError';
import { nearbyPlacesObservable } from '../../services';
import { Loader } from '../../components/loader/Loader' 

import * as styles from './styles.module.css'

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [error, setError] = useState<string | null>(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   
   nearbyPlacesObservable.subscribe((state)=>{
      setNearbyPlaces(state.data)
      setError(state.error)
      setIsLoading(state.isLoading)
   })

   return  <div>
    
     
      <PlacesForm/>
      <div className={styles['nearby-places__data']}>
         {isLoading ? <Loader/> : 
         error || !nearbyPlaces.length ? 
         <PlaceError message={error ?
               `${error}` :
               "No results found"}/> :
         <PlacesItems places={nearbyPlaces}/>}
      </div>
     
     
      
   </div>
  
  };

  export { NearbyPlaces };