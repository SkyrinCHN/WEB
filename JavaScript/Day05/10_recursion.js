//递归:在函数内部调用自身
var i = 0;
function say() {
    i++;
    alert('lang lang ago');
    //如果i为3的时候,终止函数执行(return)
    if (i == 3) {
        return
    }
    say();
}
say();