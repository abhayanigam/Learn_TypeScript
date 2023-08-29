//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
class Person {
    // Similar to arrays, the readonly keyword can prevent class members from being changed.
    private readonly lastName: string;
    // name is a private member variable
    public constructor(private name: string, lastName: string) {
        this.lastName = lastName;
    }   

    public getName(): string {
        return this.name;
    }

    public getLastName(): string {
        return this.lastName;
    }
}
    
const person = new Person("Jane","Singh");

console.log(person.getName());
console.log(person.getLastName());

// Inheritance: Implements
// Interfaces can be used to define the type a class must follow through the implements keyword.

interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(10,20);
console.log(myRect.getArea());

// Note : A class can implement multiple interfaces by listing each one 
// after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other
// classes without having to implement all the members. This is done by using the abstract keyword. 
// Members that are left unimplemented also use the abstract keyword.
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectanglee extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const my = new Rectanglee(10,20);
console.log(my.getArea());