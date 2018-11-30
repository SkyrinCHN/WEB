const express=require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');

var app = express();
app.listen(3000);
app.use(express.static('public'));

const userRouter = require('./routers/user.js')

app.use(bodyParser.urlencoded({
    extended:false
}))
app.use('/user',userRouter);
