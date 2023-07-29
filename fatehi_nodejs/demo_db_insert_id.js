var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "safatehi",
  password: "alifatehi1383",
  database: "ToDo"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    /*Use the result object to get the id:*/
    console.log("1 record inserted, ID: " + result.insertId);
  });
});