import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Qform from "../components/Qform";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDaw6LVFGCqNKw6gDU0YcfPXXszjn6dHVo",
  });

  if (!isLoaded) return <div> Loading... </div>;

  return (
    <>
      <div className="flexbox form">
        <Qform />
      </div>
      <div className="flexbox map">
        <GMap className="flexbox" />
      </div>
    </>
  );
};

function GMap() {
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: 25.033, lng: 121.5654 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 25.033, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.038, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.02, lng: 121.5654 }}></Marker>
    </GoogleMap>
  );
}

export default Map;
