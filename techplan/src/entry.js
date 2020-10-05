import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Link } from '@reach/router';
import Nav from './components/navbar/nav'
import Store from 'store'
import './entry.css'
export default function Navbar(params) {
    const[level,setlevel]=useState()
    useEffect(()=>{
        const aaa= Store.get('fe',{'level':1})
        setlevel(aaa.level)
      },[])
    
    return(
        <div className="App">
  


<Nav/>
<div className='main-1'>
abc
</div>
  </div>
    )

    }