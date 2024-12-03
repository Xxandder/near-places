import React, { useState } from 'react';

const PlacesForm: React.FC = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0)

    return <>
        <h2>Find nearest Places</h2>
        <form action="">
            <div>
                <label htmlFor="latitude">
                    Latitude
                </label>
                <input type="number" 
                    value={latitude} 
                    id="latitude"
                    onChange={(e)=>setLatitude(parseFloat(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="">
                    Longitude
                </label>
                <input type="number" 
                    value={longitude} 
                    id="longitude"
                    onChange={(e)=>setLongitude(parseFloat(e.target.value))}/>
            </div>
            <button type="submit">
                Places nearby
            </button>
        </form>
    </>
  
  };

  export { PlacesForm };