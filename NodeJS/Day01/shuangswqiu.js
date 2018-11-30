//循环产生1-33
var arr = [];
for (var i = 1; i <= 33; i++){
    arr.push(i);
}
//创建一个新数组
var newArr = new Array();
for (var i = 0; i < 6; i++){
    //获取arr数组下标 num
    var num = Math.floor(Math.random() * arr.length);
    //往newArray添加arr下标为num的元素
    newArr.push(arr[num]);
    //删除arr数组里下标为num的元素
    arr.splice(num, 1);
}
//获取1-16里的随机数字,向上取整,避免出现0的情况
newArr = newArr.sort((a, b) => a - b);
var blue = Math.ceil(Math.random() * 16);
//往newArr数组里添加blue
newArr.push(blue);
console.log(`本期中奖号码为:${newArr}
特殊号码为:${blue}`);

/*
//99乘法表
for (var i = 1; i <= 9; i++) {
    var str = '';
    for (var j = 1; j <= i; j++){
       str += i + '*' + j + '='+i*j+' ';
    }
    console.log(str);
}
*/