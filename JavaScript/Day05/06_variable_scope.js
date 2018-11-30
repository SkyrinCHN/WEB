//变量提升
//在整个程序执行前:首先会检查所在作用域下使用var关键字声明的变量
//只是把声明提升到最前边, 但是不会提升赋值吗,赋值还是在原来的位置
/*
console.log(num1);
var num1 = 1;
console.log(num1);

function fn1() {
    //这次打印会undefined
    console.log(num2);
    var num2 = 2;
    //这次打印 2
    console.log(num2);
}
fn1();
*/
/*
var a = 3;
function fn() {
    //局部作用域:检查var 声明的变量,提升到最前面
    //var a;
    //当前作用域下边有一个a变量,只是在后边,所以不会去上一级寻找a变量
    console.log(a);
    var a = 5;
}
fn();//结果为undefined
*/
var b = 5;
function fn2(number){
    number++;
    //console.log(number);
}
//把b的值以实参的形式传递
fn2(b);
console.log(b);