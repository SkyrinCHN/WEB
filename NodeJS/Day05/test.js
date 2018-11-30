/**创建路由 /view , get  响应当前的浏览次数
 * 每次请求,所响应次数+1 
 * 初始化一个全局变量0,在中间件中变量+1,在路由中响应这个变量
 * */
const express = require('express');
var app = express();
var  count = 0;
app.listen(3000);

app.use('/view', (req, res, next) => {
    count += 1;
    console.log(count);
    next();
});
app.get('/view', (req, res, next) => {
    res.send(`浏览次数${count.toString()}`);
    next();
});
