var fs = require('fs');

// CREATE FILES:

// create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'hello content append!', function (err) {
    if (err) throw err;
    console.log('saved append!');
});

// create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('saved open!');
});

// create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'hello content write file!', function (err) {
    if (err) throw err;
    console.log('saved write!');
});

// UPDATE FILES:

// append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated append!');
});

// Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Replaced write!');
});

// DELETE FILES:
  
// Delete the file mynewfile2.txt:
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File open deleted!');
});

// RENAME FILES:

// Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File append Renamed!');
});  