"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericSingle(arg) {
    return arg;
}
function genericMultiple(arg1, arg2) {
    return [arg1, arg2];
}
function genericMixed(arg1, arg2) {
    return `${arg1} and ${arg2}`;
}
console.log(genericSingle("Hello, Generics!"));
console.log(genericMultiple(true, 42));
console.log(genericMixed(true, 42));
function sum(a, b) {
    return Number(a) + Number(b);
}
console.log(sum(10, 20));
function sumAny(a, b) {
    return Number(a) + Number(b);
}
console.log(sumAny("10", 20));
console.log(sumAny("10", "20"));
function sumUsingAs(a, b) {
    return a + b;
}
console.log(sumUsingAs(10, 20));
class genericClass {
    value1;
    value2;
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    getValue1() {
        return this.value1;
    }
    getValue2() {
        return this.value2;
    }
    setValue1(value) {
        this.value1 = value;
    }
    setValue2(value) {
        this.value2 = value;
    }
    displayTypes() {
        console.log(`Type of T is: ${typeof this.value1}`);
        console.log(`Type of U is: ${typeof this.value2}`);
    }
}
console.log("===================================================");
const mixedInstance = new genericClass("TypeScript", 2025);
mixedInstance.displayTypes();
console.log(mixedInstance.getValue1());
console.log(mixedInstance.getValue2());
console.log("===================================================");
const anotherInstance = new genericClass(true, "Hello");
anotherInstance.displayTypes();
console.log(anotherInstance.getValue1());
console.log(anotherInstance.getValue2());
console.log("===================================================");
anotherInstance.displayTypes();
anotherInstance.setValue1(false);
anotherInstance.setValue2("World");
console.log(anotherInstance.getValue1());
console.log(anotherInstance.getValue2());
