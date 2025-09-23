const myName: string = "Abdus Sabur";
const isStudent: boolean = true;
const age: number = 23;
const sym1: symbol = Symbol("abs");
const sym2: symbol = Symbol("abs");
const obj = {
  name: myName,
  [sym1]: "Hidden Data",
  sym1: "sym1",
  data: sym2,
};
console.log(obj[sym1]);
console.log(obj.sym1);
console.log(obj.data);
