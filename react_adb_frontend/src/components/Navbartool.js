import React from 'react'
import { Link } from "react-router-dom" 
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbartool=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to="/">Map</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/neo4j">Neo4j</Link>
      </li>

    </ul>

  </div>
</nav>



    );
}


export default Navbartool