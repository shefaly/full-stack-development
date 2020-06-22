show databases;
use classicmodels;
show tables;

describe customers;
select * from customers;
/* I want to get the details of user whose belongs to USA*/
select * from customers where country='USA';

/*whose credit limit is more than 50000*/
select * from customers where creditLimit >= 50000;
/*whose credit limit is between  50000 and 100000*/
select * from customers where creditLimit between 50000 and 100000;

/*customer names whose from usa or germany*/
select * from customers where country='USA' or country='Germany' ;

/*abouve query can be replaced with in operator*/
select * from customers where country in('USA','Germany');

select * from employees;

/*order by Last name*/
select lastName from employees  order by lastName;
select distinct lastName from employees  order by lastName;

select * from customers;

select distinct state from customers order by country;
select distinct state from customers order by state;

select distinct city from customers order by city;

select* from customers where state is null;

select* from customers where state is not null;

select state from customers group by state;

select distinct state from customers ;

/* Aggregate functions
Sum
average 
count
max
min
*/

select * from customers;

/*Allias name : alternate for the table or column*/

select customername as Customer_Name from customers;

select sum(creditLimit) as SumCredit from customers;

select avg(creditLimit) as Average from customers;

/*count(*)represents record count*/
select count(*) as Record  from customers;

/*Null values are displayed*/
select state from customers;

/* count(state) which returns the number having the values in the column*/
select count(state) from customers;

select max(creditLimit) as Max_CreditLimit from customers;

select min(creditLimit) as Min_CreditLimit from customers;


/* Using aggregation to the group by clause or distinct*/
select distinct state from customers order by state;

select count(distinct state) from customers;

select count(distinct state) from customers where country='USA';

select count(distinct state) from customers group by country;

/*string filters like operator*/
select * from customers where customername like 'a%';

select * from customers where customername like '%a';

select * from customers where customername like 'a_e%';

SELECT * FROM CUSTOMERS WHERE CUSTOMERNAME LIKE 'AA%';

SELECT * FROM CUSTOMERS LIMIT 5;

SELECT * FROM CUSTOMERS LIMIT 0,10;

/* Union,Union all,intersect and minus
Syntax: Select statement
union/union all/iontersect/minus
Select Statement
*/

create table emp1(
id int auto_increment,
empname varchar(50) not null,
empdesg varchar(50) not null,
empSal int,
primary key(id)
);
create table emp2(
id int auto_increment,
empname varchar(50) not null,
empdesg varchar(50) not null,
empSal int,
primary key(id)
);

insert into emp1(empname,empdesg,empSal)values('shefaly','student',500000),('sunny','engineer',13000);
select *from emp1;
select count(*) from emp1;
insert into emp2(empname,empdesg,empSal)values('uma','student',500000),('siva','docter',100000);

select * from emp2;
select count(*) from emp2;

