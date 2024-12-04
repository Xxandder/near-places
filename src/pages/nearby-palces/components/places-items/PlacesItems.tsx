import React, { useState } from 'react';
import { PlacesItem } from '../places-item/PlacesItem';
import { Place } from '../../../../types/types';

const PlacesItems: React.FC<{places: Place[]}> = ({places}) => {
 
   return  <div>
        {places.map(place=>{
            return <PlacesItem {...place}/>
        })}
    
   </div>
  
  };

  export { PlacesItems };