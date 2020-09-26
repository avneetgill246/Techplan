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

    <div className="topic" key={topic.title}>
       <h3>{topic.title}</h3>
        <p s>{topic.descp}</p>
    </div>
    
    )):<></>}
    </div>
            </div>
       <div> <a href="#"><div className="quiz">
              <h3 style={{textAlign:"center"}}>Quiz</h3>
          </div>
          </a> 
          </div> 
        </div>
    )

}