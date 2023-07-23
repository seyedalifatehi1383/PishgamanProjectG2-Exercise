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

// changing and reading the properties:
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

// Assignment operator (=)
x = 10;

x += 5; // x = x + 5
x *= 3; // x = x * 3

x = 10;
// Comparison Operators (> < <= >=)

// Relational op.
console.log(x > 10); // true
console.log(x >= 10); // true
console.log(x < 10); // false
console.log(x <= 10); // true

// Equality op.
console.log(x === 1); // is equal
console.log(x !== 1); // is not equal

// Equality Operators
// Strict Equality (Type + Value)
console.log(1 === 1); // true
console.log('1' === 1); // false

// Lose Equality (Value)
console.log(1 == 1); // true
console.log('1' == 1); // true (right one changes to string)

// Ternary (Conditional) operator
let points = 101;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical operators

// AND (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan) // true

// OR (||) 
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan) // true

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan) // false

// Logical Ops. with NON BOOLEANS

console.log(false || "ali") // ali
console.log(false || 1) // 1

// Short-circuiting (2 is ignored)
console.log(false || 1 || 2) // 1

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); //blue

// Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = | = 3
// R = 00000000 = & = 0

console.log(1 | 2); // 3
console.log(1 & 2); // 0

// Access control system (i.e.)

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message); // yes

// Operator Precedence

x = 2 + 3 * 4;
console.log(x) // 14

x = (2 + 3) * 4;
console.log(x) // 20

// Swapping vars

let a = 'red';
let b = 'blue';

console.log(a)
console.log(b)

let c = b;

b = a
a = c

console.log(a)
console.log(b)

// Conditional Statements

// 1- if...else

// Hour
// hour between 6am and 12pm : good morning!
// hour between 12pm and 6pm : good afternoon!
// otherwise : good evening!

let hour = 10;
if (hour >= 6 && hour < 12) 
    console.log('good morning')
else if (hour >= 12 && hour < 18)
    console.log('good afternoon')
else
    console.log('good evening')

// 2- switch...case

let role = 'guest'

switch (role) {
    case 'guest':
        console.log('Guest User')
        break;

    case 'moderator':
        console.log('Moderator User')
        break;

    default:
        console.log('Unknown User')
}

if (role === 'guest') console.log('Guest User')
else if (role === 'moderator') console.log('Moderator User')
else console.log('Unknown User')

// Loops
// for
 
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i)
}

// while
let i = 1;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i)
    i++;
}

// do...while
i = 1
do {
    if (i % 2 !== 0) console.log(i)
    i++;
} while(i <= 5)

i = 9
do {
    if (i % 2 !== 0) console.log(i)
    i++;
} while(i <= 5)
// executes one time
// while loop doesnt execute

// infinite loops

// i = 0
// while (i < 5) {
//     console.log(i)
//     // i++
// }

// while (true) {
    
// }

// i = 0
// do {
//    // i++
// } while (i < 5)

// for (let i = 0; i < 10;)

// for...in
// iterating over the properties of an object

// note: object person is previously declared in line 55
for (const key in person) {
    console.log(key, person[key])
    console.log(key, key.person)
    // name
    // age
}

// dot notation
person.name

// bracket notation
person['name']

let colors = ['red', 'green', 'blue']

for (let index in colors) {
    console.log(index, colors[index])
}

// for...of
// iterating arrays
for (const color of colors) {
    console.log(color);
}

