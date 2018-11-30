#设置客户端语言
SET NAMES UTF8;
#放弃数据库(如果存在)tedu
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu
CREATE DATABASE tedu CHARSET=UTF8;
#进入数据库
USE tedu;
#创建部门表
CREATE TABLE dept(
  did TINYINT PRIMARY KEY,
  dname VARCHAR(16) UNIQUE
);
#插入数据
INSERT INTO dept VALUES(10,'研发部');
INSERT INTO dept VALUES(20,'市场部');
INSERT INTO dept VALUES(30,'运营部');
INSERT INTO dept VALUES(40,'测试部');
#创建员工表
CREATE TABLE emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(8),
  sex BOOL,
  birthday DATE,
  salary DECIMAL(7,2),
  deptId TINYINT,
  FOREIGN KEY(deptId) REFERENCES dept(did)
);
#插入数据
INSERT INTO emp VALUES(NULL,'Tom',1,'1990-5-5',6000,20);
INSERT INTO emp VALUES(NULL,'Jerry',0,'1991-8-20',7000,10);
INSERT INTO emp VALUES(NULL,'David',1,'1995-10-20',3000,30);
INSERT INTO emp VALUES(NULL,'Maria',0,'1992-3-20',5000,10);
INSERT INTO emp VALUES(NULL,'Leo',1,'1993-12-3',8000,20);
INSERT INTO emp VALUES(NULL,'Black',1,'1991-1-3',4000,10);
INSERT INTO emp VALUES(NULL,'Peter',1,'1990-12-3',10000,10);
INSERT INTO emp VALUES(NULL,'Franc',1,'1994-12-3',6000,30);
INSERT INTO emp VALUES(NULL,'Tacy',1,'1991-12-3',9000,10);
INSERT INTO emp VALUES(NULL,'Lucy',0,'1995-12-3',10000,20);
INSERT INTO emp VALUES(NULL,'Jone',1,'1993-12-3',8000,30);
INSERT INTO emp VALUES(NULL,'Lily',0,'1992-12-3',12000,10);
INSERT INTO emp VALUES(NULL,'Lisa',0,'1989-12-3',8000,10);
INSERT INTO emp VALUES(NULL,'King',1,'1988-12-3',10000,10);
INSERT INTO emp VALUES(NULL,'Brown',1,'1993-12-3',22000,NULL);

#示例:查询所有员工的姓名,工资,生日
SELECT ename, salary,birthday from emp;
#联系:查询所有员工的编号,姓名,性别,生日,工资
select  eid 编号,ename 姓名,sex 性别,birthday 生日,salary 工资 from emp;
#4,简单查询  只显示不同的记录/合并相同的记录
#示例:查询员工都在哪些部门
select distinct deptid from emp;
#练习:查询出所有员工的姓名和年薪
select ename 姓名,salary * 12 年薪 from emp;
#练习:假设每个员工的工资增加500块,年终奖是5000块,现在计算年薪是多少
select ename 姓名,(salary + 500) * 12 + 5000 from emp;
#示例:查询所有员工信息,按照工资升序(降序)排列
select * from emp  order by salary desc;
#练习:查询员工姓名,性别信息,按照工资高低进行排列
select ename 姓名,sex 性别,salary 工资 from emp order by salary desc;
#练习:查询所有的员工信息,结果按照工资的降序排列,如果工资相同,按照姓名升序排列
select * from emp order by salary desc,ename asc;
#练习:查询所有员工信息,女员工在男员工前边,如果性别相同,按照年龄降序排列
select * from emp order by sex asc,birthday asc;
#示例: 查询员工编号为5的员工所有信息
select * from emp where eid = 5;
#练习:查询出姓名为KING的员工的编号.工资,生日
select eid 员工编号, ename 姓名,salary 工资, birthday 生日 from emp 
where ename ='king';
#练习:查询出20号部门下所有员工的信息
select * from emp where deptid = 20;
#示例:查询出工资大于等于5000的员工所有信息
select * from emp where salary >=5000;
#练习:查询出1991-1-1之后出生的员工所有信息
select * from emp where birthday >'1991-1-1';
#练习:查询出不在10号部门的所有员工信息
select * from emp where deptid != 10;
select * from emp where deptid not in(10);
#练习:查询暂时没有部门的员工信息
select * from emp where deptid is null;
#练习:查询出有明确部门的员工信息
select * from emp where deptid is not null;
#练习:查询出工资大于6000的女员工所有信息
select * from emp where salary >=6000 and sex = 0;
#练习:查询出工资在5000-5999之间的员工信息
select * from emp where salary between 5000 and 5999;
#练习:查询出工资小于4000和大于8000的员工信息
select * from emp where salary < 4000 or salary > 8000;
select * from emp where salary not between 4000 and 8000;
#练习:查询出在1991年出生的员工信息
select * from emp where birthday like '1991-%-%';
select * from emp where birthday between '1991-1-1' and '1991-12-31';
select * from emp where birthday > '1991-1-1' and birthday < '1991-12-31';
#练习:查询出在1990年之前和1993年之后出生的员工信息
select * from emp where birthday < '1990-1-1' or birthday > '1993-12-31';
select * from emp where birthday not between '1990-1-1' and '1993-12-31';
#练习:查询出在10和30号部门的员工信息
select * from emp where deptid in (10,30);
select * from emp where deptid = 10 or deptid=30;
#练习:查询出不在10和30号部门的员工信息;
select * from emp where deptid not in(10,30);
select * from emp where deptid !=10 and deptid !=30;
#查询出所有姓名里边还有E的员工所有信息
select * from emp where ename like '%e%';
#查询出所有员工中姓名以E结尾的员工信息
select * from emp where ename like '%e';
#查询出姓名中倒数第二个字符是E的员工信息
select * from emp where ename like '_e%';




