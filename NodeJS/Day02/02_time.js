/*
//1,一次性定时器
//开启,把开启的定时器放入到变量中,便于清除
var timer = global.setTimeout(() => {
    console.log('boom!');
}, 3000);
//清除一次性定时器
clearTimeout(timer);

//2,周期性定时器
var timer = setInterval(() => {
    console.log('闹钟响了,快起床');
}, 3000)
//清除周期性计时器
clearInterval(timer);
*/

//练习使用周期性定时器,每隔3秒打印hello,打印3次后清除
//声明变量,统计次数
var i = 0;
var timer = setInterval(() => {
    console.log('hello');
    //打印一次,i+1
    i += 1;
    //打印3次,清除定时器
    if (i == 3) {
        clearInterval(timer);
    }
}, 3000)
