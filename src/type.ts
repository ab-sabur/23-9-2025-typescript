type studentType = {
    name: string,
    age: number,
}

const student1: studentType = {
    name: "abs",
    age: 23
}

console.log(student1)

//function type
type sumType = (a: number, b: number) => number;

const sum: sumType = (a, b) => {
    return a + b
}

console.log(sum(2, 4))