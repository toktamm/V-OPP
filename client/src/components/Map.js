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

  // console.log("eachPostId on Map is:", eachPostId)
  console.log("props in Map is: ", props)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });


  // const passIsLoadedToParent = props.passToParent(isLoaded);


  // const [postList, setpostList] = useState([]);

  // const [detailedPost, setDetailedPost] = useState([]);

  const [markers, setMarkers] = React.useState([]);
  // const { lat, lng } = latLng;

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();


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

  // console.log("let see if we get the streetAddress: ", streetAddress);
  // console.log("let see if we get the cityName: ", cityName);
  // console.log("let see if we get the provinceName: ", provinceName);
  // console.log("let see if we get the postCode: ", postCode);

  const addressObj = { streetAddress, cityName, provinceName, postCode };
  console.log("let see what the addressObj is: ", addressObj);

  const adressInOneLine = `${addressObj.streetAddress}, ${addressObj.cityName}, ${addressObj.provinceName}, ${addressObj.postCode}`
  console.log("addressInOneLine isss: ", adressInOneLine)




  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";


  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);



  //   async (streetAddress, cityName, provinceName, postCode) => {
  //   try {
  //     const results = await getGeocode({ streetAddress, cityName, provinceName, postCode });
  //     console.log("results of getGeocode is: ", results)
  //     const { lat, lng } = await getLatLng(results[0])
  //   } catch (error) {
  //     console.log("😱 Error: ", error);
  //   }
  // };



  // getGeocode(streetAddress)
  //   .then((results) =>
  //     console.log("results of getGeocode is: ", results)
  //     // getLatLng(results[0])
  //   )
  //   .then(({ lat, lng }) => {
  //     console.log("📍 Coordinates: ", { lat, lng });
  //   })
  //   .catch((error) => {
  //     console.log("😱 Error: ", error);
  //   });



  const address = {
    address: adressInOneLine,
  };

  getGeocode(address)
    .then((results) => getLatLng(results[0]))
    .then((latLng) => {
      console.log("latLng.lat iiissss: ", latLng.lat)

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
      <h1>
      </h1>
      {console.log("streetAddress inside return in Map is: ", streetAddress)}
      {/* <h1>
        {lat} {lng}
      </h1> */}
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={9}
        center={center}
      // options={options}
      // onClick={onMapClick}

      // onClick={(event) => {
      //   setMarkers(current => [...current, {
      //     lat: event.latLng.lat(),
      //     lng: event.latLng.lng()
      //   }])
      // }}

        // marker = {setMarkers(current => [...current, {
        //   lat: lat,
        //   lng: lng
        // }])}


      // onLoad={onMapLoad}
      >
        {/* {markers.map(marker => <Marker
          position={{ lat: marker.lati, lng: marker.lngi }} />)} */}

        <Marker position={{lat, lng}} />

      </GoogleMap>
    </div>
  )

}


// change marker.time on line 107
// this was ion line 107 inside teh Markey component : key={marker.time.toISOString()}
