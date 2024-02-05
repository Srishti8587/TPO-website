const express=require("express");
const { addcompany, deletecontroller,getAllcompany } = require("../controllers/companycontroller");

const router=express.Router();
router.post("/add-company",addcompany);
router.delete("/delete-company/:id",deletecontroller);
router.get("/get-company",getAllcompany);


module.exports=router;