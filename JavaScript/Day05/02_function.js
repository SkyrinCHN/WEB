/*
console.log('hello');
console.log('world');
console.log('hello,JavaScript')
//不同位置要多次执行3行代码

//创建函数
func
//调用函数
print();
*/
function tset1() {
    var a = 10, b = 20, sum = a + b;
    console.log(sum);
}
tset1();
tset1();
tset1();

function test2(n) {
    for (var i = 1, sum = 0; i <= n; i++) { sum += i; }
    console.log(sum)
    //return (n);
}
test2(50);
test2(30);
test2(100);