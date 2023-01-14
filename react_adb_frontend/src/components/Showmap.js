import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { useEffect, useState } from "react";
import React from 'react';

const Showmap = ({ results }) => {
  const center = {
    lat: 25.033,
    lng: 121.5654,
  };

  const items = results;

  // this is dummy variable

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDaw6LVFGCqNKw6gDU0YcfPXXszjn6dHVo">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="map-container"
        >
          {items.map((item) => (
            <Marker key={item.lat} position={item} />
          ))}
          <Marker position={{ lat: 25.033, lng: 121.5654 }} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Showmap;
