//创建函数getSum,要求传递一个参数,返回1到参数之间所有整数的和,使用递归
function test(n) {
    //前N个数的和 = N + 前N-1个数的和
    //当N为1的时候,结束函数 
    if (n == 1) {
        return 1;
    }
    return n + test(n - 1);
}
var res = test(5);
console.log(res);
//创建函数getSum,要求传递一个参数,返回1到参数之间所有整数的乘积,使用递归
function getSum(n) {
    if (n == 1) {
        return 1;
    }
    return n * getSum(n - 1);
}
var res = getSum(10);
console.log(res);