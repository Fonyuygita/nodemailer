// import  our nodemailer

const nodemailer=require("nodemailer");

// send email function

const sendEmail= async (subject, message, send_to, sent_from, reply_to)=>{

    // subject, message, send_to. send_from, reply_to are the possible info we need when we want to send an email to someone
    //  CREATE TRANSPORTER(SERVICE WE NEED TO SEND OUR EMAIL);

const transporter=nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:"587",
    // port no is coming from outlook
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
    tls:{
        // tls is just a security protocol
        rejectUnauthorized:false
    }

})

// after transporter we want to create options to send our emails

const options={
    from:sent_from,
    to:send_to,
    replyTo:reply_to,
    subject:subject,
    html:message

}

// let us send our email finally

transporter.sendMail(options, (err, info)=>{
    if(err) return console.log(err);
  return  console.log(info);
})


}

// export to use in any part of our application

module.exports=sendEmail