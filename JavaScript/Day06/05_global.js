/*
var str = 'http://www.jd.com/sreach?keyword=电脑';
//对URL(路径)进行编码.只对于中文
console.log(str)
var str = encodeURI(str);
console.log(str);
//对URL进行解码
str = decodeURI(str);
console.log(str);
*/
/*
//eval全局函数,执行字符串中的表达式
var str = '1+1';
var str1 = 'parseInt(3.5)';
//执行字符串中的表达式
var res = eval(str);
console.log(res);
var res1 = eval(str1);
console.log(res1);

//练习,结合弹出提示框,使用eval执行输入的内容,使用弹出警示框
//显示执行结果
var str = prompt('please input something');
var resu = eval(str);
alert(resu);
*/

/*
var num = parseInt('a5');
var res = isNaN(num);
console.log(res);
*/

//检测一个值是否为有限值
var res2 = isFinite(3 / 0);//false Infinity 无穷大
var res = isFinite(3 * 3);//true  为有限值,false为无限值
var res1 = isFinite(10 / 3);//ture
console.log(res2);
console.log(res);
console.log(res1);