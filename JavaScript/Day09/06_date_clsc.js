//练习:计算当前系统时间距离圣诞节还要60天8小时23分钟15秒
//两个Date对象距离计算机元年的毫秒数相减
var nowTime = new Date();
var chrisTime = new Date('2018/12/25');
//两个对象相减,返回的相差的毫秒数
var checkTime = chrisTime - nowTime;
console.log(checkTime+' 毫秒');
//转成秒
checkTime = Math.floor( checkTime / 1000);
console.log(checkTime + ' 秒');

//获取天数 = 相差秒数 % 一天的秒数(86400)
var day = Math.floor(checkTime / (24 * 60 * 60));
console.log(day + ' 天');


//获取小时 = 相差秒数 % 一天24小时的秒数
var hours = checkTime % (24 * 60 * 60);
//把不满24小时的秒数,转成小时
hours =Math.floor(hours / (60 * 60));
console.log(hours + ' 小时');

//获取分钟 = 相差的秒数 % 一小时的秒数(3600)
var min = checkTime % (60 * 60);
min = Math.floor(min / 60);
console.log(min);

//获取秒钟 = 相差的秒数 % 一分钟的秒数(60)
var second = checkTime % 60;
console.log(second);

console.log('距离圣诞节还有' + day + '天 ' + hours + '小时 ' + second + '秒');



