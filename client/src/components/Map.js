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



import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";



import "./Map.css";


const mapContainerStyle = {
  height: "35vh",
  width: "40vw",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const libraries = ["places"];   //comment out



export default function Map(props) {

  // console.log("eachPostId on Map is:", eachPostId)
  console.log("props in Map is: ", props)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,  //comment out
  });


  // const passIsLoadedToParent = props.passToParent(isLoaded);


  // const [postList, setpostList] = useState([]);

  // const [detailedPost, setDetailedPost] = useState([]);

  const [markers, setMarkers] = React.useState([]);

  

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/posts").then((data) => {
  //     // console.log("posts ------- ", data);
  //     setpostList(data.data);
  //   });
  // }, []);

  
  // console.log("postList in the Map is:", postList)
  // const detailedPost = postList.find(post => post.id === eachPostId);
  // console.log("detailedPost in the Map is:", detailedPost)
  
  // console.log("street in Map is: ", props?.detailedPost.street)
  // console.log("city in Map is: ", props?.detailedPost.city)


  const streetAddress = props?.detailedPost?.street;
  const cityName = props?.detailedPost?.city;
  const provinceName = props?.detailedPost?.province;
  const postCode = props?.detailedPost?.post_code;

  


  // {detailedPost?.street}
  // {detailedPost?.street}
  // {detailedPost?.city}
  // {detailedPost?.province}
  // {detailedPost?.post_code}



  // const streetName = props.detailedPost.street
  // console.log("lets see, streetName is:", detailedPost?.street)
  // {props.detailedPost.city}
  // {props.detailedPost.province}
  // {props.detailedPost.post_code}


  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";


  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);


  return (
    <div>
      <h1>
        <img className="logo" src="images/volunteer-logo.png" />
      </h1>
      {console.log("streetAddress inside return in Map is: ", streetAddress)}

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        // options={options}
        // onClick={onMapClick}

        // getAddress={}
        onClick={(event) => {
          setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          }])
        }}
      // onLoad={onMapLoad}
      >
        {markers.map(marker => <Marker 
          position={{ lat: marker.lat, lng: marker.lng }} />)}


      </GoogleMap>
    </div>
  )

}


// change marker.time on line 107
// this was ion line 107 inside teh Markey component : key={marker.time.toISOString()}
