import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { useEffect, useState } from "react";

const Showmap = () => {
  const center = {
    lat: 25.033,
    lng: 121.5654,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDaw6LVFGCqNKw6gDU0YcfPXXszjn6dHVo">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="map-container"
        >
          {/* <Marker position={{ lat: 25.033, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.038, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.02, lng: 121.5654 }}></Marker> */}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Showmap;
