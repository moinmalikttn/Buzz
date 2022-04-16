const express = require("express");
const router = express.Router();

//database connection
require("../db/connection");

const postCommentModel = require('../models/postCommentModel');

router.post('/:id',async(req,res)=>{
    let result;
    console.log(req.params.id);
    const data = await postCommentModel.findOne({id:req.params.id});
    if(data){
        data.comments.push(req.body.comments[0]);
        result = await data.save();
    }
    else{
        const data =  new postCommentModel(req.body);
        result = await data.save();
    }
    
    res.send(result);

})

router.put('/',async(req,res)=>{

})

router.delete('/',async(req,res)=>{

})

module.exports = router;