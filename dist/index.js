"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = "Abdus Sabur";
const isStudent = true;
const age = 23;
const sym1 = Symbol("abs");
const sym2 = Symbol("abs");
const obj = {
    name: myName,
    [sym1]: "Hidden Data",
    sym1: "sym1",
    data: sym2,
};
console.log(obj[sym1]);
console.log(obj.sym1);
console.log(obj.data);
