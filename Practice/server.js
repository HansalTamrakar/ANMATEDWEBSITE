const express = require('express')
const dbConnect = require('./Config/dbCon')
const router = require('./Route.js/route')
const app = express()
app.use(express.json())
app.listen(4000,()=>{
    console.log("APP IS RUNNING")
})
app.get('/',(req,res)=>{
    res.send("<h1>hjsfdsg</h1>")
})
app.post('/',(req,res)=>{
    const {name,room}=req.body;
    console.log(name,room)
    res.json({
        data:"MESSAGE IS REACHED ",
        name:name,
        room:room
    })
})
dbConnect()

app.use('/api',router)