const express = require('express')
const cors =require('cors')
const app = express()
const port = 8000
app.use(cors())
app.get('/', (req, res) => {
    const testdata={
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
           
           
   
        ]

    }
  res.send(testdata)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




