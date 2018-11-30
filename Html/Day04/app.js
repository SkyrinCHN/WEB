const express =  require('express');
var app =express();
app.listen(3000);
app.use(express.static('./public'));
var bodyParser =  require('body-parser');
var userRouter = require('./routers/user')
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/user',userRouter);
