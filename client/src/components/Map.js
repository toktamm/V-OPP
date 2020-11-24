// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps/api";

// import WrappedMap from './WrappedMap'



// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));


// export default function Map() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <WrappedMap
//         GoogleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//         loadingElement={<div style={{ height: "100%" }} />}
//         containerElement={<div style={{ height: "100%" }} />}
//         mapElement={<div style={{ height: "100%" }} />}
//       />
//     </div>
//   );
// }



import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "./Map.css";


const libraries = ["places"];   //comment out

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};


export default function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,  //comment out
  });


  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";




  return (
    <div>
      <h1>
        <img className="logo" src="images/volunteer-logo.png" />
      </h1>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      // options={options}
      // onClick={onMapClick}
      // onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  )

}