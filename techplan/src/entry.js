import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Link } from '@reach/router';
import Nav from './components/navbar/nav'
import Store from 'store'
import Button from '@material-ui/core/Button';
import './entry.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
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
export default function Navbar(params) {
    const[level,setlevel]=useState()
    const[total,settotal]=useState()
    useEffect(()=>{
        const aaa= Store.get('fe',{'level':1,'total':-1})
        setlevel(aaa.level)
        settotal(aaa.total)
      },[])
    console.log(level)
    return(
        <div className="App">
  


<Nav/>
<div className='main-1'>

<Link to={level>total?`/fe/${level-1}`:`/fe/${level}`}><Button className='button' variant="contained" color='secondary' >
Frontend
      </Button> </Link>
      {total==-1?<CircularProgressWithLabel variant="static" value={0} />:<CircularProgressWithLabel variant="static" value={((level-1)/total)*100} />}
      
</div>
  </div>
    )

    }