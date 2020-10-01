import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import './quiz.css'

export default function Quiz(params) {
    return(
        <div className="quiz">
            <ol>
                {params.mainData.quiz.map((opt,index)=>(
                    <li key={index}>
                
                         <h3>{opt.ques}</h3>
                    
                       <div>
                            {opt.op.map((option,index1)=>(
                                <div key={index1} >
                                    <Button className="button1" variant="outlined">
                                      {option}
                                    </Button>
                                    
                                   
                                </div>
                            ))}
                       </div>
                   
                     </li>
                ))}
               
            </ol>
            <Button id='bbutton' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
    )

}