/*
//截取邮箱的用户名和域名,通过'@'的下标 slice
function pickEmail(email) {
    var pick = email.indexOf("@");
    console.log('用户名为:'+email.slice(0, pick)) ;
    console.log('域名为:'+email.slice(pick + 1));
}
pickEmail('liuhai_14@163.com');

//将数组转为字符串 join -- 按照某个字符分割数组元素
var arr = ['one', 'two', 'three', 'four'];
var str = arr.join('-');
console.log(str);
console.log(typeof (str));
//将字符串转为数组 split --按照某个字符分割字符串
var str = 'we are family';
var arr = str.split(' ');
console.log(arr);

//使用split分割邮箱成数组,获取用户名和域名
var email = 'liuhai_14@icloud.com';
var arr = email.split('@');
var username = arr[0];
var domain = arr[1];
console.log('用户名为:' + username + '域名为:' + domain);

*/
//将字符串中每一个单词首字母大写,其余字母小写
var str = 'hello my name is jack';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
}
console.log(arr.join(' '));
 

//切字符串到数组 按照什么切割用 split(''), 把字符串切成几个单词的数组,切邮箱的前后端以@为标志切
//切数组用slice,会生成一个新数组 ,不会改变原数组.

var str = 'liuhai_14@163.com';
var arr = str.split('@');
console.log(arr[0]);
console.log(arr[1]);

var str = 'we are falimy';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++){
    arr[i]  = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
}
console.log(arr.join(' '));


var arr = [1, 4, 2, 6, 8, 24, 22, 9, 67,52];
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length-i; j++){
        if (arr[j] < arr[j+1]) {
            var change = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = change;
        }
    }
} console.log(arr);