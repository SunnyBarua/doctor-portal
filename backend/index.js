const express=require("express")

const bcrypt = require("bcryptjs");
const cors=require("cors")
const fileUpload=require("express-fileupload")
const jwt = require("jsonwebtoken");
const MongoClient=require("mongodb").MongoClient
require('dotenv').config()
const {JWT_SECRET} =require('./keys')

const fs=require('fs-extra');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zqek5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(cors())
const mongoose=require('mongoose')
const {MONGOURI}=require("./keys")

const multer=require("multer")
const upload=multer()
app.use(express.static('doctors'))
app.use(fileUpload())
const Appointment=require("./models/appointmentModel");
const User = require("./models/userModel");
const Doctor =require("./models/doctorModel")

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo!!!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("err connecting!!", err);
  });

app.get('/',(req,res)=>{
  res.send('Hello from db it is working working!!') 
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  app.post('/addAppointment',(req,res)=>{
    
    const {name,phone,email,gender,weight,age,service,date}=req.body
    
    if (!name || !phone || !email || !gender || !weight || !age || !service || !date) {
        return res.status(422).json({ error: "Please add all the fields" });
      }
      const appointment=new Appointment({
          name,phone,email,gender,weight,age,service,date
      })
      appointment.save()
      .then((result)=>{
          res.json({appointment:result})
      })
      .catch((err)=>{
          console.log(err)
      })
  })

  app.get('/appointments',(req,res)=>{
   
    Appointment.find()
    .then((appointments)=>{
        res.json({appointments})
        
    })
    .catch((err)=>{
        console.log(err)
    })
  })

app.post('/appointmentsByDate',(req,res)=>{
    const date=req.body;
    
    Appointment.find({date:date})
    .then((appointment)=>{
        res.json({appointment})
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/allpatients',(req,res)=>{
    Appointment.find()
    .then((appointments)=>{
        res.json({appointments})   
    })
    .catch((err)=>{
        console.log(err)
    })

})
app.post('/addDoctor',(req, res) => {
  const file=req.files.file
  const {email,name}=req.body
  console.log(file,email,name)
  

     console.log(file)
     file.mv(`${__dirname}/doctors/${file.name}`,err=>{
       if(err){
         console.log(err)
       }else{
        const doctor=new Doctor({
          email,name,image:file.name
      })
      doctor.save()
      .then((result)=>{
          res.json({doctor:result})
      })
      .catch((err)=>{
          console.log(err)
      })

       }
     })

  
  })
   app.get('/doctors',(req,res)=>{
    
    Doctor.find()
    .then((doctors)=>{
        res.json({doctors})
        
    })
    
    .catch((err)=>{
        console.log(err)
    })
   })
   app.post('/register', async(req, res) => {
    const {name,email,password} = req.body;

    if (!email || !password || !name) {
        res.status(422).json({ error: "Please fill up the all fields" });
      }
    User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        res.status(422).json({ error: "User already exists with that email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
         
        });
        user
          .save()
          .then((user) => {
              res.json({ message: "saved successfully" });
            
            })
             .catch((err) => {
              console.log(err);
         
            
          })
         
      });
    })

    .catch((err) => {
      console.log(err);
    });
  });
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or Password" });
    }
    bcrypt.compare(password, savedUser.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
        const { _id, name, email } = savedUser;
        res.json({
          token,
          user: { _id, name, email },
        });
       
      } else {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
    });
  });
  
  });

//   client.close();

const port=4500
app.listen(process.env.port||port)