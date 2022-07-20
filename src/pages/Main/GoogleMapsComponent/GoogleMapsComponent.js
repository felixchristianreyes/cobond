import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./GoogleMapsComponent.css"

// const containerStyle = {
//   margin: "45px auto 0 auto",
//   width: '961px',
//   height: '400px'
// };

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc"
    >
      <GoogleMap
        mapContainerClassName='mapStyle my-5'
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)