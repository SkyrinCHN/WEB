const express = require('express');
const queryString = require('querystring');
var app = express();
app.listen(3000);
/*路由:请求注册页面
请求方法:get,请求URL
*/
app.get('/reg', (req, res) => {
    res.sendFile(__dirname + '/reg.html');
})
//创建请求注册的路由
app.post('/myreg', (req, res) => {
    req.on('data', (buf) => {
        //将浏览器传递的数据解析成对象,
        //响应浏览器 注册内容
        var str = buf.toString();
        var arr = queryString.parse(str);
        console.log(arr);
        res.send(arr.uname + ' 注册成功')
    })
});

//练习:创建路由
//请求方法:get , 请求url:/myreg2
//获取请求的数据 -- req.query
app.get('/myreg2', (req, res) => {
    console.log(req.query);
    var obj = req.query;
    res.send(obj.uname+'\n'+obj.upwd);
});