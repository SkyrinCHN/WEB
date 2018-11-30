function fn(){
    console.log(1);
}
function fnc() {
    //myfnc()是在函数内部创建的函数
    //局部作用域下的函数 只能在函数内部调用
    function myfnc() {
        console.log(2);
    }
    //myfnc()只能在所在的作用域调用
    myfnc();
}
fn();
fnc();
