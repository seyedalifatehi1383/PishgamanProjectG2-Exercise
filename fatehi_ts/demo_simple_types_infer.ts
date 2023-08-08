// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");

// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

function LoggerAndReturn<T>(thing: T) : T {
    return thing;
}

// const message: string = LoggerAndReturn<string>('hello, world')
const message: string = LoggerAndReturn('hello, world')
const message2: number = LoggerAndReturn(2)
console.log(message);
console.log(message2);

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let myNumArr = getArray<number>([100, 200, 300])
let myStrArr = getArray<string>(['hello', 'world'])

console.log(myNumArr);
console.log(myStrArr);
