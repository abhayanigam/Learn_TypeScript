/**
 * TypeScript comes with a large number of types that can help with some common
 * type manipulation, usually referred to as utility types.
*/

// 1. Partial : Partial changes all the properties in an object to be optional.
interface Point {
    x: number;
    y: number;
}
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);

// 2. Required : Required changes all the properties in an object to be required.
interface Car {
    make: string;
    model: string;
    mileage?: number;
}
let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);

// 3. Record : Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMap);

// 4. Omit : Omit removes keys from an object type.
interface Person {
    name: string;
    age: number;
    location?: string;
}  
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);

// 5. Pick : Pick removes all but the specified keys from an object type.
const bob1: Pick<Person, 'name'> = {
name: 'Bob'
// `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob1);

// 6. Exclude : Exclude removes types from a union.
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;
// A string cannot be used here since Exclude removed it from the type.
console.log(typeof value);

// 7.ReturnType : ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// 8. Readonly : Readonly is used to create a new type where all properties are readonly, 
// (meaning they cannot be modified once assigned a value.)
// Note : Keep in mind TypeScript will prevent this at compile time, 
// but in theory since it is compiled down to JavaScript you can still override a readonly property.
interface Human{
    name: string,
    age: number
};
const human : Readonly<Human>={
    name:"Abhaya",
    age :21
};
// human.name = "Vedanshi"; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
console.log(human.name);