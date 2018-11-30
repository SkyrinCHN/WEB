/*练习:创建web服务器,监听30001端口,
接收浏览器的请求,
打印请求的路径,
响应的文本是请求的路径
*/

const http = require('http');
var webserver = http.createServer();
webserver.listen(3001, () => {
    console.log('ready');
})
webserver.on('request', (req, res) => {
    /*
    console.log(req.url);
    res.writeHead(302, {
        Location:'http://www.baidu.com'
    })
    res.write(req.url);
    */
    //如果请求的是url是/member , 响应'this is member page';
    //如果请求的事yrl是/admin,响应'Welcome to admin page';
    var url = req.url;
    /*
        请求的是/login,响应'please login';
        请求的是/student, 跳转到学子商城网址
        请求的是/,跳转到/login
        如果请求的url以上都没有,响应'404 NOT FOUND';
    */
    switch (url) {
        case '/student':
            res.writeHead(302, {
                Location: 'http://www.codeboy.com'
            })
            break;
        case '/':
            res.writeHead(302, {
                Location: '/login'
            })
            break;
        case '/member':
            res.write('this is member page');
            console.log('this is member page');
            break;
        case '/admin':
            res.write('Welcome to admin page');
            console.log('Welcome to admin page');
            break;
        case '/login':
            res.write('please login');
            console.log('please login');
            break;
        default:
            res.write('404 NOT FOUND');
            console.log('404 NOT FOUND');
    }
    res.end();
});