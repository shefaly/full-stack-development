let mysql=require('mysql');
let connection= mysql.createConnection({
host: 'localhost',
user:'root',
password:'shefaly@25',
database: 'testdb'
});
let sqlcom="insert into userdata(username,password) values(?,?)";
let vals=['sai','sai'];
connection.query(sqlcom,vals);
connection.end();
