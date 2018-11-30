//变量的作用域
/*
var num1 = 1;
//函数外部声明的变量是全局变量,可以在任何位置使用
function fn1() {
    //没有使用var关键字声明的变量是全局变量
     num1 = 5
    var num2 = 2;
    //函数内部声明的变量,局部变量
    //只能在函数内部使用
}
fn1();
console.log(num1);//打印结果为5
*/

var num4 = 4;
function fn3() {
    var num4 = 7;
    console.log(num4);
}
fn3();
