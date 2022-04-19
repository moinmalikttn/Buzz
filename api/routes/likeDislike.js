const { response } = require("express");
const express = require("express");
const router = express.Router();

//database connection
require("../db/connection");
const likeDislikeModel = require('../models/likeDislikeModel');

router.get('/:postId',async(req,res)=>{
    let data = await likeDislikeModel.findOne({id:req.params.postId});
    res.send(data);
})

router.post('/:postId/:id',async(req,res)=>{
    console.log(req.params.postId);
    console.log(req.params.id);
    let data = await likeDislikeModel.findOne({id:req.params.postId});
    
    if(data){
        if(req.params.id==0){
            
           let value = await likeDislikeModel.find({'heart.email':req.body.email})
           let value1 = await likeDislikeModel.find({'like.email':req.body.email})
           console.log(`value is ${value.length}`);
           console.log(`value1 is ${value1.length}`);

                if(value!=0){
                    console.log('i am in');
                    await likeDislikeModel.updateOne({'heart.email':req.body.email},
                    {$pull:{'heart':{'email':req.body.email}}})
                    

                    res.send('succesfull');
                    
                }
                else if(value1!=0){
                    await likeDislikeModel.updateOne({'like.email':req.body.email},
                    {$pull:{'like':{'email':req.body.email}}})

                    data.heart.push({"email":req.body.email});
                    let result = await data.save();
                    

                    res.send('successful value1');
                }
                else {
                    data.heart.push({"email":req.body.email});
                    let result = await data.save();
                    res.send(result);
                }

                
            
            
        }
        else if(req.params.id==1){//like section

            let value = await likeDislikeModel.find({'like.email':req.body.email})
           let value1 = await likeDislikeModel.find({'heart.email':req.body.email})
           console.log(`value is ${value.length}`);
           console.log(`value1 is ${value1.length}`);

                if(value!=0){
                    console.log('i am in like secton');
                    await likeDislikeModel.updateOne({'like.email':req.body.email},
                    {$pull:{'like':{'email':req.body.email}}})
                    

                    res.send('succesfull pulling');
                    
                }
                else if(value1!=0){
                    await likeDislikeModel.updateOne({'heart.email':req.body.email},
                    {$pull:{'heart':{'email':req.body.email}}})

                    data.like.push({"email":req.body.email});
                    let result = await data.save();
                    

                    res.send('successful value1');
                }
                else {
                    data.like.push({"email":req.body.email});
                    let result = await data.save();
                    res.send(result);
                }

        }
        
        
    }
    else {
        if(req.params.id==1){
            let data = await likeDislikeModel(req.body);
            data.like.push({"email":req.body.email});
            let result = await data.save();
            res.send(result);
        }
        else if(req.params.id==0){
            let data = await likeDislikeModel(req.body);
            data.heart.push({"email":req.body.email});
            let result = await data.save();
            res.send(result);

        }
        
    }
        

    
})

module.exports = router;