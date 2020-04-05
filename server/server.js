require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //used to accept data from frontend as js object.

mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then( ()=>{
        console.log("Database connected");
    })
    .catch ( err => {
        console.log("Error occurred while connecting to database. ERROR : " + err);
    });

// const homePage = require("./routes/homepage");
// app.use('/', homePage);

const loginPage = require("./routes/login");
app.use('/login', loginPage);

const signupPage = require("./routes/register");
app.use('/register', signupPage);

const uploadPage = require("./routes/upload");
app.use("/upload", uploadPage);

app.listen(port, () => {
    console.log("server is running on port 5000");
});

