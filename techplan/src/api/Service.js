import http from "./http";



const getMainData =(pid,tid) => {


 
return http.get(`/?pid=${pid}&tid=${tid}`)
};


export default {
  
    getMainData


};