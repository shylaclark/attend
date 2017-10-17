//Author : Sathvik Reddy Pingili
//Project : AARS
//Date : 10-05-17

//Acquiring 'mysql' node module. Assiging msql node mod to var mysql which acts as object
var mysql = require('mysql');

//creating connection object to connect to MySQL server
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});
//checking for connection obj.connect(function(){});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//Creating database "AARS"
  con.query("CREATE DATABASE AARS", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});