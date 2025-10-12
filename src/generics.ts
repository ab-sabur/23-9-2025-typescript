function genericSingle<ST>(arg: ST): ST {
  return arg;
}

function genericMultiple<ST, NT>(arg1: ST, arg2: NT): [ST, NT] {
  return [arg1, arg2];
}

function genericMixed<ST, NT, MT>(arg1: ST, arg2: NT): MT {
  return `${arg1} and ${arg2}` as MT;
}

console.log(genericSingle<string>("Hello, Generics!"));
console.log(genericMultiple<boolean, number>(true, 42));
console.log(genericMixed<boolean, number, string>(true, 42));

function sum<P1>(a: P1, b: P1): number {
  return Number(a) + Number(b);
}

console.log(sum<number>(10, 20));

function sumAny<P1, P2>(a: P1, b: P2): number {
  return Number(a) + Number(b);
}

console.log(sumAny<string, number>("10", 20));
console.log(sumAny<string, string>("10", "20"));

function sumUsingAs<P1>(a: P1, b: P1): number {
  return (a as number) + (b as number);
}

console.log(sumUsingAs<number>(10, 20));

class genericClass<T, U> {
  public value1: T;
  public value2: U;

  constructor(value1: T, value2: U) {
    this.value1 = value1;
    this.value2 = value2;
  }

  getValue1(): T {
    return this.value1;
  }

  getValue2(): U {
    return this.value2;
  }

  setValue1(value: T): void {
    this.value1 = value;
  }

  setValue2(value: U): void {
    this.value2 = value;
  }

  displayTypes(): void {
    console.log(`Type of T is: ${typeof this.value1}`);
    console.log(`Type of U is: ${typeof this.value2}`);
  }
}

console.log("===================================================");
const mixedInstance = new genericClass<string, number>("TypeScript", 2025);
mixedInstance.displayTypes();
console.log(mixedInstance.getValue1());
console.log(mixedInstance.getValue2());

console.log("===================================================");

const anotherInstance = new genericClass<boolean, string>(true, "Hello");
anotherInstance.displayTypes();
console.log(anotherInstance.getValue1());
console.log(anotherInstance.getValue2());

console.log("===================================================");

anotherInstance.displayTypes();
anotherInstance.setValue1(false);
anotherInstance.setValue2("World");
console.log(anotherInstance.getValue1());
console.log(anotherInstance.getValue2());
