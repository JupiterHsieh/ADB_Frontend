import React from "react";
import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import Queryform from "../components/Queryform";
import { useEffect, useState } from "react";
import Showmap from "../components/Showmap";

const Map = () => {
  const queryparam = {
    startdate: "2011-12-25",
    enddate: "2011-12-26",
    item: "orders",
    district: "台北市",
  };

  const handleSave = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flexbox form">
        <Queryform onSave={handleSave} {...{ queryparam }} />
      </div>

      <div className="flexbox map">
        <Showmap />
      </div>
    </>
  );
};

export default Map;
