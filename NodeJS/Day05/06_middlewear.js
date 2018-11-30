const express = require('express');
var app = express();
app.listen(3000);

//前置中间件 只拦截goodsList路由
app.use('/goodsList',(req, res, next)=> {
    console.log('我是前置中间件,我就拦截goodsList路由');
    next();
})
//goodsList路由
app.get('/goodsList', (req, res,next) => {
    res.send('这是商品列表');
    next();
})
//goodsInfo 路由
app.get('/goodsInfo', (req, res) => {
    console.log('商品列表,中间件管不了我');
});
//goodsList后置中间件
app.use('/goodsList', (req, res, next) => {
    console.log('我是goodsList的后置中间件');
    next();
})

//商品详情 前置中间件
app.use('/detail',(req, res, next) => {
    console.log('这是商品详情前置中间件');
    next();
});
//商品详情 路由
app.get('/detail', (req, res, next) => {
    console.log('这是商品详情路由');
    res.send('这是商品详情');
    next();
});
//商品详情,后置中间件
app.use('/detail',(req, res, next) => {
    console.log('商品详情,后置中间件');
    next();
});