const express=require("express");
const { sendEmailtotpo } = require("../controllers/sendEmailcontroller");
const router=express.Router();

router.post("/sendmail",sendEmailtotpo);
module.exports=router;
