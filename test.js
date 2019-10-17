// // 通过 ES6 class 实现继承
// class Point {  

// }

// // 定义一个 ColorPoint 类， 该类通过 extends 关键字，继承了Point 类所有的属性和方法
// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y) // 调用父类的constructor(x, y)
//     this.color = color
//   }

//   toString() {
//     return this.color + ' ' + super.toString() // 调用父类的toString()
//   }
// }

// // 子类必须在constructor 方法中调用super 方法，否则新建实例时会报错
// // 子类自己的 this对象，必须要通过父类的构造函数完成塑造， 得到父类同样的实例属性和方法
// // 然后对其进行加工, 加上子类自己的实例属性和方法, 不调用super() ，子类得不到 this对象

// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y)  // 子类中写了contructor 必须要写super(), 而且必须写在顶部后面才能拿到this, ES5 则不需要
//     this.color = color
//   }
// }

// let cp = new ColorPoint(25, 8, 'green')

// // new生成的 cp 是 ColorPoint 和 Point 两个类的实例， 与ES5一致
// console.log(cp instanceof ColorPoint)
// console.log(cp instanceof Point)

// 父类的静态方法， 也会被子类继承
// class A {
//   static hello() {
//     console.log('hello world')
//   }
// }

// class B extends A {

// }

// B.hello()

