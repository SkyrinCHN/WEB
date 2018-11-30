const express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.listen(3000);
app.use(express.static('/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post('/mylogin', (req, res) => {
    console.log(req.body);
});