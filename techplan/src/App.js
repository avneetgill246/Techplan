import React, { useEffect } from 'react';
import { Router, Link } from "@reach/router"

import Home from './components/Home'
import Entry from "./entry";

function App() {
  
  return (

    <Router style={{height:'100%'}}  >
    <Entry exact path="/" />
    <Home path = "/:pid/:tid" key={Math.random()} />



        </Router>


   
  );
}

export default App;
