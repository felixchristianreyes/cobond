import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./GoogleMapsComponent.css";
import gMapStyles from "./mapStyles";

//static Markers
const markers = {
  marker1: {
    lat: 14.55234,
    lng: 121.073583,
  },
  marker2: {
    lat: 14.551865,
    lng: 121.074046,
  },
  marker3: {
    lat: 14.55273,
    lng: 121.073507,
  },
};

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 14.552973,
  lng: 121.073485,
};

const libraries = ["places"];

function MyComponent() {
  return (
    <>
      <h1>
        Toilet Locator
        <span role="img" aria-label="toilet">
          🚽
        </span>
      </h1>
      <LoadScript
        googleMapsApiKey="AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc"
        libraries={libraries}
      >
        <GoogleMap
          mapContainerClassName="mapStyle mb-5"
          center={center}
          zoom={16}
          options={options}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <Marker
              position={{ lat: 14.55, lng: 121.07 }}
            />
            
          </>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default React.memo(MyComponent);
