/*Views*/

use classicmodels;
select * from customers;
create table sample(
name varchar(100),
age int not null,
job varchar(50) not null
);
insert into sample(name,age,job)
values('maha',25,'manager'),('lakshmi',34,'receptionist'),
('vani',28,'CA');
select * from sample;
select customerNumber,customername,phone,city,state,country,creditlimit from customers;

/*Create view*/

create view getcustomerdata
as
select customerNumber,customername,phone,city,state,country,creditlimit from customers;

/*to execute view*/
select * from getcustomerdata;

/*Only few columns from view*/
select customernumber,customername,phone from getcustomerdata;

insert into getcustomerdata(customernumber,customername,phone,state,country,creditlimit)values
(1234,'Shef','9087677654','Hyd','75','India',1234.0);

select * from customers where customerNumber=103;

select * from customers;

select * from orders;

/*complex view*/
create view getcustomerorderdata
as
select a.customername,a.phone,a.addressline1,b.orderdate,b.status
from customers a,orders b
where a.customernumber=b.customernumber;

select * from getcustomerorderdata;

/*rename view*/
rename table getcustomerorderdata
to customer_order;

/*to view all the views*/
SHOW FULL TABLES IN classicmodels WHERE TABLE_TYPE LIKE 'VIEW';

/*table rename*/

rename table emp1 to emp;

describe emp;
/*table alter*/

alter table emp
add column gender varchar(10) not null

describe emp;

alter table emp
add column age int,
add column address varchar(300)

/*delete existing column*/
alter table emp
drop age;

/*rename column*/
alter table emp rename 
column empdesg to Designation;

/*drop tables
drop table <table_name>;
*/
drop table emp;

/*truncate
truncate <table_name>;
*/
truncate sample;