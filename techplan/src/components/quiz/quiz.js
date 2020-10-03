import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { red, purple } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import './quiz.css'


const theme = createMuiTheme({
    palette: {
      
       initial:{backgroundColor: '#fafafa'} ,
      select: { backgroundColor:'#546e7a', color: 'white' },
correct:{ backgroundColor: '#2e7d32', color: 'white' },
wrong:{ backgroundColor: '#c62828', color: 'white'}
    },
  });
export default function Quiz(params) {

    var[loading,setloading]=useState(false)
    var[submitted,setSubmitted]=useState(false)
    var [buttonGraph,setbuttonGraph]= useState([])
    var[scorecard,setScore]=useState({score:-1,pass:false,total:0})

const initilizeGraph=()=>{
    params.mainData.quiz.forEach(element => {
        setbuttonGraph((prev)=>{
        return [...prev,[0,0,0,0,element.ans]]
     });
})}

    useEffect(()=>{
        initilizeGraph()
    
   },[])
const reset = ()=>{
    const ab=[]
    params.mainData.quiz.forEach(element => {
        ab.push([0,0,0,0,element.ans])
       ;})
       setbuttonGraph(Array(...ab))
    setScore({score:-1,pass:false,total:0})
    setloading(false)
    setSubmitted(false)
}
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
     setloading(true)
     let ab=buttonGraph
     const totalScore=buttonGraph.length
     var score=0
     ab.forEach((que,index)=>{
         const selected=que.indexOf(1)
       
       if (selected==que[4]){
             score =score+1
             ab[index][selected]=2

         }
         else{
             if (selected>=0){
                ab[index][selected]=3
             }
             ab[index][que[4]]=2
         }
     })
     setbuttonGraph(Array(...ab))
     setScore({score:score,pass:(score/totalScore)*10>=0.5,total:totalScore})
     setloading(false)
     setSubmitted(true)
    }
   console.log(scorecard)
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
                                    style={buttonGraph[index][index1]==1?theme.palette.select:buttonGraph[index][index1]==0?theme.palette.initial:buttonGraph[index][index1]==2?theme.palette.correct:theme.palette.wrong}
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
           
           {submitted?<Button id='bbutton' variant="contained" style={theme.palette.correct} onClick={reset} >
                                Try Again
      </Button>:
      loading?<Button id='bbutton' variant="contained" style={theme.palette.correct} disabled >
      Calculating
      </Button>:<Button id='bbutton' variant="contained" style={theme.palette.correct} onClick={submitQuiz} >
      Submit
      </Button>
     } 

      {scorecard['score']>=0?<div>
                            <h2>{scorecard['pass']?'Pass':'Fail'}</h2>
                            <h3>Score - {scorecard['score']}/{scorecard['total']}</h3>
      </div>:<></>}
   
            <Button id='bbutton' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
        </ThemeProvider>
    )

}