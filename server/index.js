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
            'How Internet works',
            'HTTP',
            'DNS',
            'Browsers'
   
        ]

    }
  res.send(testdata)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




