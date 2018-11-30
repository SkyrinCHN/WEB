/*
//2,数组 组合
var a = ['111', '222'];
var b = ['333', '444'];
var c = ['555', '666'];
console.log(a.concat(b, c));

//3,截取数组中的元素
var arr = ['科技', '体育', '汽车', '美容','模特','餐饮','旅游'];
//截取特定
console.log(arr.slice(2, 4));//截取2-3 两个
console.log(arr.slice(-3));//截取倒数三个
console.log(arr.slice(2));//没有结束下标,表示截取到最后

*/
/*
//4,删除(增加)数组中的元素
var arr = ['0', '1', '2', '3', '4', '5', '6'];
//arr.splice(2);//删除元素,从2开始到结束
console.log('start -->'+arr);
//console.log( arr.splice(2, 4));//从下边2开始,往后删除4个元素
//console.log(arr.splice(1, 2, 'add1'));//第三个'add1'为添加元素
//删除'2',在删除的位置添加新闻
//arr.splice(2, 1, '新闻');
console.log('now  -->' + arr);
*/

//5,翻转数组元素
//var arr = [1, 2, 3, 4, 5, 6];
//console.log(arr.reverse());

/*
//6,数组排序
var arr = [23, 6, 78, 9, 45];
//console.log(arr.sort());//默认是按照unicode码从小到大排序
console.log(arr.sort(function (a, b) { 
    return a - b;
 }));//运用回调函数,按照从小到大排序
 */
/*
 //7,数组的最后添加元素
var arr = ['推荐', '热点', '新闻'];
console.log(arr.push('汽车'));//返回数组的长度
console.log(arr);
//在数组最前边添加元素
console.log(arr.unshift('空姐'));//返回数组的长度
console.log(arr)
*/

//9,删除最后一个元素  pop()
//  删除第一个元素    shift()
 var arr = ['推荐', '热点', '新闻'];
console.log(arr.pop());//返回删除的元素值
console.log(arr);
console.log(arr.shift());//删除第一个元素,返回删除的数组值
console.log(arr);

