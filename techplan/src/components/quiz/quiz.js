import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { red, purple } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import './quiz.css'


const theme = createMuiTheme({
    palette: {
      
       initial:{backgroundColor: '#ab47bc', color: 'white' } ,
      select: { backgroundColor: red[500], color: 'white' },
correct:{ backgroundColor: '#3f51b5', color: 'white' },
    },
  });
export default function Quiz(params) {

    
    var [buttonGraph,setbuttonGraph]= useState([])
    useEffect(()=>{
     params.mainData.quiz.forEach(element => {
        setbuttonGraph((prev)=>{
        return [...prev,[0,0,0,0]]
     });
    
    })},[])

    const colorchange = (ques,option)=>{
        let ab=buttonGraph
        let ind = ab[ques].indexOf(1)
        if (ind==option){
            return
        }
        if (ind >=0){
            ab[ques][ind]=0

        }
            ab[ques][option]=1
        
        
     
        setbuttonGraph(Array(...ab))
       
     
     
    }
    const submitQuiz = ()=>{

    }
   
    return(
        <ThemeProvider theme={theme}>
        <div className="quiz">
            
            <ol>
                {buttonGraph.length>0?params.mainData.quiz.map((opt,index)=>(
                    <li key={index}>
                
                         <h3>{opt.ques}</h3>
                    
                       <ol style={{paddingLeft:'0px'}} type="a">  
                            {opt.op.map((option,index1)=>(
                                <li key={index1}  >
                                    <Button  variant='text' className="button1" variant="contained"
                                    style={buttonGraph[index][index1]==1?theme.palette.select:buttonGraph[index][index1]==0?theme.palette.initial:theme.palette.correct}
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
           
            <Button id='bbutton' variant="contained" style={theme.palette.correct} onClick={params.change} >
        Submit
      </Button>
   
            <Button id='bbutton' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
        </ThemeProvider>
    )

}