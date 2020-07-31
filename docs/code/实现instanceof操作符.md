# instanceof 运算符实现原理

## 思路

`instanceof` 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

## 代码

```javascript
function myinstanceof (left, right) {
  if (typeof left !== 'object' || left === null) return false
  while (true) {
    if (left.__proto__ === null) return false
    if (left.__proto__ === right.prototype) return true
    else {
      left = left.__proto__
    }
  }
}
```