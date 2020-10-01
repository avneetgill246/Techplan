import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
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
        <p >{topic.descp}</p>
    </div>
    
    )):<></>}
    </div>

    <div className="quiz"> 
              <div className='quiz-but'><Button className='button' variant="contained" color="primary" onClick={params.change}>
        Quiz
      </Button></div>
              
    
          
         
          <div className='pag'> 
              
              <Button className='button' variant="contained" color='secondary'>
        Previous Topic
      </Button>  


                  <Button className='button' variant="contained" color='secondary'>
        Next Topic
      </Button>  
                 
          
      
          </div>
          </div> 


            </div>
      
          
          
        </div>
    )

}