import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import './quiz.css'

export default function Quiz(params) {
    return(
        <div className="quiz">
            <div>
                {params.mainData.quiz.map((opt,index)=>(
                    <div key={index}>
                         <div className='ques'>
                         <h3>{opt.ques}</h3>
                     </div>
                     <div className='options'>
                        <ol>
                            {opt.op.map((option,index1)=>(
                                <li key={index1}>
                                    <input />
                                    
                                   
                                </li>
                            ))}
                        </ol>
                     </div>
                     </div>
                ))}
               
            </div>
            <Button className='button' variant="contained" color="primary" onClick={params.change}>
        Topics
      </Button>
        </div>
    )

}