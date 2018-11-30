var str1 = 'hello';
//查看值和数据类型
//console.log(str1);
//console.log(typeof (str1));
console.log(str1 + 123);

//使用内置构造函数,包装成对象
var str2 = new String('JavaScript');
console.log(str2 + 123);
//查看值和数据类型
console.log(str2);
console.log(typeof (str2));//object

//不加new ,不能包装成对象. 包不包装,用起来没差别
var str3 = String('Java');
console.log(str3);
console.log(typeof (str3));
//   \是转义字符   
console.log('hello \n world');//  \n 换行
console.log('It\'s a dog')//   \'输出字符串中加个'
console.log('1\t2');        // \t为tab键功能

//打印'Welcome comt to Chi\na'
console.log('Welcome to Chi\\na')