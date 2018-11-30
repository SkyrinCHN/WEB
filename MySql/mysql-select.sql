	1,简单查询 只查询特定的列
	示例:查询所有员工的姓名,工资,生日
	Select ename,salary,birthday from emp;
	联系:查询所有员工的编号,姓名,性别,生日,工资
	select eid,ename,sex,birthday,salary from emp;

	2,简单查询—查询所有的列
	Select *from emp; 
	*代表所有的列

	3,给列取别名
	示例:查询所有员工的姓名和工资,使用汉字的别名显示
	Select ename 姓名,salary 工资 from emp;
	练习:查询所有员工的编号,姓名,性别,所在部门,生日 给列起中文别名
Select eid 员工编号,ename 姓名, sex 性别, deptid 所在部门, birthday 生日 
from emp;
4,简单查询  只显示不同的记录/合并相同的记录
示例:查询员工都在哪些部门
Select distinct deptid 部门名称 from emp;
练习:查看工资都有哪些档位
Select distinct salary 工资,from emp;
5简单查询  在查询时执行计算
示例:2*3/4*7/0.5
Select 2*3/4*7/0.5;
练习:查询出所有员工的姓名和年薪
Select ename 员工姓名 ,salary * 12  年薪  from emp;	
练习:假设每个员工的工资增加500块,年终奖是5000块,现在计算年薪是多少
Select ename 姓名,(salary+500) *12+5000 年薪 from emp;
6.对查询结果进行排序
示例:查询所有员工信息,按照工资升序(降序)排列
Select * from emp order by salary asc/desc;	
练习:查询员工姓名,性别信息,按照工资高低进行排列
Select ename 姓名,sex 性别,salary 工资 from emp order by salary desc;	
练习:查询所有的员工信息,把结果按照年龄由大到小排序
Select * from emp order by birthday;	
练习:查询所有的员工信息,结果按照姓名升序排序;
Select * from emp order by ename;
练习:查询所有的员工信息,结果按照工资的降序排列,如果工资相同,按照姓名升序排列
Select * from emp order by salary desc,ename asc;
练习:查询所有员工信息,女员工在男员工前边,如果性别相同,按照年龄降序排列
Select * from emp order by sex asc,birthday asc;
7简单查询 条件查询
示例: 查询员工编号为5的员工所有信息
Select * from emp where eid =5;
练习:查询出姓名为KING的员工的编号.工资,生日
Select eid 员工编号,salary 工资,birthday 生日 from emp where ename= ‘king’;
练习:查询出20号部门下所有员工的信息
Select * from emp where deptid=20;
练习:查询出所有的男员工信息
Select * from emp where sex = 1;
示例:查询出工资大于等于5000的员工所有信息
Select * from emp where salary >= 5000;
比较运算符: >  <  >=  <=  !=
练习:查询出1991-1-1之后出生的员工所有信息
Select * from emp where birthday > ‘1991-1-1’;
练习:查询出不在10号部门的所有员工信息
Select * from emp where deptid != 10;
练习:查询暂时没有部门的员工信息
Select * from emp where deptid is null;
练习:查询出有明确部门的员工信息
Select * from emp where deptid is not null;
注意: NULL和任何值不能进行相等/不想等的判定,只能使用 is null/is not null.
练习:查询出工资大于6000的女员工所有信息
Select * from emp where salary > 6000 and sex = 0;
练习:查询出工资在5000-5999之间的员工信息
Select * from emp where salary>=5000 and salary<6000;
Select * from emp where salary between 5000 and 5999;
练习:查询出工资小于4000和大于8000的员工信息
Select * from emp where salary not between 4000 and 8000;
Select * from emp where salary<4000 or salary>8000;
练习:查询出在1991年出生的员工信息
Select * from emp where birthday like ‘1991-%-%’;
Select * from emp where birthday between ‘1991-1-1’and ‘1991-12-31’;
Select * from emp where birthday>'1991-1-1'  and birthday<'1991-12-31';
练习:查询出在1990年之前和1993年之后出生的员工信息
Select * from emp where birthday<'1990-1-1' or birthday>'1993-12-31';
Select * from emp where birthday not between '1990-1-1' and '1993-12-31';
练习:查询出在10和30号部门的员工信息
Select * from emp where deptid in (10,30);
Select * from emp where deptid = 10 or deptid=30;	
练习:查询出不在10和30号部门的员工信息;
Select * from emp where deptid not in (10,30);
Select * from emp where deptid!=10 and deptid !=30;
IS NULL / IS NOT NULL
AND / OR
BETWEEN..AND… / NOT BETWEEN… AND …
IN() / NOT IN()
#简单查询 模糊查询
#查询出所有姓名里边还有E的员工所有信息
Select * from emp where ename like '%e%';	
#查询出所有员工中姓名以E结尾的员工信息
Select * from emp where ename like '%e';
#查询出姓名中倒数第二个字符是E的员工信息
Select * from emp where ename like '%e_';
#查询出姓名中第二个字母是E的员工信息	
Select * from emp where ename like '_e%';
#注意:以上两个匹配符不能和=使用,必须使用LIKE关键字
#练习:假设每页显示5条记录,查询第二页,第三页
Select * from emp limit 5,5;
select * from emp limit 10,5;
#		通过部门编号计算员工数量
select count(deptid) from emp;
#查询出所有员工的工资总和
select sum(salary) from emp;
#查询出男员工的平均工资是多少
select avg(salary) from emp where sex = 1;
select sum(salary) / count(*) from emp where sex =1;
#查询出编号为10的部门的最高工资和最低工资的人员信息
select max(salary),min(salary) from emp where deptid = 10;
#查询出每个部门的员工数量
select deptid 部门名称 ,count(*) from emp group by deptid;
#		练习:查询出每个部门的平均工资,最大工资,最小工资
select deptid 部门名称,avg(salary) 平均工资 from emp group by deptid;
#练习:查询出男员工和女员工的人数分别是多少
select sex 性别,count(*) from emp group by sex;
#示例:查询出’研发部’所有员工的信息
select * from emp where deptid 
= (select did from dept where dname = '研发部' );
#练习:比TOM工资高的员工信息(升降序排列)
select * from emp where salary > 
(select salary from emp where ename='tom') order by salary desc;
#练习:查询低于平均工资的所有员工信息
select * from emp where salary < (select avg(salary) from emp);
#	练习:查询出和TOM同一年出生的员工所有信息
select * from emp where year(birthday)=
(select year(birthday) from emp where ename = 'tom');
#示例:查询出所有的员工及其所在部门名称
select ename 员工姓名, did 部门名称 from emp , dept 
where deptid = did ;
select ename 员工姓名, did 部门名称 from emp inner join dept
on deptid = did;
select ename 员工姓名, did 部门名称 from emp left join dept 
on deptid = did;
select ename 员工姓名, did 部门名称 from emp right join dept
on deptid = did;
(select ename , did from emp left join dept on deptid = did)
union
(select ename , did from emp right join dept on deptid = did);
