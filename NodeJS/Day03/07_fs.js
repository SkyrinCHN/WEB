const fs = require('fs');

//1.1查看文件的状态 stat 异步
//不会阻止后续代码的执行,把执行的结果放到程序的最后
//第一个参数:文件的路径
//第二个参数:
fs.stat('./05_url.js', (err,stats) => {
    //err 如果查询有错误,把错误信息放到这参数(err)中
    if (err) {
        //抛出错误,阻止后续代码执行
        throw err;
    }
    //console.log(stats);
    //是否为文件
    console.log(stats.isFile());
    //是否为目录
    console.log(stats.isDirectory());
});

//1.2 查看文件的状态 statSync 
//同步 阻塞式
var res = fs.statSync('./05_url.js');
console.log(res.isFile());
console.log(res.isDirectory());

console.log('执行结束')