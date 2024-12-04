import React, { useState } from 'react';
import { Place } from '../../../../types/types';


const PlacesItem: React.FC<Place> = ({
        name, 
        distance, 
        category, 
        coordinates
    }) => { 
        
   return  <div>
        <h3>Name: {name}</h3>
        <p>Distance: {distance}</p>
        <div>
            <p>Latitude: {coordinates.latitude}</p>
            <p>Longitude: {coordinates.longitude}</p>
        </div>
        {category && <p>{category}</p>}
   </div>
  
  };

  export { PlacesItem };