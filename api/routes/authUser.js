const express = require("express");
const router = express.Router();

//database connection
require("../db/connection");

//userAuthModel
const UserAuthModel = require("../models/userAuthModel");

router.post("/", async (req, res) => {
  const response = {
    message: "user already exist",
  };
  const userPresent = await UserAuthModel.findOne({ email: req.body.email });
  if (!userPresent) {
    const usersInfo = new UserAuthModel(req.body);
    const insertUserInfo = await usersInfo.save();
    localStorage.setItem("userData", req.body);
    
  }
  res.send(response);
  
});

router.get("/", async (req, res) => {
  const users = await UserAuthModel.find({});
  res.send(users);
  
});

router.get('/:name',async(req,res)=>{
 
  const users = await UserAuthModel.find({name:req.params.name})
  res.send(users);
  
})



module.exports = router;
