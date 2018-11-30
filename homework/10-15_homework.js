/*
//斐波那契数列
function fn(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fn(n - 1) + fn(n - 2);
}
var res = fn(8);
console.log(res);
//创建函数.调用函数
function print() {
    console.log(123);
    console.log('hello world')
}
print();
//计算两个数相加的结果
function sum(a, b) {
    console.log(a * b);
}
sum(3, 5);
//创建函数getSum,传递1个参数,得到1~任意数字之间的和 打印结果
function getSum(n) {
    for (var i = 1, sum = 0; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}
getSum(10);
//创建函数getRun,传递2个参数,一个为初始年份,一个为截止年份.
//要求打印任意两个年份之间的闰年个数
function getRun(start, end) {
    for (var i = start, count = 0; i <= end; i++){
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            count++;
        }
    }
    console.log('闰年的个数为:'+count);
}
getRun(2000, 2100);
//计算1~任意数字之间的和,返回结果
function getSum(n) {
    for (var i = 1, sum = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
var a = getSum(25);
console.log(a);
*/
//练习:创建函数getRun,传递2个参数,返回两个年份之间的闰年个数
function getRun(a, b) {
    for (var i = a, count = 0; i <= b; i++){
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            count++;
        }
    }
    return count;
}
var res = getRun(2000,2200);
console.log(res);
//创建函数getMax ,传递三个参数,返回最大值
function getMax(a, b, c) {
    var num = a > b ? a : b;
    return num > c ? num : c;
}
var res = getMax(3, 5, 8);
console.log(res);

