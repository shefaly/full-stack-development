use classicmodels;

show tables;

/*Inner join*/
select * from customers;

select * from orders;

/*Customers can have 0 orders and more than 0 orders*/
select a.customernumber,a.customername,b.ordernumber,b.status
from customers a
left join orders b on
a.customernumber=b.customernumber;



select a.customername,a.customernumber,b.ordernumber,b.status 
from customers a
left join orders b on a.customernumber=b.customernumber where ordernumber is null;


select a.customername,a.customernumber,b.ordernumber,b.status 
from customers a
right join orders b on a.customernumber=b.customernumber ;



select customername,phone,city,state,postalcode from customers order by customername;



DELIMITER $$
create procedure getcustomersdata()
begin
select customername,phone,city,state,postalcode from customers order by customername;
end $$
/* call the procedure*/
call getcustomersdata()