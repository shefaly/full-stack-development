let mysql = require("mysql");
let connect = require("./conn.js");
let connection = mysql.createConnection(connect);
let sqlProc = "call get_userdata(?)";
let inputParams = ["2"];
connection.query(sqlProc, inputParams, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
});
connection.end();