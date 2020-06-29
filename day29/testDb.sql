create database testDb;

 
ALTER USER'root'@'localhost' identified with mysql_native_password by 'shefaly@25';

flush privileges;
create table userdata(
id int auto_increment,
username varchar(50) not null,
password varchar(50) not null,
primary key(id)
);
