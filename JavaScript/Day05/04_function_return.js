//带有返回值的参数
/*
//计算1~任意数字之间的和,返回结果
function getSum(num) {
    for (var i = 1, sum = 0; i <= num; i++){
        sum += i;
    }
    return sum;
    //返回计算的结果
}
//把函数的结果放入变量 result
var result = getSum(50);
//打印函数结果
console.log(result);
*/

/*
//练习:创建函数getRun,传递2个参数,返回两个年份之间的闰年个数
function getRun(start_year, over_year) {
    for (var i = start_year, count = 0; i <= over_year; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            count++;
            console.log(i+'年是闰年');
        }
    }
    console.log(start_year + '到' + over_year + '年之间有' + count +'个闰年')
    return count;
    
}
var res = getRun(2000, 2100);
console.log(res);
*/

/*
//创建函数getMax ,传递两个参数,返回最大值
function getMax(a, b) {
    //方法一
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
    //方法二
    return a > b ? a : b
}
var res = getMax(2, 1);
console.log(res);
*/

/*
//创建函数getMax,传递3个参数,返回最大值
function getMax(a,b,c,x) {
    //比较 a和b ,产生一个最大值
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    //比较max和C哪个大
    if (max > c) {
        return max;
    } else {
        return c;
    }
}
var res = getMax(1, 4, 7);
console.log(res);

function getMax(a, b, c) {
    var max = a > b ? a : b;
    return max > c ? max : c;
}
var res = getMax(1, 4, 7);
console.log(res);
*/
/*
//创建函数getSex.传递一个参数(0/1),返回'男/女'
function getSex(a) {
    if (a == 0) {
        return '女';
    } else if(a== 1){
        return '男';
    } else {
        console.log('数据错误');
    }
    return a;
}
var sex = getSex(1);
console.log(sex);
*/
//创建函数 isRun(),传递一个参数(年份),如果是闰年 返回true,否则返回false
function isRun(n) {
    if (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) {return true;} 
}
var result = isRun(2000);
//查看一个年份有多少天
//if()括号中只有一个值,默认和true进行比较,不用写 result = ture
if (result) {//如果result为true
    console.log(366);
} else {
    console.log(365);
}