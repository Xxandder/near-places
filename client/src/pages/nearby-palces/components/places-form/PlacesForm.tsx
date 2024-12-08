import React, { FormEvent, useState } from 'react';

import * as styles from './styles.module.css';
import { Place } from '../../../../types';
import { searchPlacesApi } from '../../../../api/search-places-api'
import { nearbyPlacesObservable, isErrorObservable } from '../../../../services';

type Props = {
    setIsError: (value: boolean) => void
}

const PlacesForm: React.FC<Props> = ({setIsError}) => {
    const [latitude, setLatitude] = useState(50.449720);
    const [longitude, setLongitude] = useState(30.525077)

    const handleFormSubmission = async (event: FormEvent) => {
        event.preventDefault()

        try{
            const placesNearby = await searchPlacesApi.getNearbyPlaces({latitude, longitude})
            nearbyPlacesObservable.notify(placesNearby)
            isErrorObservable.notify(false)
        }catch(e){
            isErrorObservable.notify(true)
        } 
    }

    return <div className={styles['container']}>
        <h2 className={styles['heading']}>Find nearest Places</h2>
        <form action="" className={styles['form']} onSubmit={handleFormSubmission}>
            <div className={styles['field']}>
                <label htmlFor="latitude" className={styles['label']}>
                    Latitude
                </label>
                <input type="number" 
                    value={latitude} 
                    id="latitude"
                    className={styles['input']}
                    step="any"
                    lang="en"
                    onChange={(e)=>setLatitude(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles['field']}>
                <label htmlFor="" className={styles['label']}>
                    Longitude
                </label>
                <input type="number" 
                    value={longitude} 
                    id="longitude"
                    className={styles['input']}
                    step="any"
                    lang="en"
                    onChange={(e)=>setLongitude(parseFloat(e.target.value))}/>
            </div>
            <button type="submit" className={styles['send-button']}>
                Places nearby
            </button>
        </form>
    </div>
  
  };

  export { PlacesForm };