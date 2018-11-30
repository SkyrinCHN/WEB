//创建对象
var d1 = new Date('2018/10/1 18:20:30');
//1-12 对应的范围 0-11
var d2 = new Date(2018, 9, 1, 18, 20, 30);
var d3 = new Date(3000000000000);//距离计算机元年的时间(毫秒)
//console.log(d1);
console.log(d3);

//创建1970-1-2 0:0:0的Date对象
var d4 = new Date(86400000);
console.log(d4);