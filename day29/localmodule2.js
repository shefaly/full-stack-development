let mysql = require('mysql');
let connect=require('./conn.js');
let connection=mysql.createConnection(connect);
let sqlCom="insert into userdata(username,password) values('shefaly','bdfbfsuj');";

connection.query(sqlCom,(err,results) => {
if(err){
return console.error(err.message);
}
console.log('Record is inserted');
});
connection.end();