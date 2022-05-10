const express = require('express');
const router = express.Router();

require('../db/connection');

const friendModel = require('../models/friendRequestModel');

router.get('/:id',async(req,res)=>{
    const data = await friendModel.findOne({id:req.params.id});
    res.send(data);
})


module.exports = router;
