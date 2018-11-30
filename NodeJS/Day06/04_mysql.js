//引入mysql第三方模块
const mysql = require('mysql');
//mysql -h127.0.0.1 -P3306 -uroot -p12345678
//使用Mysql模块进行连接,返回一个对象
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'tedu' //连接成功后要使用的数据库
});
//执行连接
connection.connect();
//执行sql语句 query() 两个参数, 第一个为要执行的sql语句,第二个为回调函数,获取执行结果
connection.query('select * from emp', (err, result) => {
    if (err) throw err;
    console.log(result);
});
//关闭连接
connection.end();