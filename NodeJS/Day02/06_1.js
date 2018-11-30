/*
var name = 'Tom',
    sex = '男',
    age = 28;
function say() {
    console.log(`我叫${name},今年${age}岁了`)
  }
module.exports.name = name;
//如果要导出一个函数,其实就是导出函数的地址
module.exports.say = say;
module.exports.age = age;
module.exports.sex = sex;
*/
var person = {
    name: 'jack',
    age: 20,
    sex: '男',
    info: function(){
        console.log(`我叫${this.name}
        性别${this.sex}
        年龄${this.age}岁`)
    }
}
module.exports.person = person;