const mongoose = require("mongoose");

const postCommentSchema = new mongoose.Schema({
  comment:{
      type:String,
      required:true
  }
});

const postSchema = new mongoose.Schema({
  desc: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userImg: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments:[postCommentSchema]
});

const PostModel = new mongoose.model("PostModel", postSchema);
module.exports = PostModel;
