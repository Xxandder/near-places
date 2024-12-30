import React, { FormEvent, useState } from 'react';

import * as styles from './styles.module.css';
import { searchPlacesApi } from '@/api/search-places-api'
import { nearbyPlacesObservable } from '@/services/observable';

const PlacesForm: React.FC = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0)

    const handleFormSubmission = async (event: FormEvent) => {
        event.preventDefault()

        try{

            nearbyPlacesObservable.notify({
                data: [],
                error: null,
                isLoading: true
            })
            const placesNearby = await searchPlacesApi.getNearbyPlaces({latitude, longitude})
            nearbyPlacesObservable.notify({
                data: placesNearby,
                error: null,
                isLoading: false
            })
        }catch(e){
            nearbyPlacesObservable.notify({
                data: [],
                error: 'Something went wrong!',
                isLoading: false
            })
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
                    max="90"
                    min="-90"
                    required
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
                    onChange={(e)=>setLongitude(parseFloat(e.target.value))}
                    max="180"
                    min="-180"
                    required/>
            </div>
            <button type="submit" className={styles['send-button']}>
                Places nearby
            </button>
        </form>
    </div>
  
  };

  export { PlacesForm };