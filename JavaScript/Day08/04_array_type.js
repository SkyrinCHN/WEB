var arr = ['a', 'b', 'c', 'd'];
var arr1 = arr;
arr.push('tom');
arr1[0] = 'tom';
console.log(arr1);
console.log(arr);