const express = require('express');
var app = express();
app.listen(3001, () => { });
app.get('/index', (req, res) => {
    res.send('这是首页');
    console.log('这是首页');
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
    console.log('即将跳转登录页面');
})
app.get('/', (req, res) => {
    res.redirect('/index')
    console.log('跳转首页');
})
app.get('/student', (req, res) => {
    res.redirect('http://www.baidu.com')
    console.log('走你!')
})