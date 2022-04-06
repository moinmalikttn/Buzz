const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
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
});

const UserAuthModel = new mongoose.model("userAuthModel", userAuthSchema);
module.exports = UserAuthModel;
