//带有参数的函数
/*
//计算任意两个数相加的结果
function addNumer(a, b) {
    //a,b 为形参,本质就是声明了两个变量,未赋值
    console.log(a);
    console.log(b);
    console.log(typeof (a));
    console.log(typeof (b));
    console.log(a * b);
}
//调用的时候:实参的值就会赋值给形参(给变量赋值)
addNumer(10, 20);
addNumer(1, 5);
addNumer(5, 10);
*/

/*
//创建函数getSum,传递1个参数,得到1~任意数字之间的和 打印结果
function getSum(n) {
    for (var i = 1, sum = 0; i <= n; i++) {
        sum += i
    }
    console.log('1到'+n +'之间的和为:'+sum);
}
getSum(50);
//创建函数getRun,传递2个参数,一个为初始年份,一个为截止年份.要求打印任意两个年份之间的闰年个数
function getRun(a, b) {
    for (var i = a, count = 0; i <= b; i++){
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
            count++;
            console.log(i + '年是闰年');
        }
    }
    console.log(a+'年到'+b+'年之间的闰年个数为:'+count);
}
getRun(1949, 2018);
*/