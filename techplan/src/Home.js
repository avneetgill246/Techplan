import React from 'react';
import './App.css'

import Nav from './components/navbar/nav'
import Main from "./components/main/main";
import Sidebar from './components/sidebar/sidebar'







function Home(props) {



    return (
<div className="App">
  
  <div className="wrapper">
  
      <div className="nav">
    <Nav/>
  </div>
      <div className="left-sidebar">
    <Sidebar />
  </div>
      <div className="main">
    <Main title={props.match.params.data}/>
  </div>
  
  
  </div>
  
  
  
        </div>
  
     
    );
  }
  
  export default Home;