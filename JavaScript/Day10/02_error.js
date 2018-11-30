/*
//尝试执行,说明可能产生错误
try {
    var b = a + 1;
    //尝试执行的代码
    var arr = new Array(-2);
} catch (err) { //尝试出现错误,捕获到err中
    //解决方案
    //console.log(err);
    var b = 1 + 1;
}
console.log(b);
console.log('over');
*/
/*
    计算所有成绩(语文,数学,英语)的和,如果成绩为空,默认设置为60,最好打印总和
*/
try {

    var chinese = 80,
        math = 85,
        english = 90,
        sum;
    //尝试计算总和,可能会出现错误
    sum = chinese + math +english;
}
catch(err){
    //console.log(err);
    //解决防范:如果英语不存在,使用60
    var sum = chinese + math + 60;
}
console.log(sum);