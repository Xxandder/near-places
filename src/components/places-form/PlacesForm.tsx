import React, { useState } from 'react';

import * as styles from './styles.module.css';

const PlacesForm: React.FC = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0)

    return <>
        <h2 className={styles['heading']}>Find nearest Places</h2>
        <form action="" className={styles['field']}>
            <div className={styles.field}>
                <label htmlFor="latitude" className={styles['label']}>
                    Latitude
                </label>
                <input type="number" 
                    value={latitude} 
                    id="latitude"
                    className={styles['input']}
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
                    onChange={(e)=>setLongitude(parseFloat(e.target.value))}/>
            </div>
            <button type="submit" className={styles['send-button']}>
                Places nearby
            </button>
        </form>
    </>
  
  };

  export { PlacesForm };