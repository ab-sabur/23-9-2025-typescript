let userId: number | string = 123
console.log(userId)
userId = "123"
console.log(userId)

type userIdType = number | string
let user2: userIdType = 123
console.log(user2)
user2 = "123"
console.log(user2)

type role = "admin" | "student" | "teacher"
const user: role = "admin"
// const user2: role = "user"