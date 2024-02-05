const mongoose=require("mongoose");

  const newSchema = new mongoose.Schema({
    role:{
      type:String,
      required:[true,"Role offered is required"],
    },
    description:{
         type:String,
         required:[true,"Description is required"],
    },
    ctc:{
      type:Number,
      required:[true,"CTC offered is required"],
    },
    job_id:{
      type:Number,
      required:[true,"Job id is required"],
    },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const company = mongoose.model('company', newSchema);
  module.exports=company;
