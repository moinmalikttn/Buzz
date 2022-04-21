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
    // const id = mongoose.Types.ObjectId();
    const usersInfo = new UserAuthModel(req.body);
    const insertUserInfo = await usersInfo.save();
    localStorage.setItem("userData", req.body);
    
  }
  res.send(response);
  
});

router.get("/", async (req, res) => {
  const { email } = req.query;
  let filterquery = {};
  if (email) {
    filterquery.email = email
  }
  const users = await UserAuthModel.find(filterquery);
  res.send(users);
  
});

router.get('/:name',async(req,res)=>{
 
  const users = await UserAuthModel.find({name:req.params.name})
  res.status(200).send(users);
  
})

router.post('/:name',async(req,res)=>{
 
  const userPresent = await UserAuthModel.findOne({ 
      'name':req.params.name});
  if (!userPresent) {
    const usersInfo = new UserAuthModel(req.body);
    const  insertUserInfo= await usersInfo.save();
    res.status(200).send(insertUserInfo);
  }
  else{
      userPresent.FirstName=req.body.FirstName;
      userPresent.LastName=req.body.LastName;
      userPresent.Designation=req.body.Designation;
      userPresent.MyWebsite=req.body.MyWebsite;
      userPresent.Gender=req.body.Gender;
      userPresent.Birthday=req.body.Birthday;
      userPresent.City=req.body.City;
      userPresent.State=req.body.State;
      userPresent.Zip=req.body.Zip;

      userPresent.save();
      res.send(userPresent);
       
  }
})



module.exports = router;
