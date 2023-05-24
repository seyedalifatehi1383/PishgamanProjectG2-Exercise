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