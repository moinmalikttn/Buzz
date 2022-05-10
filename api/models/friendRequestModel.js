const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
    id:{
        type:String
    },
    sentRequest:[{
        Email:{
            type:String,
            default: ''
        }
    }],
    request:[{
        Email:{
            type:String,
            default: ''
        }
    }],
    
    
})

const friendModel = new mongoose.model('friendModel',friendsSchema);

module.exports = friendModel;
