const express = require("express");
const { loginController , registerController,getAllrecruiters } = require("../controllers/recruitercontrol");


//create a router
const router = express.Router();

router.post("/login",loginController);

router.post("/register",registerController);

router.get("/get-recruiters",getAllrecruiters);
// export router
module.exports = router;