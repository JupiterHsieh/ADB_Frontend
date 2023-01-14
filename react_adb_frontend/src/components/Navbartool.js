//import React from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbartool = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ADB-Final</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Map
            </NavLink>
            <NavLink to="/neo4j" className="nav-link">
              Neo4j
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbartool;
