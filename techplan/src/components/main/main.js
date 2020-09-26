import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import './main.css'


export default function Main(params) {
console.log( params)

    return(
        <div className="main-area">
            <h2 className="title">{params.mainData.title}</h2>
            <div className="topic-div">
                <div className="topics">
    {params.mainData.topics? params.mainData.topics.map(topic=>(

    <div className="topic" key={topic}>
       <h2>{topic}</h2>
       <p>This sjsjb asjkcbk asjkbc sn bscjk acjb jkbcs kabc</p>
    </div>
    
    )):<></>}
    </div>
            </div>
            
            <ul>
           
            </ul>
        </div>
    )

}