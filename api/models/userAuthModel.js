const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userAuthSchema = new mongoose.Schema({
  id: {
    type: String
  },
  email: {
    type: String,
  },
  googleId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  followers: [{ type: ObjectId, ref: "userAuthModel" }],
  followings: [{ type: ObjectId, ref: "userAuthModel" }],


},
  { timestamps: true }
);

const UserAuthModel = new mongoose.model("userAuthModel", userAuthSchema);
module.exports = UserAuthModel;
