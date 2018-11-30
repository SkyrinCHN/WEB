//课后练习
//使用遍历数组, 翻转数组中的元素
//[1, 2, 3, 4]-- > [4, 3, 2, 1]
//了解冒泡排序,将数组中元素由大到小排序
//[1,2,3,4,5]-->[5,4,3,2,1]

/*
var emp = ['a', 'b', 'c', 'adw'];
var res = emp.reverse();
console.log(res);

var grop = [1, 3, 5, 7, 9, 452];
function fn(a, b) {
    return b - a ;
}
console.log(grop.sort(fn));
*/

//冒泡排序
var emp = [1, 3, 2, 5, 4, 9, 15, 28, 31];
var change;
for (var i = 1; i < emp.length; i++){
    for (var j = 0; j < emp.length - i; j++){
        if (emp[j] > emp[j+1]) {
            change = emp[j];
            emp[j] = emp[j + 1];
            emp[j + 1] = change;
        }
    }
}
console.log(emp);

//数组翻转
/*
var group = [1, 5, 9, 2, 4, 7];
var result = [];
for (var i = 0; i < group.length;i++){
    result[i] = group[group.length -i-1];
}
console.log(result);
*/


var str = [1, 5, 9, 8, 2,];
var str1 = [];
for (var i = 0; i < str.length; i++){
    str1[i] = str[str.length - i -1];
}
console.log(str1);