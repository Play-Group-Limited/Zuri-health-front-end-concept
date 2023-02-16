import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Maps = ({ lat, lng }) => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat,
        lng
    };
    

  return (
   <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps