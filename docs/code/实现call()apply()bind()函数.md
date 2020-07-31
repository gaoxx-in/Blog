#  call apply bind 三者异同

1. 都是为了改变某个函数运行时的上下文（即改变this指向）
2. call 传递的参数，第一个为指定上下文，之后参数顺序传入
3. apply 传递的参数，第一个为指定上下文，之后参数以数组形式传入
4. bind 创建一个新函数，传递的参数第一个为指定上下文，之后参数和函数运行时本身的参数顺序传入
5. bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用

# 实现call()

```javascript
Function.prototype.mycall (context) {
  let context =  context || window
  context.fn = this
  args = Array.from(arguments).slice(1)
  const res = eval('context.fn('+ args +')')
  delete context.fn
  return res
}
```

ES6语法

```javascript
Function.prototype.mycall (context) {
  let context =  context || window
  context.fn = this
  args = [...arguments].slice(1)
  const res = context.fn(...args)
  delete context.fn
  return res
}
```

# 实现apply()

```javascript
Function.prototype.myapply (context, args) {
  let context =  context || window
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

```

# 实现bind()

```javascript
Function.prototype.mybind (context) {
  // 异常处理
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
  }
  let context =  context || window
  let fn = this
  let outerArgs = [...arguments].slice(1)
  return function () {
    args = outerArgs.concat([...arguments])
    return fn.apply(context, args)
  }
}
```

# 如何将 arguments 伪数组对象转换为真正的数组

什么叫伪数组呢？  
- 拥有 length 属性，其它属性（索引）为非负整数(对象中的索引会被当做字符串来处理，这里你可以当做是个非负整数串来理解
- 不具有数组所具有的方法
- 伪数组是一个 Object，而真实的数组是一个 Array
- 数组的length属性，当新的元素添加到列表中的时候，其值会自动更新；设置数组的length属性可以扩展或截断数组；类数组对象的不会

1. ES6的扩展运算符...

```javascript
var args = [...arguments]
```
2. Array.from()

```javascript
var args = Array.from(arguments)
```
3. Array.prototype.slice.call()

```javascript
var args = Array.prototype.slice.call(arguments)
```
4. concat+apply

```javascript
var args = Array.prototype.concat.apply([], arguments)
```
5. for循环

```javascript
var args = []
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i])
}
```