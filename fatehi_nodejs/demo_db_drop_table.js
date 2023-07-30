var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "safatehi",
  password: "alifatehi1383",
  database: "ToDo"
});

con.connect(function(err) {
  if (err) throw err;
  //Delete the "Test" table:
  var sql = "DROP TABLE Test";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
