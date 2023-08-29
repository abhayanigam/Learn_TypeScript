const car: {type: string, model: string, year: number}={
    type:"Volvo",
    model:"xuv",
    year:2023
};
console.log(car);
//Object types like this can also be written separately, and even be reused, look at interfaces for more details.

// Type Inference
// TypeScript can infer the types of properties based on their values.
const cars = {
    type: "Toyota",
};
cars.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

/*
    Optional properties are properties that don't have to be defined in the object definition.
    const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
        type: "Toyota",
    };
      car.mileage = 2000;
*/

// With an optional property
const caar: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
caar.mileage = 2000;