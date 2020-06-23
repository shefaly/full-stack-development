use classicmodels;

show tables;

select distinct status from orders;

select * from orders;
select * from customers;
select * from products;
select * from orderdetails;

select a.customerName,b.productName,c.status from customers a,products b,orders c
 where a.customerNumber=103;

select a.customerName,c.productName,b.status from customers a,orders b,products c
 where a.customerNumber=b.customerNumber and a.customerNumber=103;
 
 select a.customername,b.orderdate from customers a,orders b 
 where a.customernumber=b.customernumber and a.customernumber=103;
 
 
 select a.orderdate,a.status,b.productcode from orders a,orderdetails b
 where a.ordernumber=b.ordernumber;
 
 select productname,productcode,textdescription from products a
 inner join productlines b
 on a.productline=b.productline;