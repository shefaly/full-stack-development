let mysql=require('mysql');
let connect=require('./conn.js');
let connection=mysql.createConnection(connect);
let sqlProc='call Userdata()';
connection.query(sqlProc,(error,results) =>{
    if(error){
        return console.log(error.message);
    }
    console.log(results[0]);
});
connection.end();