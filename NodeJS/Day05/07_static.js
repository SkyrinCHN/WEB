const express = require('express');
var app = express();
app.listen(3000);
/*
浏览器请求静态文件(html, css, js, 图片)
自动去某个目录下查找,找到了就有,找不到拉倒
这个查找的目录,就称为静态目录,用于托管静态资源
---> 内置中间件
*/
app.use(express.static('./files'));
app.use(express.static('./public'));


//练习:在静态目录static下,托管文件login.html,然后在浏览器请求
//练习:托管静态文件到files目录下,如果files下和public下出现
//同名文件,显示哪一个文件