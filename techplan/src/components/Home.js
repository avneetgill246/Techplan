import React, {useState,useEffect} from 'react';
import './Home.css'
import Service from '../api/Service'
import Nav from './navbar/nav'
import Main from "./main/main";








function Home(props) {
const [mainData,setMainData]= useState({})


useEffect(()=>{

  Service.getMainData().then(res=>{
    setMainData(res.data)
    
  })

},[])

    return (
<div className="App">
  
  <div className="wrapper">
  
      <div className="nav">
    <Nav/>
  </div>

      <div className="main">
    <Main mainData={mainData}/>
  </div>
  
  
  </div>
  
  
  
        </div>
  
     
    );
  }
  
  export default Home;