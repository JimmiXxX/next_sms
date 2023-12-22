const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3002

const app = express()

app.use(cors())
app.use(express.json())
app.post('/api/sendEmail', (req, res) => {
    console.log(req.body)
    res.send({'success':true
    })
})


app.listen(PORT, ()=>{
    console.log(`server starter ${PORT}`)
})