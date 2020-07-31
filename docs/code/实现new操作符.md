# new 操作符实现原理

## 思路

new 的过程发生了什么？

1. 创建一个新的对象，并继承对象类型的原型
2. 将构造函数的作用域赋给新对象（this指向新对象）
3. 执行构造函数中的代码（为新对象添加属性）
4. 如果`3`函数返回了对象或者函数，则 return 返回值，否则 return 新对象

## 代码

```javascript
function mynew () {
  const fn = Array.prototype.shift.call(arguments)
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, arguments)
  // const isObject = typeof res === 'Object' || res !== null
  // const isFunction = typeof res === 'Function'
  return res instanceof Object ? res : obj
}
```