/*
var person = ['toms', 'jerry', 'kate'];
//数组的访问形式
person[3] = 'jack';
console.log(person[4]);
person[0] = 'james';
//获取某一元素的值
console.log(person[0]);
var res = person[1];
console.log(res);
*/
/*
//练习:使用数组字面量简历数组city,保存5个城市的名称,添加第6个城市
//修改第三个城市的名称 打印数组
var city = new Array(5);
city[0] = '北京';
city[1] = '上海';
city[2] = '广州';
city[3] = '深圳';
city[4] = '杭州';
console.log(city);
city[5] = '重庆';
//自动获取下一个数组的下标:就是当前数组的长度
city[city.length] = '成都'

console.log(city);
city[2] = '南京';
console.log(city);
for (var x in city) {
    console.log(x + '  -->  ' + city[x]);
}
console.log(city.length);
*/
/*
//使用数组字面量常见空数组car,保存汽车品牌名称,使用数组的长度为数组添加多个元素
var car = [];
car[0] = '马自达';
car[car.length] = '福特';
car[car.length] = '大众';
car[car.length] = '别克';
car[car.length] = '凯迪拉克';
car[car.length] = '荣威';
car[car.length] = '长城HAVAL';
console.log(car);
console.log('一共有' + car.length + '个品牌');
console.log(car[5]);
//向数组的末尾添加一个或更多元素，并返回新的长度
console.log(car.push('长安'));
for (var i in car) {
    console.log(i + ' -->  ' + car[i]);
}
*/
/*
//以字符串作为下标 关联数组
var car = new Array();
car['cid'] = '1001';
car['brand'] = '北京汽车';
console.log(car);
*/
//练习 创建关联数组emp. 添加元素 编号 姓名 性别 生日 工资 电话
var emp = new Array();
emp['eid'] = '1002';
emp['ename'] = '王丽';
emp['sex'] = 0;
emp['birthday'] = '1985-2-15';
emp['salary'] = '6500';
emp['phone'] = '18836982838';
for (var i in emp) {
   console.log(i + ' --> ' + emp[i]);
}
