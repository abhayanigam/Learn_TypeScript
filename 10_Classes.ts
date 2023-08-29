//Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

class Person {
    name: string;
}

const person = new Person();
person.name = "Jane";

/**
 * Members: Visibility
    Class members also be given special modifiers which affect visibility.

    There are three main visibility modifiers in TypeScript.

    > public - (default) allows access to the class member from anywhere
    > private - only allows access to the class member from within the class
    > protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
 */

class Human {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const human = new Human("Jane");
console.log(human.getName()); // person.name isn't accessible from outside the class since it's private