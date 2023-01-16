//import React from "react";
import React from 'react';
import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import Queryform from "../components/Queryform";
import { useEffect, useState } from "react";
import Showmap from "../components/Showmap";

const Map = () => {
  const [queryparam, setQueryparam] = useState({
    festival: "xmas",
    item: "orders",
    district: "台北市",
  });

  const [queryresult, setQueryresult] = useState([
  ]);

  useEffect(() => {
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "json" },
      body: JSON.stringify({ queryparam }),
    };

    const fn = async()=>{
      const result = await fetch('http://127.0.0.1:5000/', requestOptions)
      const jsonResult = await result.json()
      setQueryresult(jsonResult)
    }
    fn()

  }, [queryparam]);

  const handleSave = (values) => {
    console.log(values);
    setQueryparam(values);
  };

  return (
    <>
      <div className="flexbox form">
        <Queryform onSave={handleSave} {...{ queryparam }} />
      </div>

      <div className="flexbox map">
        <Showmap results={queryresult} />
      </div>
    </>
  );
};

export default Map;
