var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "afatehi07@gmail.com",
  password: "Alif@tehi_1383"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('result: ' + result)
  });
});