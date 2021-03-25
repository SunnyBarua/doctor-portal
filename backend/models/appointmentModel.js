const mongoose=require('mongoose')

const appointmentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
    

},

  );

const Appointment=mongoose.model("Appointment",appointmentSchema)

module.exports = Appointment