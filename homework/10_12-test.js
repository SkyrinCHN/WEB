//网页猜大小游戏
/*
var num = 15;
do {
    var test = prompt('please input number');
    test = parseInt(test);
    if (test > num) {
        alert('big');
    } else if (test < num) {
        alert('small');
    } else {
        alert('Game over');
    }

} while (num == test);
*/

//1-100的和
for (var i = 1, sum = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//9 9 乘法表
for (i = 1; i <= 9; i++) {
    str = '';
    for (var j = 1; j <= i; j++) {
        str += i + '*' + j + '=' + i * j + ' ';
    }
    console.log(str);
}
//1-100之间所有奇数的和
var i = 1;
var sum = 0;
while (i <= 100) {
    if (i % 2 == 1) {
        sum += i;
    }
    i += 1;
}
console.log(sum);
//打印1-100之间能被7整除的数
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

//计算1-50之间能被2整除的数的和
for (var sum = 0, i = 1; i <= 50; i += 1) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
//计算本世纪闰年,打印前10个闰年
for (var i = 2000, count = 0; i <= 2100; i++) {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
        console.log(i + '年是闰年');
        count += 1;
    }
    if (count == 10) {;
        break;
    }
}
// 1-100之间的和,大于4000结束循环,打印和的值和当前加到哪个数字
for (var i = 1, sum = 0; i <= 100; i++){
    sum += i;
    if (sum > 4000) {
        console.log(sum, i);
        break;
    }
}