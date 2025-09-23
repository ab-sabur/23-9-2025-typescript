"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentCities = ["Bogura", "Dhaka", "Rajshahi"];
const studentCities2 = ["Bogura", "Dhaka", "Rajshahi"];
const age = [23, 19, 20];
const arrayOfArray = [
    ["abs", 23],
    ["abs", 23],
];
const arrayOfArray2 = [
    ["abs", 23],
    ["abs", 23],
];
const arrayOfArray3 = [
    ["abs", 23],
    ["abs", 23],
];
const mixedArray = ["abs", 23];
const mixedArray2 = ["abs", 23, "bcs", 26, 33];
const mixedArray3 = ["abs", 23, "bcs", "dbs", 26];
console.log(age.reduce((acc, curr) => acc + curr, 0));
