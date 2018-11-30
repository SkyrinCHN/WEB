/*
//自定义对象,创建一个手机对象
//属性名:属性值,多组属性之间有逗号隔开
var phone = {
    color: 'white',
    screen_size: 6.2,
    made_in: 'CHINA'
};
console.log(phone);
*/
//创建一个员工的对象,属性有编号,姓名.性别,生日,工资
//创建一个商品对象,属性有编号,标题,价格,上架时间,库存量
var workman = {
    id: 5,
    name: 'chuk',
    sex: '男',
    birthday: '1985-5-15',
    salary: 8000
};
var goods = {
    gid: 15002,
    gtitle: '可比克薯片',
    price: 8.5,
    shelf_time: '2018-10-1',
    stock_count:500
}
console.log(workman, goods);