set names UTF8;
drop database if exists students_file;
create database students_file;
use students_file;

create table students_basic(
	id int 	primary key  auto_increment,
    sname varchar(20) not null,
    ssex		varchar(5),
    age		int,
    education varchar(10),
    university		varchar(30),
    specialty		varchar(20),
    workex			varchar(10),
    phone			varchar(20),
    qq				varchar(20),
    address			varchar(50),
    contact			varchar(20),
    contact_phone		varchar(20)
)