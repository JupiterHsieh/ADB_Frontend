import React from "react";
import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import Queryform from "../components/Queryform";
import { useEffect, useState } from "react";
import Showmap from "../components/Showmap";

const Map = () => {

  const [queryparam,setQueryparam] = useState({
    startdate: "2011-12-25",
    enddate: "2011-12-26",
    item: "orders",
    district: "台北市",
  });


  const queryresult = [{lat: 25.033, lng: 121.5654},
    {lat: 25.3, lng: 121.4},{lat: 25., lng: 121.54},
    {lat: 25.03, lng: 121.56},];
  // this is dummy variable

  useEffect(() => {
    console.log('ffff')
  },[queryparam]);


  const handleSave = (values) => {
    console.log(values);
    setQueryparam(values)

  };

  return (
    <>
      <div className="flexbox form">
        <Queryform onSave={handleSave} {...{ queryparam }} />
      </div>

      <div className="flexbox map">
        <Showmap results={queryresult}/>
      </div>
    </>
  );
};

export default Map;
