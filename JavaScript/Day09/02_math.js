//math对象
//获取圆周率
console.log(Math.PI);//3.1415926..
//绝对值
console.log(Math.abs(-5));//5
//parseInt
console.log(parseInt(3.5)); //3
//四舍五入取整
console.log(Math.round(3.5));
//向上取整
console.log(Math.ceil(3.35));//  4
//向下取整
console.log(Math.floor(3.6))// 3
//求最大值
console.log(Math.max(18, 29, 14, 99, 100, 20));// 100
//求最小值
console.log(Math.min(15, 2, 45, 29, 3)); // 2
//取X的Y次幂
console.log(Math.pow(3, 5));//   243
//取随机数
console.log(Math.random());
//获取0-55之间随机整数
var num = Math.random() * 56;
//向下取整(o.几到55.几)
console.log(Math.floor(num));
