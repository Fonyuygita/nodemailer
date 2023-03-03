// our server code goes here

const bodyParser = require("body-parser");
const express=require("express");
const cors= require("cors")
// require the dotenv file
const dotenv=require("dotenv").config();


const app=express();

// our middleware
app.use(express.json());
app.use(bodyParser);
app.use(cors());


// set up our server port

const PORT=process.env.PORT;

// connect to server

app.listen(PORT, ()=>{
    console.log("connected");
})