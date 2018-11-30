//使用let关键字声明变量
//console.log(a);
//var a = 2;
//let a = 2;
//let 声明的变量不存在提升
/*
{
    //es6中,{}是创建的一个块级作用域
    let num = 2; //let声明局部变量,无法被外部访问
    var num = 2; //var声明的变量, 可以被{}外部访问
}

for (let i = 0; i <= 10; i++) {
    //使用let变量声明的变量i,仅可以在{}内访问
}
*/

//箭头函数
var arr = [18, 37, 59, 64, 81];
console.log('回调函数: ' + arr.sort(function (a, b) {
    return a - b;
}));
console.log('箭头函数: ' + arr.sort((a, b) => {
    return a - b;
}))
console.log('箭头函数简化 ' + arr.sort((a, b) => a - b));

//函数中的参数 ec6允许为形参设置默认值,如果没有传递实参,自动使用形参的默认值
function fn(a = 5, b = 6, c = 4) {
    console.log(a + b + c);
}
fn(1);

var now = new Date();
//*年*月*日  时:分:秒
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(`今天是${year}年${month}月${day}日
${now.getHours()}点${now.getMinutes()}分${now.getSeconds()}秒`);

//创建一个对象,包括姓名,性别,年龄,工资;使用模板字符串输出我叫**,性别**,年龄**,工资**

var userinfo = {
    name: '刘海',
    age: 26,
    sex: 1,
    Salary: 6000
};
console.log(`
我叫 ${userinfo.name}
年龄 ${userinfo.age}
性别 ${userinfo.sex == 1 ? '男' : '女'}
工资 ${userinfo.Salary}`);