const {googleAuth} =require("../controllers/Authneticator");
const express=require("express");
const router=express.Router();
router.post("/googleAuth",googleAuth);
module.exports=router;