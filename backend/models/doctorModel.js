const mongoose = require("mongoose");


const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type:String,
    required:true
  }
},
{
  timestamps: true,
}
);
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;