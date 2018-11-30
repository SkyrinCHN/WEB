/*
从0-29之间随机抽取7个不重复的元素组成一个新的数组
并对数组进行从小到大排序
*/
var testArr = [], arr = [];
for (var i = 0; i < 30; i++) { testArr.push(i);}
for (var i = 0; i < 7; i++) {
        var num = Math.floor(Math.random() * testArr.length);
        arr.push(testArr[num]);
        testArr.splice(num, 1);
}console.log(arr.sort(function (a, b) {return  - b;}))

