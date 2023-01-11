import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import Queryform from "../components/Queryform";
import  { useEffect, useState } from "react";


const Map = () => {
  const queryparam = {
    startdate:"2011-12-25",
    enddate :"2011-12-26",
    item :"orders",
    district:"台北市"
  } 

  const handleSave = (values)=>{
    console.log(values)
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDaw6LVFGCqNKw6gDU0YcfPXXszjn6dHVo",
  });

  if (!isLoaded) return <div> Loading Map </div>;

  return (
    <>
      <div className="flexbox form">
        {/* <Qform /> */}
        <Queryform onSave={handleSave} {...{queryparam}}/>
      </div>
      <div className="flexbox map">
        <GMap/>
      </div>
    </>
  );
};

function GMap() {

  const [latt, setLat] = useState(25.033);
  const [lngg, setLng]   = useState(121.5654);
 
  return (
    <GoogleMap
      zoom={14}
      center={{ lat:latt, lng:lngg}}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 25.033, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.038, lng: 121.5654 }}></Marker>
      <Marker position={{ lat: 25.02, lng: 121.5654 }}></Marker>
    </GoogleMap>
  );
}

export default Map;
