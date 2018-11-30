const express = require('express');
var app = express();
app.listen(3001, () => {
    
})
//2路由
app.get('/login', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    //获取请求的头信息
    //console.log(req.headers);
    //获取请求url中的查询字符串
    console.log(req.query);//格式为对象
})
app.get('/admin', (req, res) => {
    //响应:文本,跳转,文件
    //1,响应文本每次只能使用一次 Cannot set headers after they are sent to the client
    //响应文本为数字,就会认为是状态码;,使用的时候需要加引号
    //res.send(404);
    //res.send('404');
    //2,响应文件
    //__dirname 绝对路径
    //res.sendFile('/Users/liuhai/Desktop/NodeJS/Day04/admin.html');
    //res.sendFile(__dirname+'/admin.html');
    //3,响应的重对象
    res.redirect('http://www.codeboy.com');
})