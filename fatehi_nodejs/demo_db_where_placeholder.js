var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "safatehi",
  password: "alifatehi1383",
  database: "ToDo"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'Amy'
  var adr = 'Mountain 21';
  //Escape the name and the address values:
  var sql1 = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql1, [name, adr], (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log('\n\n')
  });

  var sql2 = 'SELECT * FROM customers WHERE name = ?';
  con.query(sql2, [name], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});