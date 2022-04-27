require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authusers = require("./routes/authUser");
const userData = require('./routes/userData');

const postUpload = require("./routes/postUpload");


const users = require("./routes/users");
const port = process.env.PORT || 5000;


const postComment = require('./routes/postComment');
const likeDislike = require('./routes/likeDislike');
const reportPost = require('./routes/reportPost');

// chat app router 

const conversation = require('./routes/conversations');
const message = require('./routes/messages');




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
app.use("/feeds/userprofile", authusers);
app.use("/feeds/myprofile", authusers);
app.use("/postupload", postUpload);

app.use("/users", users);

app.use("/conversations", conversation);
app.use("/messages", message);


app.use("/postupload/comment", postComment);
app.use("/postupload/likeDislike", likeDislike);
app.use("/postupload/report", reportPost);
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


// // socket io chat app srever 

// const socketIo = require("socket.io");
// const http = require("http");

// const server = http.createServer(app);

// const io = socketIo(server);

// // building socket connections 

// io.on("connection", (socket) => {
//   console.log("we have a New connection...");

//   socket.on("disconnect", () => {
//     console.log("User Had Left !!!.")
//   })
// })

// server.listen(8080, () => {
//   console.log("chat server up and running at 8080")
// })

