// this is my first JS program
console.log('hello world');

// rules of naming :
// they cannot be reserved keyword
// they should be meaningful
// they cannot start with a number (i.e. 1name)
// they cannot contain a space or hyphen (-) 
// they are case-sensitive (fN and FN are different)

let name1;
console.log(name1);

let name2 = 's.a.fatehi';
console.log(name2);

// camel case for vars
let firstName1 = 'S. A.', lastname1 = 'Fatehi';

// this is mush better than the previous defining
let firstName2 = 'Seyed Ali';
let lastname2 = 'Fatehi';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// constatnt variables
const constVar = 1;
// constVar = 3; --> caught TypeError: Assignment to constant variable.

let name = ''; //String Literal
let age = 18; //Number Literal
let isApproved = true; //Boolean Literal. the value is 'true' or 'false'
let undef = undefined; //by default the vars are undefined
let selectedColor = null; //i.e. a user didnt select any colors, we put the value null

// we use typeof statement to show the type of the variable
// the below example shows that JS is dynamic that means we can change the type of the variable after defining it
let ex = "ttt";
console.log(typeof ex);

ex = 2;
console.log(typeof ex);

// it shows that in JS we dont have two kinds of numbers
ex = 2.1;
console.log(typeof ex);

// this is the syntax for defining an object
// instead of the codes below:
// let age = 18;
// let name = 'ali';
// we call this an Object Literal
let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);

// changing and reading  the properties:
// Dot Notation
person.name = 'Ali';
console.log(person.name);

// Bracket Notation
// the target should be declared between quotes
person['name'] = 'Seyed Ali';
console.log(person['name']);

// dot note is easier but bracket note is useful when we dont know that which property will the user selects we can code like below:
let selection = 'name';
person[selection] = 'Fatehi';
console.log(person[selection]);

// Arithmetic Operators

// operands:
x = 2;
y = 3;

// edition operator
// console.log(x + y);
// subtraction op.
// console.log(x - y);
// multipulication op.
// console.log(x * y);
// divition op.
// console.log(x / y);
// remainder op.
// console.log(x % y);
// exponentiation op.
// that means: x to the power of y!!!
// console.log(x ** y);

x = 10;
// Increment Operators (++)
console.log(x); // 10
console.log(++x); // 11
console.log(x++); // 11
console.log(x); // 12

// Decrement Operators (--)
console.log(x); // 12
console.log(--x); // 11
console.log(x--); // 11
console.log(x); // 10

