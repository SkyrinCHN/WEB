const express = require('express');
var app = express();
app.listen(3001);
/*
//路由
//请求的url:/detail,请求方法:get
//路由传参数:在url中设置要接收的名称 :lid 冒号开头
app.get('/detail/:lid/:datal', (req, res) => {
    //获取路由传参的数据
    console.log(req.params);
})
*/
/*
创建一个购物车路由, 请求的url: /shopping.请求的方法get
传递商品的价格price和商品名称
*/
app.get('/shopping/:goodsName/:price', (req, res) => {
    var goodsInfo = req.params;
    console.log(`名称${goodsInfo.goodsName}价格${goodsInfo.price}`)});