/*
//创建Date对象
var d1 = new Date();
//打印的是0时区的时间,存储的还是当前的时间
//console.log(d1);
console.log(d1.getFullYear());
console.log(d1.getMonth());//获取的月份 0-11 
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
//星期  0-6  范围星期日--星期六
console.log(d1.getDay());
//距离计算机元年的毫秒数
console.log(d1.getTime());
*/
/*
//练习:获取当前系统时间的Date对象,打印出一下格式 2018年10月19日14:06:30 星期五下午
var d1 = new Date();
var month = d1.getMonth() + 1;
if (d1.getHours() > 12) {
    var hour = '下午';
} else {
    var hour = '上午';
}
//如果秒钟小于10 添加前导0
var second = d1.getSeconds();
if (second <10) {second = '0' + second;}
var day = d1.getDay();
//创建一个数组,元素下标对应0-6
var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
console.log(d1.getFullYear() + '年' + month + '月' + d1.getDate() + '日 ' + d1.getHours() + ':' + d1.getMinutes() + ':' + second + '  '+week[day]+ ' ' + hour);
*/
