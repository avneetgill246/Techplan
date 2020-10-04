import React, {useState,useEffect} from 'react';
import './Home.css'
import Service from '../api/Service'
import Nav from './navbar/nav'
import Main from "./main/main";
import Quiz from './quiz/quiz'
import Store from 'store'
import { useHistory } from 'react-router-dom'






function Home(props) {

const [mainData,setMainData]= useState({})
const[err,seterr]=useState()
const[toqu,settoqu]=useState(true)
const[level,setlevel]=useState()
const Changewin = ()=>{
  settoqu(function (prevv) { return !prevv})
  console.log(toqu)
}
var history = useHistory()
useEffect(()=>{
  


  const pid=props.match.params.pid
  const tid=props.match.params.tid

  const level=Store.get(pid,{'level':1})['level']
  if(Number(tid) > Number(level)){
    history.push(`/${pid}/${level}`)
    window.location.reload(false);
  }
    if(Number(tid) < Number(level)){
      setlevel(true)
    }
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
  <Main mainData={mainData} change={Changewin} level={level}/>

</div>:<Quiz mainData={mainData} change={Changewin} level={level}/>}


</div>}  
  
  
  
        </div>
  
     
    );
  }
  
  export default Home;