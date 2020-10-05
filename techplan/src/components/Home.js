import React, {useState,useEffect} from 'react';
import './Home.css'
import Service from '../api/Service'
import Nav from './navbar/nav'
import Main from "./main/main";
import Quiz from './quiz/quiz'
import Store from 'store'
import { navigate } from "@reach/router"







function Home(props) {

const [mainData,setMainData]= useState({})
const[err,seterr]=useState()
const [left,setleft]=useState(0)
const [right,setright]=useState(0)
const[length,setlength]=useState(1)
const[toqu,settoqu]=useState(true)
const[level,setlevel]=useState()
const Changewin = ()=>{
  settoqu(function (prevv) { return !prevv})
  console.log(toqu)
}

useEffect(()=>{
  
console.log(props)

  const pid=props.pid
  const tid=props.tid

  const level=Store.get(pid,{'level':1})['level']
  if(Number(tid) > Number(level)){
    navigate(`/${pid}/${level}`)
    
  }
    if(Number(tid) < Number(level)){
      setlevel(true)
    }
    Service.getMainData(pid,tid).then(res=>{
      console.log(res.data)
      if (res.data==='non' || res.data===""){
        seterr('non')
      }else{
        setMainData(res.data.main)
        setlength(res.data.total)
        console.log('ab')
        if(res.data.main.num==1){
          if(res.data.total>1)
         
          setright(2)
      }
    else  if(res.data.main.num== res.data.total){
      setleft(res.data.total-1)
      }
  else{
      setleft(res.data.main.num-1)
      setright(res.data.main.num+1)
  }
      }
       
        
      })
  
      


},[])
console.log(right)

    return (

<div className="App">
  
  {err?<h3>404 NOT FOUND</h3>:
  
  <div className="wrapper">
  
  <div className="nav">
<Nav/>
</div>

  {toqu?<div className="main">
  <Main mainData={mainData} change={Changewin} level={level} direct={{'left':left,'right':right}}/>

</div>:<Quiz mainData={mainData} change={Changewin} level={level} leng={length}/>}


</div>}  
  
  
  
        </div>
  
     
    );
  }
  
  export default Home;