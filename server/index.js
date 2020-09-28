const express = require('express')
const cors =require('cors')
const app = express()
const port = 8000
app.use(cors())
const testdata={

    'fe':
        [
        {
    'title':'Basic Internet and Protocols',
    'id':'fe1',
    'topics':[
        {
            'title':'How Internet works',
            'descp':'Overview of Internet and IPs'
    
        },
        {
            'title':'HTTP',
            'descp':'Http and why Https is better'
    
        },
        {
            'title':'DNS',
            'descp':'How Domain is translated to IP address'
    
        },
        {
            'title':'Browsers',
            'descp':'Basic understanding of how browser work and browser compatibility'
    
        },
       
       

    ],
    'quiz':[
        {
            'ques':'What is it?',
            'op':[
                'Dont know','might be','let it','jamesbond007'
            ],
            'ans':3
        }
    ]
},


]


    }

const quiz = {

    'fe':[
        {

        },
    ]
}


app.get('/', (req, res) => {
const pid = req.query.pid
const tid= req.query.tid


    if (testdata.hasOwnProperty(pid)){
        if (testdata[pid].length <= parseInt(tid) && parseInt(tid) >= 0 ){
            res.send(testdata[pid][parseInt(tid)-1])
        }
        else{
            res.send('non')
        }
        
    }
    else{
        res.send('non')
    }
    
    



   
  
})

app.get('/quiz',(req,res)=>{
    
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




