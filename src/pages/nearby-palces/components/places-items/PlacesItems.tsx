import React, { useState } from 'react';
import { PlacesItem } from '../places-item/PlacesItem';
import { Place } from '../../../../types/types';

import * as styles from './styles.module.css';

const PlacesItems: React.FC<{places: Place[]}> = ({places}) => {
 
   return  <div className={styles['places-container']}>
        {places && places.map(place=>{
            return <PlacesItem {...place}/>
        })}
    
   </div>
  
  };

  export { PlacesItems };