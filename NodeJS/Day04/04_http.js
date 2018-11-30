/*
使用http模块创建web服务器, 分配的端口为3001, 使用事件接收客户端的请求, 打印出请求的方法, url, 头信息
http://127.0.0.1:3001/damin/login.html
http://127.0.0.1:3001/member/shopping.html
04_http.js
*/
const http = require('http');
var webserver = http.createServer();
//分配端口--监听端口
webserver.listen(3001, () => {
    console.log('有请求了,快处理')
})
webserver.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    //console.log(req.headers);
    //响应一行文本
    //res.write('I know,don\'t hurry\n');
    res.write('hello,world')
    
    //响应的重定向
    //1:响应的状态码
    //2:响应的头信息
    //res.writeHead(302, {
        //跳转到百度,哈哈
        //Location: 'http://www.baidu.com',
        //'Content-Type':'txt/html;charset=utf8'
    //});

    res.end();//响应结束,不能再写入了
    
})