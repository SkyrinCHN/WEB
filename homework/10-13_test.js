/*
//1 - 100 之间的奇数
var sum = 0;
for (var i = 1; i <= 99; i++){
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log(sum);

// 1- 1/2 + 1/3- 1/4 +1/5 -1/6 +1/7
var sum_js = 0;
var sum_ou = 0;
var sum = 0;
for (var i = 2; i <= 100; i++){
    if (i % 2 == 0) {
        sum_ou += 1/i;
    } else{
        sum_js += 1/i;
    }
}
sum = 1 - sum_ou + sum_js;
console.log(sum);

//打印水仙花数 如153=1*1*1+5*5*5+3*3*3; 100-999之间
for (var i = 100; i <= 999; i++){
    var h = parseInt(i / 100);
    var s = parseInt((i / 10) % 10);
    var g = parseInt(i % 10);
    if (i == g * g * g + s * s * s + h * h * h) {
        console.log(i);
    }
}
*/
//用户输入一个N,计算出该值的阶乘
var num = parseInt(prompt('please input number'));
for (var i = 1, sum = 0; i <= num; i++){
  sum += i;
}
alert(sum);
for (var i = 1; i <= 6; i++) {
  var a = "";
  var b = "";
  for (var j = 1; j <= 10 - i; j++) {
    a += " ";
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    b += "*";
  }
  console.log(a + b);
}
/*
      *
     *  *
    *    * 
   *      *
  *        *
  **********
*/
for (var i = 1; i <= 6; i++) {
  var a_j = "";
  var a_k = "";
  for (var j = 1; j <= 6 - i; j++) {
    a_j += " ";
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    if (i == 6) {
      a_k+='*'
    } else if (k == 1 || k == 2 * i - 1) {
      a_k += "*";
    } else {
      a_k += " ";
    }
  }
  console.log(a_j + a_k);
}
