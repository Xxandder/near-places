import React, { FormEvent, useEffect, useState } from 'react';
import { placesNearby } from '../../../../services/places-nearby/palces-nearby';

import * as styles from './styles.module.css';
import { Place } from '../../../../types/types';

type Props = {
    setNearbyPlaces: (places: Place[]) => void
    setIsError: (value: boolean) => void
}

const PlacesForm: React.FC<Props> = ({setNearbyPlaces, setIsError}) => {
    const [latitude, setLatitude] = useState(50.396171);
    const [longitude, setLongitude] = useState(30.509681)

    const handleFormSubmission = async (event: FormEvent) => {
        event.preventDefault()

        try{
            const placesNearbyResponse = await placesNearby.getPlacesNearby({latitude, longitude})
            setNearbyPlaces(placesNearbyResponse as Place[])
            setIsError(false)
        }catch(e){
            setIsError(true)
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