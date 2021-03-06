import React, { useState, useEffect } from "react";

import Axios from "axios";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import "./Map.css";

const mapContainerStyle = {
  height: "40.5vh",
  width: "42vw",
};

const center = {
  lat: 43.798043,
  lng: -79.420052,
};

const libraries = ["places"];

export default function Map(props) {

  console.log("props in Map is: ", props)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });


  const [markers, setMarkers] = React.useState([]);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();


  const streetAddress = props?.detailedPost?.street;
  const cityName = props?.detailedPost?.city;
  const provinceName = props?.detailedPost?.province;
  const postCode = props?.detailedPost?.post_code;


  const addressObj = { streetAddress, cityName, provinceName, postCode };
  console.log("let see what the addressObj is: ", addressObj);

  const adressInOneLine = `${addressObj.streetAddress}, ${addressObj.cityName}, ${addressObj.provinceName}, ${addressObj.postCode}`;
  console.log("addressInOneLine isss: ", adressInOneLine);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";



  const address = {
    address: adressInOneLine,
  };

  getGeocode(address)
    .then((results) => getLatLng(results[0]))
    .then((latLng) => {
      console.log("latLng.lat iiissss: ", latLng.lat);

      const { lat, lng } = latLng;

      console.log("Coordinates: ", { lat, lng });

      setLat(latLng.lat);

      setLng(latLng.lng);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });


  return (
    <div>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={9}
        center={center}
      >
 
        <Marker position={{lat, lng}} />

      </GoogleMap>
    </div>
  );
}

