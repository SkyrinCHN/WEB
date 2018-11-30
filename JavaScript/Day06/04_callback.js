//创建函数addNumber 传递2个参数,参数是以匿名函数的方式传递
//打印两个匿名函数相加的结果

/*
function addNumber(a, b) {
    //a()调用第一个匿名函数,执行第一个匿名函数体的内容,返回结果10
    //b()调用第2个匿名函数:执行第二个匿名函数体的内容,返回结果是20
    var sum = a() + b();
    console.log(sum);
}
addNumber(function () {
    //函数体中可以写多行代码
    return 10;
}, function () { 
    return 20;
 })
    
function fn(cb) {
    cb();
}
fn(function () {
    var num1 = 1, num2 = 2;
    console.log(num1 + num2);
    console.log(num1 - num2);
})
*/
function getCount(a) {
    a();
}
getCount(function () {
    for (var i = 1; i <= 9; i++){
        var z = '';
        for (var j = 1; j <= i; j++){
            var sum = i * j;
            z+=i + '*' + j + '=' + sum+' '
        }
            console.log(z);
        }
    })