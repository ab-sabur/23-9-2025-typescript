const studentCities: [string, string, string] = ["Bogura", "Dhaka", "Rajshahi"];
const studentCities2: string[] = ["Bogura", "Dhaka", "Rajshahi"];
const age: Array<number> = [23, 19, 20];

const arrayOfArray: [[string, number], [string, number]] = [
  ["abs", 23],
  ["abs", 23],
];
const arrayOfArray2: [string, number][] = [
  ["abs", 23],
  ["abs", 23],
];
const arrayOfArray3: Array<[string, number]> = [
  ["abs", 23],
  ["abs", 23],
];

const mixedArray: [string, number] = ["abs", 23];
const mixedArray2: (string | number)[] = ["abs", 23, "bcs", 26, 33];
const mixedArray3: Array<string | number> = ["abs", 23, "bcs", "dbs", 26];

console.log(age.reduce((acc, curr) => acc + curr, 0));
