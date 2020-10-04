import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home'
import Entry from "./entry";

function App() {

  return (

    <BrowserRouter>

        <Route exact path = "/" component = {Entry}/>
        <Route path = "/:pid/:tid" component = {Home} />

        </BrowserRouter>


   
  );
}

export default App;
