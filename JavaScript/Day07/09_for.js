/*
var city = ['北京', '上海', '广州', '深圳', '重庆', '成都', '郑州', '武汉', '济南'];
city[city.length] = '长沙';
//写法一
for (var i in city) {
    console.log(i + '  -->  ' + city[i]);
}
//写法二
for (var k = 0; k < city.length;k++) {
    console.log(k + '  -->  ' + city[k]);
}
*/
/*
var piano = ['推荐', '热点', '娱乐', '科技', '汽车', '体育', '军事', '国际', '时尚', '游戏']
for (var i in piano) {
    console.log(i + '  -->  '+piano[i])
}
for (var k = 0; k < piano.length; k++){
    console.log(k + '  -->  '+piano[k])
}
*/
/*
//创建数组,保存所有员工的工资,求所有员工工资的总和,平均工资
var emp = [1000, 2000, 2500, 2600, 3000, 3500, 5000, 8000, 4500, 15000,12500];
for (var i = 0,sum = 0,avg = 0; i < emp.length; i++){
    sum += emp[i];
    avg = sum /emp.length
}
console.log(sum, avg);
*/
/*
//创建函数getIndex,传递两个参数(数组,字符串),返回字符串在数组中的下标
function getIndex(arr, value) {
    //查找value在arr里边的下标
    //遍历数组中的所有元素 arr ,和value进行比较,如果找到了,就返回下标
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return {
                a: i,
                b:value
            } 
        } 
    }
}
var x = getIndex(['北京', '上海', '广州', '南京', '武汉'], '北京').a;
var y = getIndex(['北京', '上海', '广州', '南京', '武汉'], '北京').b;
console.log(x);
if (x>= 0) {
    console.log(y+'的下标为:'+x)
} else {
    console.log('没有找到')
}

//创建数组,包含多个姓名(有重复的),获取tom在数组中出现的次数
var emp = ['tom', 'tom', 'tom','jack', 'james', 'mary'];
for (var i = 0, count = 0; i < emp.length;i++) {
    if (emp[i] == 'tom') {
        count++;
    }
}
console.log(count);
*/

/*
//创建数组,包含一组数字,获取数组中的最大值
var group = [10, 20, 30, 40, 600];
var max = group[0];
//用max和数组中的没一个数进行比较,
//如果max小于任意一个元素, 就把这个元素存到max里, 当最大值
for (var i = 0; i < group.length;i++){
    if (max < group[i]) {
        max = group[i];
    }
}
console.log(max);

var arr = ['tom', 'jerry', 'king'];
//将数组转化为字符串
var res = arr.toString();
console.log(res);
var res1 = arr.join('-->')
console.log(res1);
*/
/*
function check(arr, value) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == value) {
            return i;
        }
    }
}
var res = check(['123', 'abc', 'cde'], 'cde');
console.log(res);
*/

//创建数组,包含一组数字,获取数组中的最大值
//用max和数组中的每一个数进行比较,
var emp = [1, 2, 5, 8, 62, 4, 71,52,81];
var max = emp[0];
for (var i = 1; i < emp.length; i++){
        if (max < emp[i]) {
            max = emp[i];
        }
}
console.log(max);


function again(arr, name) {
    for (var i = 0,count = 0; i < arr.length; i++){
        if (arr[i] == name) {
            count++;
        }
    }
    console.log(count);
}
again(['jack', 'tom', 'janme', 'bulant', 'tom', 'tom'], 'jack');

function xia(arr, value) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == value) {
            return i;
        }
    }
}
var result = xia([123, 456, 789], 456);
console.log(result);