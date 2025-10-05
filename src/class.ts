class Animal {
  public name: string; // Can be accessed anywhere
  protected age: number; // Can be accessed in this class or subclasses
  private secret: string; // Can be accessed only inside this class

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this.secret = secret;
  }

  public showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Secret: ${this.secret}`); // ✅ Allowed (inside same class)
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, secret: string) {
    super(name, age, secret);
  }

  public showAge() {
    console.log(`Dog age is: ${this.age}`); // ✅ Allowed (protected property)
    // console.log(this.secret); // ❌ Error: 'secret' is private
  }
}

const dog = new Dog("Buddy", 3, "Loves bones");

console.log(dog.name); // ✅ public property can be accessed anywhere
// console.log(dog.age);    // ❌ Error: protected property
// console.log(dog.secret); // ❌ Error: private property

// =============================================================================================

abstract class Shape {
  // Abstract method — no body, must be implemented by subclass
  abstract getArea(): number;

  // Normal method
  describe() {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius; // ✅ must implement abstract method
  }
}

const circle = new Circle(5);
circle.describe(); // ✅ "This is a shape."
console.log(circle.getArea()); // ✅ 78.5398...

//==================================================================================

interface Vehicle {
  brand: string;
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`${this.brand} car started.`);
  }

  stop(): void {
    console.log(`${this.brand} car stopped.`);
  }
}

const car = new Car("Toyota");
car.start(); // ✅ Toyota car started.
car.stop(); // ✅ Toyota car stopped.
