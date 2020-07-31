<!--
 * @Author: gaoxin
 * @Date: 2020-05-22 20:38:30
 * @LastEditors: gaoxin
 * @LastEditTime: 2020-06-04 14:03:49
 * @Description: In User Settings Edit
 * @FilePath: /my/vuepress-project/docs/javascript/this.md
--> 
# this

`this` = 当前执行代码的环境对象（在非严格模式下，总是指向一个对象，在严格模式下可以是任意值）

## 普通函数

> this对象是在运行时基于函数的执行环境绑定的，this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同

- 隐式绑定
  - 在全局函数中，`this` 指向 `window`，严格模式下，`this` 指向 `undefined`
  - 直接调用函数，`this` 相当于全局函数的情况
  - 当函数被作为某个对象的方法调用时，`this` 指向这个对象
  - DOM事件绑定， `this` 默认指向绑定事件的元素(一些浏览器在使用非addEventListener的函数动态添加监听函数时不遵守这个约定)

- 显示绑定
  - new + 构造函数，`this` 指向实例对象
  - call/apply/bind，`this` 指向新的上下文


::: tip 优先级
new > call/apply/bind > 对象.方法 > 直接调用
:::

## 箭头函数 () => {}

> 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

- 箭头函数不会创建自己的`this`,它只会从自己的作用域链的上一层继承 `this`
- 由于箭头函数没有自己的`this`指针，通过 `call()` 或 `apply()` 方法调用一个函数时，只能传递参数（不能绑定this），他们的第一个参数会被忽略
- 箭头函数不绑定 `Arguments` 对象
- 箭头函数不能用作构造器，和 `new` 一起用会抛出错误
- 箭头函数没有 `prototype` 属性
- `yield` 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）因此，箭头函数不能用作函数生成器

关于箭头函数的一些其它知识
::: tip 写法
  - 如果箭头函数没有参数，直接写一个空括号即可
  - 如果箭头函数的参数只有一个，也可以省去包裹参数的括号
  - 如果箭头函数有多个参数，将参数依次用逗号(,)分隔，包裹在括号中即可
  - 如果箭头函数的函数体只有一句代码，就是简单返回某个变量或者返回一个简单的JS表达式，可以省去函数体的大括号{}
  - 如果箭头函数的函数体只有一句代码，就是返回一个对象，可以这样写`let fn = name => ({name: name, age: 18})`
  - 如果箭头函数的函数体只有一条语句并且不需要返回值（最常见是调用一个函数），可以给这条语句前面加一个void关键字
:::


以下代码帮助理解：

``` js
var name = 'window'
var obj = {
  name: 'obj'
  getName: function () {
    console.log(this.name)
  }
}
obj.getName()
(obj.getName)()
(obj.getName = obj.getName)()
var fn = obj.getName
fn()
```

```js
var name = 'window'
var obj = {
  name: 'obj'
  getName: function () {
    var that = this
    return function () {
      console.log(this.name)
      console.log(that.name)
    }
  }
}
obj.getName()()
```

``` js
var id = 'Global';

function fun1() {
  // setTimeout中使用普通函数
  setTimeout(function(){
    console.log(this.id);
  }, 2000);
}

function fun2() {
  // setTimeout中使用箭头函数
  setTimeout(() => {
    console.log(this.id);
  }, 2000)
}

fun1.call({id: 'Obj'});     // 'Global'
fun2.call({id: 'Obj'});     // 'Obj'
```

```js
var id = 'GLOBAL';
var obj = {
  id: 'OBJ',
  a: function(){
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  }
};

obj.a();    // 'OBJ'
obj.b();    // 'GLOBAL'
```

```js
var id = 'Global';
// 箭头函数定义在全局作用域
let fun1 = () => {
    console.log(this.id)
};

fun1();     // 'Global'
// this的指向不会改变，永远指向Window对象
fun1.call({id: 'Obj'});     // 'Global'
fun1.apply({id: 'Obj'});    // 'Global'
fun1.bind({id: 'Obj'})();   // 'Global'
```

```js
function Timer(){
  this.s1=0;
  this.s2=0;
  setInterval(() => this.s1++, 1000);
  setInterval(function(){
    this.s2++;
  }, 1000);
}
var timer=new Timer();
setTimeout(()=>console.log('s1:',timer.s1),3100); // 3
setTimeout(()=>console.log('s2:',timer.s2),3100); // 0
```
参考链接：[ES6 - 箭头函数、箭头函数与普通函数的区别](https://www.jianshu.com/p/2e01b9fd210d)