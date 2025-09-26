"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
let up = Direction.Up;
let down = Direction.Down;
let left = Direction.Left;
let right = Direction.Right;
console.log(up);
console.log(down);
console.log(left);
console.log(right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "RIGHT";
    Direction2["Right"] = "DOWN";
})(Direction2 || (Direction2 = {}));
let up2 = Direction2.Up;
let down2 = Direction2.Down;
let left2 = Direction2.Left;
let right2 = Direction2.Right;
console.log(up2);
console.log(down2);
console.log(left2);
console.log(right2);
function getDirection(d) {
    return `Players directions is: ${d}`;
}
console.log(getDirection(Direction2.Down));
console.log(Direction[11]);
