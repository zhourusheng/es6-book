# Promise

## Promise 的含义


## Promise 基本用法



## Promise.prototype.then()


## Promise.prototype.catch()


## Promise.prototype.finally()



## Promise.all()


## Promise.race()


## Promise.resolve()


## Promise.reject()


## 应用


## Promise.try()


## JS 异步编程四种方案

**（1）回调函数**

这是异步编程最基本的方法。

假定有两个函数f1和f2，后者等待前者的执行结果。

```js
f1()

f2()
```

**（2）事件监听**

另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

还是以f1和f2为例。首先，为f1绑定一个事件（这里采用的jQuery的写法）。

```js
f1.on('done', f2)
```

**（3）发布订阅**


**（4）Promises对象**


## 参考资料：
- [Javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html?bsh_bid=1736591883)