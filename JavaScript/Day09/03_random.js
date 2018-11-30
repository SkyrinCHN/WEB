/*
//创建数组,保存10个人的姓名,随机取出4个人(放入新数组中,允许重复)
var arr = ['tom', 'jack', 'lusy', 'mary', 'john', 'toms', 'maerk', 'lusian', 'ani', 'wolf'];
var res = [];
for (var i = 0; i < 4; i++){
    var result = Math.random()*10;
    result = Math.floor(result);
    res.push(arr[result]);
}
console.log(res);
*/

//生成a-z
/*
for (var i = 97; i < 123; i++){
    result = String.fromCodePoint(i);
    arr.push(result);
}
*/

var arr = [];
var newArr = [];
//生成0-29
for (var i = 0; i < 30; i++){ arr.push(i); }
console.log(arr.length);
//随机抽取不重复的7个元素组成验证码
for (var i = 0; i < 7;i++){
    var num = Math.random() * arr.length;
    console.log(num);
    num = Math.floor(num);
    newArr.push(arr[num]);
    arr.splice(num, 1);
    //console.log(arr);
} console.log('抽取的数字为: '+newArr);
console.log('排序后为: '+newArr.sort(function (a, b){
    return a - b;
}));