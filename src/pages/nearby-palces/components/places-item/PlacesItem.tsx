import React, { useState } from 'react';
import { Place } from '../../../../types/types';

import * as styles from './styles.module.css';

const PlacesItem: React.FC<Place> = ({
        name, 
        distance, 
        category, 
        coordinates
    }) => { 
        
   return  <div className={styles['place-item']}>
        <h3 className={styles['place-heading']}>Name: {name}</h3>
        <p className={styles['place-distance']}>Distance: {distance}</p>
        <div className={styles['place-coordinates']}>
            <p className={styles['place-coordinate']}>Latitude: {coordinates.latitude}</p>
            <p className={styles['place-coordinate']}>Longitude: {coordinates.longitude}</p>
        </div>
        {category && <p>{category}</p>}
   </div>
  
  };

  export { PlacesItem };