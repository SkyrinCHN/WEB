/*
//创建数组 - 内置构造函数
var emp = new Array(5);
//new一个数组emp,初始化长度为5
emp[0] = '得分后卫';
emp[1] = '小前锋';
emp[2] = '组织后卫';
emp[3] = '大前锋';
emp[4] = '中锋';
emp[5] = '教练'
console.log(emp);
for (var x in emp) {
    console.log(x + '  -->  ' + emp[x]);
}
*/
var test = new Array();
test['eid'] = 1001;
test['name'] = '刘海';
for (var i in test) {
    console.log(i, test[i]);
}