//在程序执行前,函数创建也会提升到最前边
//如果两个函数的名称相同,后边创建的函数会覆盖前边的函数
//调用在前
fn();
//创建在后
function fn() {
    console.log(1);
}
fn();
function fn() {
    console.log(2);
}
