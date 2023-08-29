/**
 * Simple Types:
    TypeScript supports some simple types (primitives)
        There are three main primitives in JavaScript and TypeScript.

            > boolean - true or false values
            > number - whole numbers and floating point values
            > string - text values like "TypeScript Rocks"

        There are also 2 less common primitives used in later versions of Javascript and TypeScript.

            > bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
            > symbol are used to create a globally unique identifier.

    Type Assignment:
        When creating a variable, there are two main ways TypeScript assigns a type:
            > Explicit
            > Implicit
 */

//Explicit Type - writing out the type:
let firstName : string = "Abhaya";
console.log(typeof firstName);

//Implicit - TypeScript will "guess" the type, based on the assigned value:
let lastName = "Nigam";
console.log(typeof lastName);

// TypeScript will throw an error if data types do not match.
// firstName = 33; // attempts to re-assign the value to a different type
console.log(firstName);
//Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:
// lastName = 33; // attempts to re-assign the value to a different type
console.log(lastName);

/**
 * TypeScript has special types that may not refer to any specific type of data.
    !. Type: any
            (any) is a type that disables type checking and 
                effectively allows all types to be used.
    2. Type: unknown
            (unknown) is a similar, but safer alternative to any.
    3. Type: never
            (never) effectively throws an error whenever it is defined.
    4. Type: undefined & null
            (undefined) and (null) are types that refer to the JavaScript 
                primitives undefined and null respectively.
 */

// Example 1: Any
// Without any
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.

u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.

console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// With any
let v: any = true;
v = "string"; // no error as it can be "any" type
v = 3;
console.log(Math.round(v)); // no error as it can be "any" type

// Example 2: Unknown
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void} //Casting is when we use the "as" keyword to say property or variable is of the casted type.
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

// Example 3: Never (never is rarely used, especially by itself, its primary use is in advanced generics.)
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// Example 4: undefined & null
//These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);