// break and continue
i = 0;
while (i <= 10) {
    if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

// max of two numbers exercise
function maxOfTwoNumbers(a1, b1) {
    // if (a1 > b1) return a1;
    // else return b1

    // if (a1 > b1) return a1;
    // return b1

    return (a1 > b1) ? a1 : b1;
}

let num = maxOfTwoNumbers(1, 2);
console.log(num)

// is landscape exercise
console.log(isLandscape(300, 600)) // false
function isLandscape(width, height) {
    // return (width > height) ? true : false;
    return (width > height);
}

// fizzBuzz function
// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both => FizzBuzz
// not divisible by neither 3 nor 5 => shows the number
// not a number => 'Not a Number'

console.log(fizzBuzz('test')) // test
console.log(typeof NaN) // "number" but declared as "bot a valid number"

function fizzBuzz(input) {
    if (typeof input !== 'number') console.log('Not a Number')
    else if (input % 3 === 0 && input % 5 === 0) console.log('FizzBuzz')
    else if (input % 3 === 0) console.log('Fizz')
    else if (input % 5 === 0) console.log('Buzz')
    else console.log(input)
}

// demerit points
// speed limit = 70
// 5 -> 1 point
// 12points = suspended

checkSpeed(75) // test

function checkSpeed(speed) {
    if (speed <= 74) {
        console.log(Ok)
        return ;
    }

    else {
        let points = Math.floor((speed - 70) / 5);
        if (points >= 1 && points <= 11) console.log('Points: ', points)
        else console.log('License suspended')
    }
}

// ODD or EVEN
showNumbers(10) // test

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        // if (i % 2 === 0) {
        //     console.log(i, " \"EVEN\"")
        //     continue;
        // }
        
        // console.log(i, " \"ODD\"")
    
        const message = (i % 2 === 0 ? 'EVEN' : 'ODD')
        console.log(i, message)
    }
}

// count truthy 
array = ['red', 1, 0, 3]
console.log(countTruthy(array)) // 3 (test)

function countTruthy(array) {
    let count = 0;
    
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== '' && array[i] !== undefined && array[i] !== null && array[i] !== 0 && array[i] !== 0 && array[i] !== NaN && array[i] !== false) {
    //         count++;
    //     }   
    // }

    for (const value of array) {
        if (value)
            count++;
    }

    return count;
}

// string properties
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}
showProperties(movie) // test

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
    }
}

// sum of the multiples 3 and 5
console.log(sum(10)) // 33 (test)
// multiples of 3 : 3, 6, 9
// multiples of 5 : 5, 10

function sum(limit) {
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i
    }

    return sum
}

// grade
const marks = [80, 80, 50]
// average = 70 = C
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks)) // test

function calculateGrade(marks) {
    const avg = calculateAverage(marks)

    if (avg < 60) return 'F'
    if (avg < 70) return 'D'
    if (avg < 80) return 'C'
    if (avg < 90) return 'B'
    return 'A'
}

function calculateAverage(array) {
    let sum = 0
    
    for (let value of array) {
        sum += value;
    }

    return sum / array.length;
}

// stars
showStars(10) // test

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*'
        }
        console.log(pattern)
    }
}

// prime numbers
showPrimes(20) // test

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) console.log(i)
    }
}

function isPrime(number) {
    for (let j = 2; j < number; j++) {
        if (number % j === 0) {
            return false
        }
    }

    return true
}

// OBJECTS

// let radius = 1;
// x = 1
// y = 1

// function draw() {}
// function move() {}

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // declaring function in object 
    draw: function() {
        console.log('draw')
    }
};

circle.draw(); // method

// factory functions
// camelCase
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circle1 = createCircle(1)
console.log(circle1)

const circle2 = createCircle(2)
console.log(circle2)

// constructor function
// PascalCase

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

    // return this;
}

const circle3 = new Circle(1);

// Dynamic Nature of Objects
// we can add params to the obj after declaring it

const circle10 = {
    radius: 1
};

circle10.color = 'yellow';
circle10.draw = function() {}

console.log(circle10) // {radius: 1, color: "yellow", draw: f}

delete circle10.color;
delete circle10.draw;
// constant var means that we cannot reassign the vars of the obj
// circle10 = {} -> wrong

console.log(circle10) // {radius: 1}

// constructor property
console.log(circle3.constructor)
// f Circle(radius) {
// this.radius = radius;
// this.draw = function() {
//     console.log('draw')
//  }
// }

console.log(circle1.constructor)
// f Object() { [native code] }

// let x = {} equals to let x = new Object

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// functions are ocjects
function Circle1(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const another = new Circle1(1)

const Circle2 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
`);

const circle11 = new Circle2(1)

Circle1.call({}, 1)
Circle1.apply({}, [1])