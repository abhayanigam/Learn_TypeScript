/**
 * There are times when working with types where it's necessary to override
 * the type of a variable, such as when incorrect types are provided by a library.
 * Casting is the process of overriding a type.
 */

// Casting with as
// A straightforward way to cast a variable is using the as keyword,
//  which will directly change the type of the given variable.
let x: unknown = 'hello';
console.log((x as string).length);

// Casting with <>
// Using <> works the same as casting with as.
console.log((<string>x).length);

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
console.log(((x as unknown) as string).length); // x is not actually a number so this will return undefined.