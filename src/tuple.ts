const NameAge = (name: string, age: number): [string, number] => {
  return [name, age];
};

console.log(NameAge("abs", 23));

const details: [string, number?]= ["abs"];
details[1] = 23;
console.log(details);