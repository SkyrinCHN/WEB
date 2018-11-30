/*
//使用内置构造函数创建对象
//创建空对象
var computer = new Object();
//添加属性
computer.color = 'grey';//语法1
computer.size = 15.4;
computer['price'] = 18688;//语法2
computer['made-in'] = 'CHINA';//有特殊符号时,必须使用中括号['']加引号''添加属性
console.log(computer);
*/

/*

//创建一个汽车对象,编号.品牌.颜色.大小.价格
//创建一本书对象,编号.标题.作者.出版时间.是否在售
var car = new Object();
car.id = 3;
car.brand = 'BMW';
car.color = 'white';
car.size = '4.78*2.82*1.85';
car.price = 1480000;
console.log(car);

var book = new Object();
book.id = 13005;
book.title = 'JavaScript从精通到转行';
book.author = '李大牛';
book.shelf_time = '2005-3-25';
book.is_self = true;
console.log(book);

var book1 = new Object();
book1['id'] = 120005;
book1['title'] = 'Java从入门到放弃';
book1['author'] = '王二狗';
book1['shelf_time'] = '2007-7-16';
book1['is_self'] = false;
console.log(book1);
*/

//创建一个对象
var country = {
    cname: 'CHINA',
    area: 9600000,
    language:'chinese'
}
//获取对象的属性值
console.log(country.cname);
console.log(country['area']);