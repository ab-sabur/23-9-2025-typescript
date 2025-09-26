interface User {
    readonly name: string
}

const user1: User = {
    name: "abs"
}

// user1.name = "dbs"

console.log(user1)

interface studentType extends User {
    roll: number,
    city?: string
}

const student1: studentType = {
    name: "cbs",
    roll: 3444,
    city: "bogura"
}

console.log(student1)

interface functionType {
    (a: number, b: number): number
}

const add: functionType = (a, b) => a + b

console.log(add(5, 6))