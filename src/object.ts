const productInfo: {
  readonly id: number;
  name: string;
  price: number;
  brand: string;
  category?: string;
} = {
  id: 1,
  name: "Laptop",
  price: 45000,
  brand: "HP",
};

productInfo.category = "Laptop";

console.log(productInfo.id);
// productInfo.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

const income: {[key: string]: number} = {
  salary: 50000,
  bonus: 10000,
  sidehustle: 15000,
};

const totalIncome = Object.values(income).reduce((acc, curr) => acc + curr, 0);
console.log(totalIncome);

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
};

const person: Person = {
  name: "abs",
  age: 23,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};
person.role.push("admin"); // Tuple allow to use push method

console.log(person);