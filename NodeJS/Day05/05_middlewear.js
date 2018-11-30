const express = require('express');
var app = express();
app.listen(3000);
//登录成功之前,需要对用户进行验证 --> 中间件
//在中间件中一样有请求和响应
app.use((req, res, next) => {
    console.log('已执行验证');
    next();//表示执行下一个中间件或者主业务逻辑
})
//练习:使用中间件查看权限
app.use((req, res, next) => {
    console.log('检查权限');
    next();
})
//路由 登录
app.get('/login', (req, res, next) => {
    console.log('登陆成功');
    res.send('成功登陆');
    next();
})
app.use( (req, res,next) => {
    console.log('已记录此次登陆');
    next();
})
    
