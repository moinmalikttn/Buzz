require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authusers = require("./routes/authUser");
const userData = require('./routes/userData');
const port = process.env.PORT || 5000;
const postUpload = require("./routes/postUpload");
const postComment = require('./routes/postComment');
const likeDislike = require('./routes/likeDislike');
const reportPost = require('./routes/reportPost');


const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use("/authusers", authusers);
app.use("/feeds/userprofile",userData);
app.use("/postupload", postUpload);
app.use("/postupload/comment",postComment);
app.use("/postupload/likeDislike",likeDislike);
app.use("/postupload/report",reportPost);
const fileUpload = require("express-fileupload");


//database connection
require("./db/connection");

//file upload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//userAuthModel
const UserAuthModel = require("./models/userAuthModel");
const PostModel = require("./models/postUploadModel");

app.listen(port, () => {
  console.log("server listen...");
});
