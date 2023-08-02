
*BASIC GENERICS:*

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

Generics makes it easier to write reusable code.

```TypeScript
function createPair<S, T>(v1: S, v2: T): [S, T] {  
  return [v1, v2];  
}  
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
```

*Classes:*
Generics can be used to create generalized classes, like [Map](https://www.w3schools.com/js/js_maps.asp).

```TypeScript
class NamedValue<T> {  
  private _value: T | undefined;  
  
  constructor(private name: string) {}  
  
  public setValue(value: T) {  
    this._value = value;  
  }  
  
  public getValue(): T | undefined {  
    return this._value;  
  }  
  
  public toString(): string {  
    return `${this.name}: ${this._value}`;  
  }  
}  
  
let value = new NamedValue<number>('myNumber');  
value.setValue(10);  
console.log(value.toString()); // myNumber: 10
```

*Type Aliases:*
Generics in type aliases allow creating types that are more reusable.

```type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
```
it also works with interface : 
```TypeScript
interface wrapped<T> {
	// code
}
```

*Default Value:*
Generics can be assigned default values which apply if no other value is specified or inferred.

<T = string>

```TypeScript
class NamedValue<T = string> {  
  private _value: T | undefined;  
  
  constructor(private name: string) {}  
  
  public setValue(value: T) {  
    this._value = value;  
  }  
  
  public getValue(): T | undefined {  
    return this._value;  
  }  
  
  public toString(): string {  
    return `${this.name}: ${this._value}`;  
  }  
}  
  
let value = new NamedValue('myNumber');  
value.setValue('myValue');  
console.log(value.toString()); // myNumber: myValue
```

*Extends:*
Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

```TypeScript
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {  
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);  
  return [v1, v2];  
}
```


*UTILITY TYPES:*
TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

This chapter covers the most popular utility types.

*Partial:*
`Partial` changes all the properties in an object to be optional.

```TypeScript
interface Point {  
  x: number;  
  y: number;  
}  
  
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional  
pointPart.x = 10;
```

*Required:*
`Required` changes all the properties in an object to be required.

```TypeScript
interface Car {  
  make: string;  
  model: string;  
  mileage?: number;  
}  
  
let myCar: Required<Car> = {  
  make: 'Ford',  
  model: 'Focus',  
  mileage: 12000 // `Required` forces mileage to be defined
```

*Record:*
Record is a shortcut to defining an object type with a specific key type and value type.

```TypeScript
const nameAgeMap: Record<string, number> = {  
  'Alice': 21,  
  'Bob': 25  
};
```

note :
`Record<string, number>` is equivalent to `{ [key: string]: number }`

*Omit:*
`Omit` removes keys from an object type.

```Typescript
interface Person {  
  name: string;  
  age: number;  
  location?: string;  
}  
  
const bob: Omit<Person, 'age' | 'location'> = {  
  name: 'Bob'  
  // `Omit` has removed age and location from the type and they can't be defined here  
};
```

*Pick:*
`Pick` removes all but the specified keys from an object type.

```TypeScript
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
```

*Exclude:*
`Exclude` removes types from a union.

```TypeScript
type Primitive = string | number | boolean  
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
```

*ReturnType:*
`ReturnType` extracts the return type of a function type.

```TypeScript
type PointGenerator = () => { x: number; y: number; };  
const point: ReturnType<PointGenerator> = {  
  x: 10,  
  y: 20  
};
```

*Parameters:*
`Parameters` extracts the parameter types of a function type as an array.

```TypeScript
type PointPrinter = (p: { x: number; y: number; }) => void;  
const point: Parameters<PointPrinter>[0] = {  
  x: 10,  
  y: 20  
};
```

*Readonly:*
`Readonly` is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

note: Keep in mind TypeScript will prevent this at compile time, but in theory since it is compiled down to JavaScript you can still override a readonly property.

```TypeScript
interface Person {  
  name: string;  
  age: number;  
}  
const person: Readonly = {  
  name: "Dylan",  
  age: 35,  
};  
person.name = 'Iran'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
```