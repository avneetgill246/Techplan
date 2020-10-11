import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { red, purple } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Store from 'store'
import './quiz.css'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex" >
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

const theme = createMuiTheme({
    palette: {
      
       initial:{backgroundColor: '#fafafa'} ,
      select: { backgroundColor:'#546e7a', color: 'white' },
correct:{ backgroundColor: '#2e7d32', color: 'white' },
wrong:{ backgroundColor: '#c62828', color: 'white'}
    },
  });
export default function Quiz(params) {
    const [progress, setProgress] = React.useState(0);
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
     const lo=Store.get(`${params.mainData.id}-${params.mainData.num}`,{score:score,pass:(score/totalScore)*10>=0.5,total:totalScore})
     
     if(score > lo.score){
         Store.set(`${params.mainData.id}-${params.mainData.num}`,{score:score,pass:(score/totalScore)*10>=0.5,total:totalScore})
     }
     if((score/totalScore)*10>=0.5){
         Store.set(`${params.mainData.id}`,{'level':params.mainData.num+1,'total':params.leng})
     }
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
                            <CircularProgressWithLabel variant="static" value={(scorecard['score']/scorecard['total'])*100} />
      </div>:<></>}
   
            <Button id='bbutton' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
        </ThemeProvider>
    )

}