/*
课后练习
    使用不带路径的目录模块
    创建目录模块circle,在目录下创建test.js
    创建两个变量r/pi,创建两个两个方法getArea(),getLength()
    分别获取圆的面积和周长,导出两个方法
    创建main.js,引入目录circle,打印圆的周长和面积
预习
    查询字符串模块(querystring)下的两个方法parse/stringify;
    预习url模块和fs模块
*/
var res =require('circle');
console.log(res.getArea());
console.log(res.getLength().toFixed(2));
