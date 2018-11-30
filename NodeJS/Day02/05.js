//(function (exports, require, module, __dirname, __filename) {
    //任意一个模块中,我们写的代码都默认被一个构造函数所包含
//console.log(__filename);//文件的完整路径和文件名称
//console.log(__dirname);//文件的完整路径(没有文件名称)
//当前模块中的变量,函数都属于是局部作用域下的,不能被外部使用,如果要被外部访问,就需要将它导出
      
var a = 1;
var b = 'hello';
module.exports.num = a;
module.exports.str = b;
console.log(exports === module.exports);
console.log(exports);//继承
console.log(module.exports);
//console.log(module.exports);  //要导出的内容--对象
  //})