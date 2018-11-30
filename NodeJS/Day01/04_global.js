//在nodejs下,每一个文件就相当于是一个文件作用域--局部作用域
//声明一个变量 这个变量是局部变量,而不是全局变量
var a = 1;//局部变量
//是否能够适用global来访问
console.log(global.a)//undefined