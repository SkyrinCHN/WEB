/*
//使用nodejs下的url模块
const url = require('url');
var str = 'http://bbs.nga.cn/read.php?tid=15396220&_ff=477';
//开始使用url模块
//将网址解析为对象
var obj = url.parse(str);
console.log(obj);

//将对象转换为网址
var obj2 = {
    protocol: 'http',
    hostname: 'bbs.nga.cn',
    port: 80,
    pathname: '/read.php',
    //query: 'tid=15396220&_ff=477',
    query:{tid:15396220,ff:477},
    hash:'one'
}
var http = url.format(obj2);
console.log(http);
*/
//练习:浏览器端请求的网址http://www.tedu.cn/web/1809.html?sid=20&name=tom#detail
//获取查询字符串中的sid和name两个对应的值
var str = 'http://www.tedu.cn/web/1809.html?sid=20&name=tom#detail';
const url = require('url');
const querystring = require('querystring');
var obj = url.parse(str);
console.log(obj);
//获取网址中的查询字符串
var qs = obj.query;
//把查询字符串解析为对象
var obj2 = querystring.parse(qs);
console.log(`查询结果
编号为${obj2.sid}
名字为${obj2.name}`)
