//练习:使用http模块向tmooc首页发送请求,打印请求的状态码和数据
const http = require('http');
/*
http.get('http://www.tmooc.cn', (res )=> {
    console.log(res.statusCode);
    res.on('data', (buf) => {
        console.log(buf.toString());
    })
})
*/
//练习:请求中国气象网的数据
http.get('http://www.weather.com.cn/data/sk/101040100.html', (res) => {
    console.log(res.statusCode);
    res.on('data', (buf) => {
        console.log(buf.toString());
    })
    
})
//使用http模块创建web服务器,分配的端口为3001,使用事件接收客户端的请求,打印出请求的方法,url,头信息
//http://127.0.0.1:3001/damin/login.html
//http://127.0.0.1:3001/member/shopping.html
//04_http.js