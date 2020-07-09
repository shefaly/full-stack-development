const mysql=require('mysql');
const dbconfig=require('../config/db.config.js');
const connection=mysql.createConnection({
    host:dbconfig.HOST,
    user:dbconfig.USER,
    password:dbconfig.PASSWORD,
    database:dbconfig.DB
});

connection.connect(error => {
    if(error){
    return console.error(error.message);
    }
    console.log("Successfully connected to mySQL DATABASE");
});

module.exports=connection;
