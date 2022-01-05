const express = require('express')
const router = require('./router/routes')
const app = express()
const port = 3000
require('dotenv').config()
const connectDb = require('./database/database')

app.use(express.json())

app.use('/hello',(req,res)=>{
    res.send('welcome home')
})

app.use('/api/v1/tasks',router)

const start = async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log('listening on port 3000'))
    }
    catch(err){
        console.log(err)
    }
}

start()