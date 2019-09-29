// // ES5 写法
// // 构造函数开头大写
// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// // 在 Point 原型上定义toString 方法
// Point.prototype.toString = function() {
//   return '(' + this.x + ',' + this.y + ')'
// }

// var p = new Point(1, 2)

// console.log(p) // Point { x: 1, y: 2 }
// console.log(p.toString())  // (1,2)


// ES6 class
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ',' + this.y + ')'
  }
}

var p = new Point(1, 2)

console.log(p) // Point { x: 1, y: 2 }
console.log(p.toString())  // (1,2)
