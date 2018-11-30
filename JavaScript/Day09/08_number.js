var num1 = 1;
console.log(num1);
console.log(typeof (num1));
//内置构造函数
var num2 = new Number('3a');
console.log(num2);
console.log(typeof (num2));
//Number将布尔型的值转为1或者0
console.log(Number(false));
//parseInt将布尔型的值转为NaN
console.log(parseInt(true));

//console.log(Number.MAX_VALUE);
//console.log(Number.MIN_VALUE);
//var a = 1.7976931348623157e+309;
//console.log(a);

console.log((3.14 * 2 * 2.5).toFixed(2));