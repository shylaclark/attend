//Author : Sathvik Reddy
//Project : AARS
//Date : 10-05-17
//Accquiring 'mysql' node module

var mysql = require('mysql');

//Creating a connection to the followig MySQL Database 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "AARS"
});

//Connecting  to AARS database to create a  "registration_table"
con.connect(function(err) {
  if (err) throw err;
 console.log("Connected");
  var sql = "CREATE TABLE registration_table (id INT(6) UNSIGNED AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), user_id VARCHAR(255) ,email VARCHAR(255), user_type VARCHAR(50), PRIMARY KEY(id,email))";
  con.query(sql, function (err, result) {
    if (err) throw err;
console.log("created");

  });
});
