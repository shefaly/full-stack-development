var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "shefaly@25",
    database: "db2"
});
connection.connect(function(err){
    if(!err){
        console.log("Database Connected.....");
    }
    else{
        console.log("Error in connecting database.........");
    }
});

app.listen(4013,()=>{
    console.log("Server is Running");
});

app.get('/',function(req,res){
    res.json({msg:"Welcome to Node.js API"});
});

//Route for Insert Data
app.post('/createapp',(req,res) =>{
    let data = req.body;
    //To see the data in console
    console.log(data);
    connection.query('insert into createapp set ? ',data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"Error Occured"
            });
        }
        else{
            res.send({
                "code":200,
                "Success":"User Registeration Completed"
            });
        }
    });
});
