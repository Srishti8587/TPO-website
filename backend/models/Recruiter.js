const mongoose = require("mongoose");
  const newSchema = new mongoose.Schema({
    username: {
      type: String,
      required:[true,'Name is required']
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    company_name:{
      type:String,
      required:[true,"Company Name is required"]
    },
    about:{
      type:String,
    },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Recruiter = mongoose.model('Recruiter', newSchema);
  module.exports= Recruiter;