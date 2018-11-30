//变量的命名规则
var a1=1;
//var 1a=2; 不能以数字开头
var $a$=3; //不允许特殊符号开头，但允许$开头
var __a=4;
console.log($a$);

var userName='tom';
var user_name='jerry';
//关键字和保留字不能作为变量名
//var class=1;

//一次性声明多个变量
var dname='研发部',did=20;
console.log(dname);
console.log(did);
//练习：声明书的标题、作者、价格、出版时间
var title='三国演义',author='罗贯中',price='99.66',pubTime;
/*
console.log(title);
console.log(author);
console.log(price);
console.log(pubTime);//undefined
*/
//声明变量未赋值
var num;
//使用num变量存储数字1
num=1;
num='hello';
num=false;
console.log(num);





