/**
 (2), 创建服务器, 托管一个静态文件, 点击查询, 服务器获取身份证号(在中间件);
 再次使用中间件截取身份证中年月日, 性别.
 在路由中响应这些信息
 */
const express = require('express');
var app = express();
app.listen(3000);
app.use(express.static('public'));
var str;
app.use('/check', (req, res, next) => {
    str = req.query;
    next();
})
app.get('/check', (req, res, next) => {
    var birthday = str.uid;
    if (birthday.length != 18) {
        res.send('身份证错误');
    } else{
        var year = birthday.slice(6, 10);
        var month = birthday.slice(10, 12);
        var date = birthday.slice(12, 14);
        var sex = birthday.slice(-2, -1);
        if (sex % 2 == 0) {
            sex = '女';
        } else {
            sex = "男";
        }
        res.send(`出生年份:${year}<br>出生月份:${month}<br>出生当日:${date}<br>性别:${sex}`);
        next();
    }
       
       
    
})
