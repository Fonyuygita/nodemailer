// our server code goes here

const bodyParser = require("body-parser");
const express=require("express");
const cors= require("cors");
const sendEmail = require("./utils/sendEmail");
// require the dotenv file
const dotenv=require("dotenv").config();


const app=express();

// our middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


// create our first route

app.get("/", (req, res)=>{
    res.json("THIS IS HOME PAGE");
})

// route to send our msg

app.post("/api/send", async (req, res)=>{
   
const {email}=req.body;

try {

    const send_to=email;
    const sent_from=process.env.EMAIL_USER;
    const reply_to=email;
    const subject="Thank you";
    const message=`
    <h3>Hello Gita</h3>
    <p>Thank for your youtube tutorials</p>
    <p>Regards ....</p>
    `


    await sendEmail(subject, message, send_to, sent_from, reply_to)
    res.status(200).json({success:true, msg:"Email sent"})
    
    
} catch (err) {
    res.status(500).json(err.message);
}

})

// set up our server port

const PORT=process.env.PORT ;

// connect to server

app.listen(PORT, ()=>{
    console.log(`connected on port ${PORT}`);
})