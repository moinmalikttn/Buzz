require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authusers = require("./routes/authUser");
const userData = require('./routes/userData');
const port = process.env.PORT || 8000;
const postUpload = require("./routes/postUpload");


const users = require("./routes/users");


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
app.use("/feeds/userprofile",authusers);
app.use("/feeds/myprofile",userData);
app.use("/postupload", postUpload);
app.use("/users", users);
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
