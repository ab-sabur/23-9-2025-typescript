enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}


let up: Direction = Direction.Up
let down: Direction = Direction.Down
let left: Direction = Direction.Left
let right: Direction = Direction.Right

console.log(up)
console.log(down)
console.log(left)
console.log(right)

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "RIGHT",
    Right = "DOWN"
}

let up2: Direction2 = Direction2.Up
let down2: Direction2 = Direction2.Down
let left2: Direction2 = Direction2.Left
let right2: Direction2 = Direction2.Right

console.log(up2)
console.log(down2)
console.log(left2)
console.log(right2)

function getDirection(d: Direction2) {
    return `Players directions is: ${d}`
}

console.log(getDirection(Direction2.Down))
console.log(Direction[11])