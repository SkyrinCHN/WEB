/*
//设置日期和时间
var d1 = new Date('2018/10/20 15:30:40');

d1.setFullYear(2008);//设置年份为2018年
d1.setMonth(11);//实际显示月份+1
//设置日期为30 时分秒 8:30:50
d1.setDate(30);
d1.setHours(8); 
d1.setMinutes(30);
d1.setSeconds(50);
console.log(d1.toLocaleString());
*/
/*
//2天以后星期几
var d2 = new Date();
var day =d2.setDate((d2.getDate() + 2));
console.log(d2.getDay().toLocaleString());
*/

//8月1号入职,合同3年,到期后是多久
var workTime = new Date('2018/10/20');
var targetTime = new Date(workTime);
targetTime.setFullYear(targetTime.getFullYear() + 3);
console.log('入职时间为:' + workTime.toLocaleDateString()
    + '合同到期时间为:' + targetTime.toLocaleDateString());
//续签合同,提前一个月续签,如果是周末,提前到周五
var goon = new Date(targetTime);
goon.setMonth(goon.getMonth() - 1);
if (goon.getDay() == 0 ) {
    goon.setDate (goon.getDate()-2)
} else if(goon.getDay() == 6 ){
    goon.setDate (goon.getDate()-1)
} 
console.log(goon.toLocaleDateString());



//本地化时间格式
//console.log(d1.toLocaleString());
//年月日
//console.log(d1.toLocaleDateString());
//时分秒
//console.log(d1.toLocaleTimeString());
