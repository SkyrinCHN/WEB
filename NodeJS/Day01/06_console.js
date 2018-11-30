/*
global.console.log(123);
global.console.info(123);
global.console.error(123);
global.console.warn(123);
*/
//计算for循环的耗时
global.console.time('for循环');//计时开始
for (let i = 0; i <= 100000; i++){
    
}
global.console.timeEnd('for循环');//计时结束

var i = 0;
global.console.time('while循环');
while (i<=100000) {
    i++;
}
global.console.timeEnd('while循环')

var a = 0;
global.console.time('dowhile循环');
do {
    a++;
} while (a <= 100000)
global.console.timeEnd('dowhile循环');