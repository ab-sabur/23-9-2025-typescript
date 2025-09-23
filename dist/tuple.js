"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NameAge = (name, age) => {
    return [name, age];
};
console.log(NameAge("abs", 23));
const details = ["abs"];
details[1] = 23;
console.log(details);
