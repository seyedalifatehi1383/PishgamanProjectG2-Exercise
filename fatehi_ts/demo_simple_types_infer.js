// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
function LoggerAndReturn(thing) {
    return thing;
}
// const message: string = LoggerAndReturn<string>('hello, world')
var message = LoggerAndReturn('hello, world');
var message2 = LoggerAndReturn(2);
console.log(message);
console.log(message2);
