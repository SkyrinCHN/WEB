var person={
    name: '刘海',
    age: '26',
    introduce: function() {  
        console.log('我叫'+this.name+'  今年'+this.age+'岁了')
    }
}
person.introduce();
/*
//创建圆(circle)对象,含有属性圆周率PI,半径r,含有方法计算面积(getArea).计算周长(getLength)
var circle = {
    PI: 3.14,
    r: 2.5,
    getArea: function(){
        var area = this.PI * this.r *this.r
        return area;
    },
    getLength: function () { 
        var length =this. PI * 2 * this.r;
        return length;
     }
}
var area = circle.getArea();
console.log(area);
var length = circle.getLength();
console.log(length);
*/
var person = {
    name: 'tom',
    age:22
}
//把person对象的地址复制一份给person2
//person和person2指向的是同一个对象
var person2 = person;
person.name = 'jack';
//通过person改变name的值,person2对应的name的值也发生了改变
console.log(person2.name);//jack

//练:通过person2改变对象的age属性,查看person.age是否也发生了变化
person2.age = 25;
console.log(person.age);//25
