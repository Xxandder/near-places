import React, { useCallback, useEffect, useState } from 'react';

import { Place } from '@/types';
import { 
   PlacesForm, 
   PlacesItems, 
   PlacesError } from './components';

import { 
   nearbyPlacesObservable, 
   type NearbyPlacesState 
} from '@/services/observable';
import { Loader } from '@/components/loader/Loader' 

import * as styles from './styles.module.css'

const NearbyPlaces: React.FC = () => {
   const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([])
   const [error, setError] = useState<string | null>(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const handleSubscription = useCallback((state: NearbyPlacesState) => {
      setNearbyPlaces(state.data);
      setError(state.error);
      setIsLoading(state.isLoading);
    }, []);
  
    useEffect(() => {
      nearbyPlacesObservable.subscribe(handleSubscription);
  
      return () => {
        nearbyPlacesObservable.unsubscribe(handleSubscription);
      };
    }, [handleSubscription]);

   return  <div>
    
     
      <PlacesForm/>
      <div className={styles['nearby-places__data']}>
         {isLoading ? <Loader/> : 
         error || !nearbyPlaces.length ? 
         <PlacesError message={error ?
               `${error}` :
               "No results found"}/> :
         <PlacesItems places={nearbyPlaces}/>}
      </div>
     
     
      
   </div>
  
  };

  export { NearbyPlaces };