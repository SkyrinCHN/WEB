var str1 = 'hello';
//查看值和数据类型
//console.log(str1);
//console.log(typeof (str1));
console.log(str1 + 123);

//使用内置构造函数,包装成对象
var str2 = new String('JavaScript');
console.log(str2 + 123);
//查看值和数据类型
console.log(str2);
console.log(typeof (str2));//object

//不加new ,不能包装成对象. 包不包装,用起来没差别
var str3 = String('Java');
console.log(str3);
console.log(typeof (str3));
//   \是转义字符   
console.log('hello \n world');//  \n 换行
console.log('It\'s a dog')//   \'输出字符串中加个'
console.log('1\t2');        // \t为tab键功能

//打印'Welcome comt to Chi\na'
console.log('Welcome to Chi\\na')

/*
var str = 'I Love My Family';
//如果要调用字符串对象下的方法,无需包装成对象
//1,将英文字符转为大写
console.log(str.toUpperCase());
//2,将英文字符转为小写
console.log(str.toLowerCase());
*/


//练习: 初始化4个英文字符保存到变量中, 循环弹出提示框, 输入4个字符, 用输入的字符和初始化字符进行比较,如果输入正确,警示框弹出'login sucess',结束循环
/*
var login = 'aBcD';
for (var i = 1, input = '',count = 0; i = true; i++) {
    login = login.toLowerCase();
    input = prompt('please input check');
    input = input.toLowerCase();
    if (input != login) {
        count++;
        alert('you had '+count+' mistake');
    } else {
        alert('login success');
        break;
    }
}
*/

/*
var test = 'hello world';
console.log(test.length);// 获取字符串的长度
console.log(test.charAt(2));//获取字符串 下标对应的字符
//遍历字符串
for (var i = 0; i < test.length; i++){
    //将每一个字符转成unicode码,并打印
    console.log(test.charAt(i).charCodeAt());
}
for (var i in test) {
    console.log(i + '  -->  ' + test[i]);
}
*/

/*
var str = 'JavaScript';
console.log(str.indexOf('Script'));
//第一个参数查找的字符(串),从第2个开始的下标
console.log(str.indexOf('Script',3))
*/
/*
//检测一个字符串是否为合法的邮箱格式 @ 是打印true 不是打印false
function check(a) {
    if (a.indexOf("@") >= 0) {
        return true;
    }
    return false;
 }
console.log(check('123456'));
*/
/*
//截取字符串
var str = 'JavaScript is best language in the world';
console.log(str.length);
console.log(str.slice(4, 7));
console.log(str.slice(-2));
*/
//通过身份证号来截取出生年月日,打印结果为XXXX年xx月xx日
var Idcard = '50038119920614571X';
var year = Idcard.slice(6, 10);
var month = Idcard.slice(10, 12);
var day = Idcard.slice(12, 14);
//身份证倒数第二个字符表示性别:偶数为女,奇数是男
var sex = Idcard.slice(-2,-1);
if (sex % 2 == 0) {
    sex = '女'
} else{
    sex = '男'
}
console.log('我的出生年月日为:' + year + '年' + month + '月' + day + '日' + '性别:' + sex);
//截取邮箱的用户名和域名,通过'@'的下标
function getEmail(email) {
    var x = email.indexOf('@');
    var username = email.slice(0, x);
    var yuming = email.slice(x+1);
    console.log('用户名为:'+'  -->  '+username);
    console.log('域名为:'+'  -->  '+yuming);
}
getEmail('liuhai_14@163.com');

//将一个单词首字母大写,其余小写
var world = 'hello WORLD';
var big = world.slice(0,1);
var small = world.slice(1);
big = big.toUpperCase();
small = small.toLowerCase();
console.log(big + small);
 
//将数组转为字符串 -- 按照某个字符分割数组元素
var arr = ['a', 'b', 'c', 'd'];
console.log(arr.join('|'));
//将字符串转为数组 --按照某个字符分割字符串
var str = 'a|b|c';
console.log(str.split('|'));

//使用split分割邮箱成数组,获取用户名和域名
var email = 'liuhai_14@163.com';
var arr = email.split('@');
console.log(arr);
var user = arr[0];
var at = arr[1];
console.log('用户名:' + user + '域名为:' + at);

/*
//匹配模式:用于查找.替换字符串中的某些字符
var str = 'china是世界上人口最多的国家,China的面积是960万平方公里,CHINA的互联网高度发达,china有好多的程序员';
//替换china为中国,这样只能替换第一个,不能往后继续查找
console.log(str.replace('china', '中国'));
//使用匹配模式来查找china --正则表达式
//g --> global
//i --> ignore
console.log(str.replace(/china/gi, '中华'));
//match查找
console.log(str.match(/china/gi));
//search查找 返回第一次找到的下标,找不到返回-1
console.log(str.search(/china/i));
*/

//将一句英文字符串中的单词首字母转为大写,其余字符转为小写.
var homework = 'what can i do ? en when i was 15 years old,  i sad i love you ,but it\'s dasn\'t metter , we are marryed now , you are my wife, and we have a children now';
var res = homework.split(' ');
for (var i = 0; i < res.length; i++){
    a = res[i].slice(0, 1).toUpperCase()
    b = res[i].slice(1).toLowerCase();
    res[i] = a + b;
}console.log(res.join(' '));
