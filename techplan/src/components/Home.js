import React, {useState,useEffect} from 'react';
import './Home.css'
import Service from '../api/Service'
import Nav from './navbar/nav'
import Main from "./main/main";
import Quiz from './quiz/quiz'







function Home(props) {
const [mainData,setMainData]= useState({})
const[err,seterr]=useState()
const[toqu,settoqu]=useState(true)

const Changewin = ()=>{
  settoqu(function (prevv) { return !prevv})
  console.log(toqu)
}

useEffect(()=>{
  const pid=props.match.params.pid
  const tid=props.match.params.tid
  
  Service.getMainData(pid,tid).then(res=>{
  console.log(res.data)
  if (res.data==='non' || res.data===""){
    seterr('non')
  }else{
    setMainData(res.data)
  }
   
    
  })

},[])

    return (

<div className="App">
  
  {err?<h3>404 NOT FOUND</h3>:
  
  <div className="wrapper">
  
  <div className="nav">
<Nav/>
</div>

  {toqu?<div className="main">
  <Main mainData={mainData} change={Changewin}/>

</div>:<Quiz mainData={mainData} change={Changewin}/>}


</div>}  
  
  
  
        </div>
  
     
    );
  }
  
  export default Home;