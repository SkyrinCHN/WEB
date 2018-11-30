//创建函数 - - 函数声明
function fn() {
    console.log('hello')
}
//创建一个匿名函数,把函数的地址存储到变量fun里
//创建函数 --  函数表达式  此时的fun就是函数的名称
var fun = function () {
    console.log('hello');
    return true;
}
var re = fun();
console.log(re);
//练习:使用函数表达式创建函数getSum,传递1个参数,获取1~参数的和
var getSum = function(n){
    for(var i = 1, sum = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
var res = getSum(50);
console.log(res);