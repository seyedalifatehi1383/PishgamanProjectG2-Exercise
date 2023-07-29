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
  // con.query("SELECT * FROM Test WHERE 1", (err, result) => {
  //   if (err) throw err;
  //   console.log('result: ' + result)
  // });

  con.query("SELECT * FROM Test WHERE 1" , (err , result) =>{
    console.log(result);
    console.log(result[0].lName + ' ' + result[0].fName)
  })
});