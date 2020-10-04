import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Store from 'store'
export default function Navbar(params) {
    const[level,setlevel]=useState()
    useEffect(()=>{
        const aaa= Store.get('fe',{'level':1})
        setlevel(aaa.level)
      },[])
    
    return(
        <div className="main-area">
            Entry
        <Link to={`/fe/${level}`}>Abc</Link>
        </div>
    )

}