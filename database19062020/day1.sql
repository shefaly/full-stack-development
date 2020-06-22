create database Full_Stack_Development;

show databases; /* to list the database in my sql server*/

use Full_Stack_Development;/* to select a particular data base*/

/*create The table*/
create table tbl_student(
studentid int,
studentName varchar(100),
studentPwd varchar(20),
emailid varchar(100),
MobileNumber bigint
);

/* describe the table*/
describe tbl_student;

insert into tbl_student(studentid ,studentName ,studentPwd ,emailid ,MobileNumber )
values(1,'shefaly','vishtish','shefalykasam@yahoo.com',9087622345)
select*from tbl_student;
 /*with only two columns of the table*/
 /*only two columns*/
 select studentName,studentPwd from tbl_student;
 
 create table emp(
 Id int auto_increment,
 empname varchar(100) not null,
 empaddress varchar(100) not null,
 emailid varchar(100) not null,
 mobilenumber bigint unique,
 primary key(Id)
 );
 
insert into emp(empname,empaddress,emailid,mobilenumber)
values('shefaly','hyderabad','shefaly@gmail.com',7890989009)
insert into emp(empname,empaddress,emailid,mobilenumber)
values('rama','hyderabad','shefaly@gmail.com',7890989089),
('uma','shimla','umarao@yahoo.com',1122334432)
select * from emp;
 /*update data*/
  update emp set
 emp name='shefaly kasam'
 /*update single record whicgh matches the id=1 */
 update emp set
 empname='shefaly kasam'
 where Id = 1
 /*delete the whole table*/
 delete from emp;
 /*delete only specific record*/
 delete from emp where id=8;
 select * from emp;

/*order by clause*/
/* Sorted order*/
select * from emp
order by empname;
/*Result in descending order*/
select * from emp
order by empname desc;
/*To list all the tables*/
show tables;
use classicmodels;
show tables;
describe customers;