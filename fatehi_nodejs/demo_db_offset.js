var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "safatehi",
    password: "alifatehi1383",
    database: "ToDo"
});

con.connect(function(err) {
  if (err) throw err;
  // Return 5 customers, starting from position 2:
  // SELECT * FROM customers LIMIT 5 OFFSET 2 == SELECT * FROM customers LIMIT 2, 5
  con.query("SELECT * FROM customers LIMIT 2, 5", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});