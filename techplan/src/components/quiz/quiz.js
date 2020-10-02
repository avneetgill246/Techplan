import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import './quiz.css'

export default function Quiz(params) {

    
    var [buttonGraph,setbuttonGraph]= useState([])
    useEffect(()=>{
     params.mainData.quiz.forEach(element => {
        setbuttonGraph((prev)=>{
        return [...prev,[0,0,0,0]]
     });
    
    })},[])

    const colorchange = (ques,option)=>{
      
        setbuttonGraph((prev)=>{
            prev[ques][option]=1
            return prev
        })
     
       
    }
   
    return(
        <div className="quiz">
            <ol>
                {buttonGraph.length>0?params.mainData.quiz.map((opt,index)=>(
                    <li key={index}>
                
                         <h3>{opt.ques}</h3>
                    
                       <ol style={{paddingLeft:'0px'}} type="a">  
                            {opt.op.map((option,index1)=>(
                                <li key={index1}  >
                                    <Button  variant='text' className="button1" variant="contained"
                                    color={buttonGraph[index][index1]==1?'secondary':buttonGraph[index][index1]==0?'default':'primary'}
                                    onClick={()=>{colorchange(index,index1)}}
                                    
                                    >
                                     {option}
                                     {buttonGraph[index][index1]}
                                    </Button>
                                    
                                   
                                </li>
                            ))}
                       </ol>
                   
                     </li>
                )):<></>}
               
            </ol>
            <Button id='bbutton' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
    )

}