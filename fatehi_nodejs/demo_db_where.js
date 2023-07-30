var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'safatehi',
    password: 'alifatehi1383',
    database: 'ToDo'
})

con.connect(function (err) {
    if (err) throw err
    /*Select all customers with the address "Park Lane 38":*/
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err
        console.log(result)
    });
});