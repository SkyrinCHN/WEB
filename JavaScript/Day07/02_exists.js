var person = {
    name : 'James Blant',
    age : 45,
    sex :'男'
};
console.log(person);
//检测对象中是否含有某个属性
console.log('name' in person);
console.log(person.hasOwnProperty('age'));
//检测是否含birthday属性
console.log('birthday' in person);
console.log(person.hasOwnProperty('birthday'));
//打印不存在的属性,结果是Undefined
console.log(person.salary);
//使用获取的属性值和Undefined进行比较
console.log(person.name === undefined);//false 属性存在  true 属性不存在 
