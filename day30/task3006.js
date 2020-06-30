let mysql=require('mysql');
let connect=require('./conn.js');
let connection=mysql.createConnection(connect);
let sqlProc='call insertUserdata(?,?)';
let inputParams=['umarao','bchdbvjd'];

connection.query(sqlProc,inputParams,(error,results) =>{
    if(error){
        return console.log(error.message);
    }
    console.log(results[1]);
});
connection.end();