let mysql=require('mysql');
let connection= mysql.createConnection({
host: 'localhost',
user:'root',
password:'shefaly@25',
database: 'testDb'
});
connection.connect(function(err){
if(err){
return console.error('error'+err.message);
}
console.log('connected to mysql');
});
connection.end(function(err){
if(err){
return console.error('error'+err.message);
}
console.log('closed the db');
});