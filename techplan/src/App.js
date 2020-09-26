import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home'
import Entry from "./entry";

function App() {
  return (

    <BrowserRouter>

        <Route exact path = "/" component = {Entry}/>
        <Route path = "/path/:data" component = {Home} />

        </BrowserRouter>


   
  );
}

export default App;
