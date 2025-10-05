"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name; // Can be accessed anywhere
    age; // Can be accessed in this class or subclasses
    secret; // Can be accessed only inside this class
    constructor(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`Secret: ${this.secret}`); // ✅ Allowed (inside same class)
    }
}
class Dog extends Animal {
    constructor(name, age, secret) {
        super(name, age, secret);
    }
    showAge() {
        console.log(`Dog age is: ${this.age}`); // ✅ Allowed (protected property)
        // console.log(this.secret); // ❌ Error: 'secret' is private
    }
}
const dog = new Dog("Buddy", 3, "Loves bones");
console.log(dog.name); // ✅ public property can be accessed anywhere
// console.log(dog.age);    // ❌ Error: protected property
// console.log(dog.secret); // ❌ Error: private property
// =============================================================================================
class Shape {
    // Normal method
    describe() {
        console.log("This is a shape.");
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius; // ✅ must implement abstract method
    }
}
const circle = new Circle(5);
circle.describe(); // ✅ "This is a shape."
console.log(circle.getArea()); // ✅ 78.5398...
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} car started.`);
    }
    stop() {
        console.log(`${this.brand} car stopped.`);
    }
}
const car = new Car("Toyota");
car.start(); // ✅ Toyota car started.
car.stop(); // ✅ Toyota car stopped.
