DELIMITER $$
create procedure getcustomers()
begin
select customername,phone,city,state,postalcode from customers order by customername;
end $$
/* call the procedure*/
call getcustomers();
use classicmodels;
show tables;
create table reg2(
username varchar(50) not null,
password varchar(50) not null,
emailid varchar(50) not null,
phonenumber bigint,
address varchar(100) not null,
dateofbirth date not null
);

create table log(
id int auto_increment,
username varchar(50) not null,
pwd varchar(50) not null,
primary key(id)
);

call insert_userdetails('shefaly','shef','shefaly@gmail.com',8987677890,'hyd','1999/09/05');

select * from reg2;

call login('uma','uma@6788');
select * from log;

call test_login('shefaly','sjcsj');

call up('shjii');
select *from reg2;
select *from log;