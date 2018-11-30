//使用连接池来连接Mysql
const mysql = require('mysql');
//创建连接池对象
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'tedu',
    connectionLimit: 20 //设置连接池中的数量
});
//执行sql语句
/** 
pool.query('select * from emp', (err, result) => {
    if (err) throw err;
    console.log(result);
});*/
/*
//删除员工编号为5的信息,查看执行结果
//返回一个删除成功的对象
pool.query('delete from emp where eid = 5', (err, result) => {
    if (err) throw err;
    console.log(result);
})


//插入一条员工记录
pool.query(`insert into emp values(null,'henry','1',now(),'5000',10 )`, (err, result) => {
    if (err) throw err;
    console.log(result);
});

//?占位符,防止sql注入
pool.query(`insert into emp values (?,?,?,?,?,?)`,
    [null, 'henrry', 0, '1998-9-8', 8600, 30],
    (err, result) => {
    if (err) throw err;
    console.log(result);
    });

//更改一个员工编号为7的工资为7000
pool.query('update emp set salary= ? where eid = ?',[9999,7], (err, result) => {
    if (err) throw err;
    console.log(result);
});

//使用对象形式数据  直接插入
var emp = {
    eid: null,
    ename: 'chen',
    sex: 0,
    birthday: '1985-8-1',
    salary: 9900,
    deptid: 20
};
pool.query(`insert into emp set ? `, [emp], (err, result) => {
    if (err) throw err;
    console.log(result);
});
*/

