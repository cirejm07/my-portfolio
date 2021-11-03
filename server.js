const express = require('express');
const { request } = require('http');
const app = express()

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'))


app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/',(req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:"moreno.jeric1995@gmail.com",
            pass:"Ravenger1"
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'moreno.jeric1995@gmail.com',
        text: ` Email: ${req.body.email} \n Message: ${req.body.message}`
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})