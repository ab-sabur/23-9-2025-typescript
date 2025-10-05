let value: unknown = "hello";
let value2: unknown = 123;
let type: number = (value as string).length;
let type2: string = (<number>value2).toFixed(2);

console.log(type);
console.log(type2);
