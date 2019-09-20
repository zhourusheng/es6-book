# 变量的解构赋值

```js

```

## 数组的解构赋值

### 基本用法

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

以前，为变量赋值，只能直接指定值。

```js
let a = 1;
let b = 2;
let c = 3;
```

ES6 允许写成下面这样。

```js
let [a, b, c] = [1, 2, 3]
```

上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

```js
let [foo, [[bar], baz]] = [1, [[2], 3]]
foo // 1
bar // 2
baz // 3

let [,,third] = ["foo", "bar", "baz"]
third // "baz"

let [x,,y] = [1, 2, 3]
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4]
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```

如果解构不成功，变量的值就等于undefined。

```js
let [foo] = [];
let [bar, foo] = [1];
```

以上两种情况都属于解构不成功，foo的值都会等于undefined。

另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

```js
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```

如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

```js
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
```
上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）

对于 Set 结构，也可以使用数组的解构赋值。

```js
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
```

事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。




### 默认值

解构赋值允许指定默认值。

```js

```

注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。



## 对象结构赋值

### 简介

解构不仅可以用于数组，还可以用于对象。

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"
```

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```

上面代码的第一个例子，等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致，但是对取值完全没有影响。第二个例子的变量没有对应的同名属性，导致取不到值，最后等于undefined。

如果解构失败，变量的值等于undefined。

```js
let {foo} = {bar: 'baz'};
foo // undefined
```

上面代码中，等号右边的对象没有foo属性，所以变量foo取不到值，所以等于undefined。

对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

```js
// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello
```

上面代码的例一将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。例二将console.log赋值到log变量。

如果变量名与属性名不一致，必须写成下面这样。

```js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
```

这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。

```js
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
```

也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

```js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined
```

在上面代码中，`foo` 是匹配的模式，用于去匹配对应的属性，`baz` 才是变量。真正被赋值的是 `baz` 变量，而不是 `foo` 模式

### 嵌套

与数组一样，解构也可以用于嵌套结构的对象。


### 默认值

对象的解构也可以指定默认值。

```js
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
```

默认值生效的条件是，对象的属性值严格等于undefined。

### 注意点





## 字符串解构赋值

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

```js
let {length : len} = 'hello';
len // 5
```

## 数值和布尔值解构赋值

## 函数参数结构赋值


## 圆括号问题

### 不能使用圆括号的情况

以下三种解构赋值不得使用圆括号。

（1）变量声明语句

（2）函数参数

（3）赋值语句的模式


### 可以使用圆括号的情况


## 用途

变量的解构赋值用途很多。

**（1）交换变量的值**

```js

```

**（2）从函数返回多个值**

```js

```

**（3）函数参数定义**

```js

```

**（4）提取JSON数据**

```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

**（3）函数参数的默认值**

```js

```

## 结构要点

### 数组结构要点
- 数组结构的内部机制是属于“匹配模式”
- 被结构的对象要具有`Iterator`接口
- 在结构指定默认值时，当一个数组成员严格等于`undefined`，默认值才会生效。

### 对象结构要点
- 象的属性没有次序，变量必须与属性同名，才能取到正确的值，与数组不用，数组是按次序排列的，变量的取值由它的位置决定
- 解构失败，取不到值，最后等于undefined
- 变量名与结构的属性名不一致时，必须要写成 `let { foo: baz } = { foo: 'aaa' }`
- 对象机构内部机制，先找到用名属性，再赋予对应的变量