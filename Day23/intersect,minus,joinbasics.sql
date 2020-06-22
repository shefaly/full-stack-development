show databases;

use classicmodels;

show tables;

select * from emp1;

select * from emp2;

/*Intersect returns only distinct rows of the queries 
Crurrent version of MySQL does not support for intersect operator
*/
select empname from emp1 intersect select empname from emp2;

/*Minus returns  the records which is not common in two queries */
select empname from emp1 minus select empname from emp2;

use Full_Stack_Development;

show tables;

create table stu1(
id int auto_increment,
Studentname varchar(50) not null,
emailid varchar(50) not null,
pwd varchar(20) not null,
phoneno bigint unique,age int not null,
Depid int,primary key(id)
);

create table studep(
Depid int auto_increment,
Deptname varchar(50) not null,
DeptLocation varchar(100) not null,
primary key(Depid)
);

insert into stu1(Studentname,emailid,pwd,phoneno,age,Depid)values
('shefaly','shefaly25@gmail.com','poijnh',9876767554,21,1),
('vishwanath','vishwa.0909@gmail.com','pohdbfjnh',9778767354,26,2),
('dhfgbdjk','gefhek5@gmail.com','poijdfgsnh',9806767554,30,3),
('praajna','praajna@gmail.com','poij[;,mnbnh',9876767954,21,4)

insert into studep(Deptname,DeptLocation)values
('CSE','HYD'),('ECE','AP'),('MECH','HP'),('B.COM','BGL')

/*Selecting lists Studentname,emailid,pwd,phoneno,age,Deptname,DeptLocation  */
select Studentname,emailid,pwd,phoneno,age,Deptname,DeptLocation from stu1,studep 
where stu1.Depid=studep.Depid;

/*now by giving alias names*/
select a.Studentname,a.emailid,a.pwd,a.phoneno,a.age,b.Deptname,b.DeptLocation from stu1 a,studep b
where a.Depid=b.Depid;

/*Select list :Studentname,emailid,pwd,phoneno,age,Deptname,DeptLocation
condition: age should be greater than 25
*/

select a.Studentname,a.emailid,a.pwd,a.phoneno,a.age,b.Deptname,b.DeptLocation from stu1 a,studep b
where a.Depid=b.Depid and a.age>25 and b.Depid=2;


select a.Studentname,a.emailid,a.pwd,a.phoneno,a.age,b.Deptname,b.DeptLocation from stu1 a,studep b
where a.Depid=b.Depid and a.Studentname like'd%' and a.Depid in(3);

select a.Studentname,a.emailid,a.pwd,a.phoneno,a.age,b.Deptname,b.DeptLocation from stu1 a,studep b
where a.Depid=b.Depid and a.Studentname like'd%' and a.Depid in(1,2,3,4);

use classicmodels;

show tables;

describe orderdetails;

describe orders;

select * from orders;
select * from customers;


select * from orderdetails;

/*
Select list: CustomerNumber,Status
*/
select a.customerNumber,b.status from customers a,orders b 
where a.customerNumber=b.customerNumber;


select a.customerNumber,b.status from customers a,orders b 
where a.customerNumber=b.customerNumber and b.status='Cancelled';

