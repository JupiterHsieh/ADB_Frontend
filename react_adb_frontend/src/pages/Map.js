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
    { lat: 25.033, lng: 121.5654 },
    { lat: 25.043, lng: 121.57 },
    { lat: 25.032, lng: 121.56 },
  ]);

  useEffect(() => {
    setQueryresult((oldArray) => [...oldArray]);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "json" },
      body: JSON.stringify({ queryparam }),
    };
    console.log(requestOptions);
    // fetch('https://reqres.in/api/posts', requestOptions)
    // .then(response => response.json())
    // .then(data => setQueryresult(data.id));
  }, [queryparam]);

  const handleSave = (values) => {
    // console.log(values);
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
