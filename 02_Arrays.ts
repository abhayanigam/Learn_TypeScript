const names: string[] = [];

names.push("Abhaya");
names.push("Vedanshi");

console.log("The size of the array is : "+names.length);
console.log(names);

// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// The readonly keyword can prevent arrays from being changed.
const naam: readonly string[] = ["Dylan"];

// naam.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// try removing the readonly modifier and see if it works?
console.log(naam);

