const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.listen(3000);
var emp;
//托管静态文件
app.use(express.static('./public'));

//设置连接池
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'tedu',
    connectionLimit: 20
});
//使用bodyParser中间件
app.use(bodyParser.urlencoded({
    extended: false //使用nodejs自带的查询字符串模块
}));
/*  
注册
得到数据,插入数据库
*/

app.post('/add', (req, res) => {
    emp = req.body;
    pool.query(`insert into dept set ?`, [emp], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.affectedRows > 0) {
            res.send('注册成功');
        } else {
            res.send('注册失败');
        }
    })
});

