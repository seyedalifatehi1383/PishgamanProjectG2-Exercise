var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "safatehi",
  password: "alifatehi1383",
    database: "ToDo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

              