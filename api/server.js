require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authusers = require("./routes/authUser");
const userData = require('./routes/userData');
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use("/authusers", authusers);
app.use("/feeds/userprofile",userData);


//database connection
require("./db/connection");

//userAuthModel
const UserAuthModel = require("./models/userAuthModel");

app.listen(port, () => {
  console.log("server listen...");
});
