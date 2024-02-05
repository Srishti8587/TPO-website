const Recruiter = require("../models/Recruiter");

exports.loginController = async (req,res)=>{
     try{
          const {email,password} = req.body;
          const existing = await Recruiter.findOne({email});
          console.log(existing.password);
          if(!existing)
          {
               return res.status(404).send({
                    success:false,
                    message:"User don't exists",
               });
          }
          
          if(existing.password!=password)
          {
               return res.status(404).send({
                    success:false,
                    message:"Provide Correct email and password",
               });
          }

          return res.status(200).send({
               success:true,
               message:"Login successfully",
          });
          
     }
     catch(error)
     {
          console.log(error);
          return res.status(404).send({
               success:false,
               message:"Error while Login",
               error
          });
     }
}


exports.registerController = async (req,res) =>{
     try{
         console.log("heyeyyy");
         const { username, email,password } = req.body;
         if(!username || !email || !password)
         {
            return res.status(401).send({
               success:false,
               message:"Please fill all details"
            })
         }

         const duplicate = await Recruiter.findOne({email});
         console.log(duplicate);
         if(duplicate)
         {
             return res.status(501).send({
               success:false,
               message:"User already exists"
             });
         }
         const result=await new Recruiter({username,email,password});
         await result.save();
         return res.status(200).send({
          success:true,
          message:"Registered Successfully"
         });
     }
     catch(error)
     {
          console.log(error);
          return res.status(500).send({
               success:false,
               message:"Error while registering"
          })
     }
}


exports.getAllrecruiters = async(req,res)=>{
     try{
         const recruiters= await Recruiter.find({});
         console.log(recruiters);
         return res.status(200).send({
               success:true,
               message:"Successfully got all recruiters",
               recruiters
         })
     }
     catch(error)
     {
          console.log(error);
          return res.status(500).send({
               success:false,
               message:"Error while getting all recruiters"
          })
     }
}