const express = require("express");
const port = 3000;

const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.send("This is home page");
})
//app.post('/signup', (req,res) =>{
//    res.send("this is signup page");
//})
app.listen (port, () =>{
    console.log('Server is running on port');
})