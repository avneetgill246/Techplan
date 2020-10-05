import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import './main.css'
import { Link } from '@reach/router';
import { useNavigate } from "@reach/router"


export default function Main(params) {
console.log( params)
const [left,setleft]=useState(0)
const [right,setright]=useState(0)
useEffect(()=>{
    console.log('av')
    console.log(params.mainData)
 

},[])

const navigate = useNavigate();

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
      </Button>
      {params.level?<div>Done</div>:<></>}
      </div>
              
    
          
         
          <div className='pag'> 
          {console.log(params.direct.lef)}
            {params.direct.left? <Link to={`/${params.mainData.id}/${params.direct.left}`}><Button className='button' variant="contained" color='secondary'>
        Previous Topic
      </Button> </Link> :<Button className='button' variant="contained" color='secondary' disabled>
        Previous Topic
      </Button>  } 

      {params.direct.right? <Button className='button' variant="contained" color='secondary' onClick={() =>{ navigate(`/${params.mainData.id}/${params.direct.right}`, { replace: true })
      console.log(this)}
    }>
        Next Topic
      </Button>  :<Button className='button' variant="contained" color='secondary' disabled>
        Next Topic
      </Button>  } 
          
      
          </div>
          </div> 


            </div>
      
          
          
        </div>
    )

}