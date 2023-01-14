import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Navbartool from "./components/Navbartool";
import Map from "./pages/Map";
import Neo4j from "./pages/Neo4j";
import { Route, Routes } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbartool />
      <div className="container">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/neo4j" element={<Neo4j />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
