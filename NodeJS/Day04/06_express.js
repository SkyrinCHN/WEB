//引入express模块
const express = require('express');
//创建服务器
var app = express();
//监听端口
app.listen(3001, () => {
    console.log('服务器创建成功');
});
//根据浏览器的请求,来做出响应--路由
//结合请求的方法和请求的url

app.get('/login', (req, res) => {
    //get 向服务器发送请求的方法
    //req 请求的对象
    //res 响应的对象
    console.log('这是用于登录的页面');
})

app.get('/reg', (req, res) => {
    console.log('这是注册页面');
});
//只有同时满足请求的方法为post,请求的url为/home,路由才会做出响应
app.post('/home', (req, res) =>{
    console.log('登录成功');
})