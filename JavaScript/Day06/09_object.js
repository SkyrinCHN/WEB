/*
//遍历对象(循环)
var emp = {
    eid: 5,
    ename: 'kate',
    sex: 0,
    birthday: '1991-05-28',
    salary: 8500,
    phone: 17773568849
};
//for-in
for (var key in emp) {
    //in前的变量key便是要遍历的所有属性名
    //in后表示要遍历的对象
    console.log(key+'---'+emp[key]);
}
*/

var car = new Object();
car.id = 3;
car.brand = 'BMW';
car.color = 'white';
car.size = '4.78*2.82*1.85';
car.price = 1480000;

for (var key in car) {
    console.log(key+' --->   '+car[key]);
}



var book1 = new Object();
book1['id'] = 120005;
book1['title'] = 'Java从入门到放弃';
book1['author'] = '王二狗';
book1['shelf_time'] = '2007-7-16';
book1['is_self'] = false;
for (var i in book1) {
    console.log(i + '   --->  ' + book1[i]);
}