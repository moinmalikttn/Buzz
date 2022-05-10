require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authusers = require("./routes/authUser");
const userData = require('./routes/userData');
const http = require('http').createServer(app); 
// const socketIO = require('socket.io');

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

http.listen(port, () => {
  console.log("server listen...");
});

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000/']
  }
});

io.on('connection',(socket)=>{
  console.log('a user connected');

  socket.on('disconnect',()=>{
    console.log('user disconnected');
    
  })

  socket.on('my message',(msg)=>{
    console.log('message: '+msg);
  })
})
