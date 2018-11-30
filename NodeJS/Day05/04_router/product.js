//商品模块的路由器,包含所有商品模块下的路由
//路由器是express提供的一个功能,需要再次引入express
const express = require('express');
//创建一个空的路由器,返回一个对象
var router = express.Router();
//往这个空的路由器中添加模块下的所有路由
//请求方法:get 请求url:/list
router.get('/list', (req, res)=>{
    res.send('这是商品列表');
})
//请求方法:get 请求url:/delete
router.get('/delete', (req, res) => {
    res.send('这是要删除的商品');
})
//请求方法:get 请求url:/add
router.get('/add', (req, res) => {
    res.send('这是要添加的商品');
})
//这是一个独立的模块,里边的内容不能直接被其他模块使用
//导出路由器
module.exports = router;