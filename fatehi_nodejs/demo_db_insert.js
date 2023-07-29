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
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log(result)
  });
});