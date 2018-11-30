//引入fs模块
const fs = require('fs');
/*
//创建目录
fs.mkdir('./testDir', (err) => {
    //如果有错,抛出错误
    if (err) throw err;
    //不然,打印成功
    console.log('create success');
});

//运用fs.mkdirSync 创建testDir1
fs.mkdirSync('./testDir1')

//2,删除目录
//运用fs.rmdir   fs.rmdirSync 删除文件夹
fs.rmdir('./testDir', (err) => {
    if (err) throw err;
    console.log('remove success');
})
fs.rmdirSync('./testDir1')
console.log('Over');

//3,读取目录
var arr = fs.readdir('./1', (err, files) => {
    if (err) throw err;
    console.log(files);
})
for (var i = 0; i < arr.length; i++){
    
}
fs.readdirSync('./1')


//读取文件
fs.readFile('./Untitled-1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

/*
创建文件 OR 写入文件
参数1: 写入的文件路径
参数2: 要写入的数据
参数3: 回调函数
结果:先清空,然后在写入;如果文件不存在,则会创建文件

fs.writeFile('./test.txt', '这是测试写入数据功能',(err) => {console.log('写入成功')});

//判断文件是否存在
var res = fs.existsSync('./test.txt');
console.log(res);

//查看当前目录是否有1.txt 如果不存在,创建该文件,并写入hello
var res = fs.existsSync('./1.txt');
if (res == false) {
    fs.writeFile('./1.txt', 'hello', (err) => {
        console.log('写入成功')
    })
}

//4 写入文件(没有文件就创建,有了就追加写入)
fs.appendFile('./1.txt', 'world\n', (err) => {
    if (err) throw err;
    console.log('追加写入成功');
})

//把一个员工对象写入到一个data.txt文档中
var person = {
    eid: 2,
    enmae: 'tom',
    sex: 1,
    salary : 8000
}
//遍历对象
for (var i in person){
    fs.appendFileSync('data.txt', person[i]+' ');
}
//每次写完一个员工数据,加换行;这样第二个员工是新的一行,不然乱成一团
fs.appendFileSync('./data.txt', '\n');
//读取文件
fs.readFile('data.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

//5.删除文件
fs.unlink('./data.txt', (err) => {
    if (err) throw err;
    console.log('删除成功');
})
fs.unlinkSync('./test.txt')
*/