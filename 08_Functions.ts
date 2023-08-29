//TypeScript has a specific syntax for typing function parameters and return values.

// 1. Return Type
// The type of the value returned by the function can be explicitly defined.
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

// Note : If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// 2. Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}
printHello();

// 3. Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2,2));

// 4. Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
};
console.log(add(2,5));
console.log(add(2,5,3));

// 5. Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(10));

// 6. Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
};
console.log(divide({dividend: 10, divisor: 2}));

// 7. Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addition(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addition(10,10,10,10,10));

// 8. Type Alias
// Function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10));