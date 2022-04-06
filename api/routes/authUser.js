const express = require("express");
const router = express.Router();

//database connection
require("../db/connection");

//userAuthModel
const UserAuthModel = require("../models/userAuthModel");

router.post("/", async (req, res) => {
  const userPresent = await UserAuthModel.findOne({ email: req.body.email });
  if (!userPresent) {
    const usersInfo = new UserAuthModel(req.body);
    const insertUserInfo = await usersInfo.save();
    res.send(insertUserInfo);
  }
});

module.exports = router;
