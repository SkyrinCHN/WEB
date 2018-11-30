//引入http模块
const http = require('http');
//模拟客户端浏览器发请求
//请求的url和请求的方法
http.get('http://www.codeboy.com', (res) => {
    //res是服务器端响应的对象
    //console.log(res);
    //查看响应的状态码,是否成功
    console.log(res.statusCode);
    //获取服务器端响应的内容
    //通过一个事件:当有数据传输
    //通过回调函数来获取服务器端响应的数据
    res.on('data', (buf) => {
        console.log(buf.toString());
    });
});