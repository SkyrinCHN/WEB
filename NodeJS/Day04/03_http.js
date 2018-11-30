//引入http模块
const http = require('http');
//创建web服务器
var webserver =  http.createServer();
//分配端口--监听端口
webserver.listen(16800, () => {
    console.log('服务器已就位')
});
//访问创建的服务器:
//1,IP地址或者域名
//2,服务器的端口
//3,通信协议

//接受浏览器的请求,并作出响应
//通过一个事件来获取是否有请求
webserver.on('request', (req, res) => {
    //req为请求的对象 res为响应的对象
    console.log('有一个请求发生了,快响应');
    //获取请求的url
    console.log(req.url);
    //获取请求的方法
    console.log(req.method);//GET
    //获取请求的头信息
    console.log(req.header);
})