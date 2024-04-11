// server.js 271295
const express = require('express');
const cors = require('cors');
const User =require('./models/User')
const connectDB =require('./database/config')

const app=express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors())
connectDB();


app.get('/',cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {name} =req.body
    const {email} =req.body
    const {phoneNumber} = req.body
    const {password} =req.body

    const data={
        name:name,
        email:email,
        phoneNumber: phoneNumber,
        password:password,
    }

    await User.insertMany([data])
})

app.listen(8000,()=>{
    console.log("connected")
})