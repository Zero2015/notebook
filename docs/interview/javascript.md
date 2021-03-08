# javascript 面试题汇总




## 简述下原型

## 原型链






## javascript 有几种继承方式？

- 原型链继承

```js
function Parent(){
    this.parentName = 'parent';
}

Parent.prototype.getParentName = function(){
    return this.parentName;
}

function Son(){
    this.sonName = 'son';
}

// 继承 Parent，也就是重写了 Son 的原型
Son.prototype = new Parent();
Son.prototype.getSonName = function(){
    return this.sonName;
}

let instance = new Son();
console.log(instance.getSonName, instance.parentName)
console.log(Parent.prototype, instance.__proto__)




```



- 借用构造函数
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承
- ES6 class 继承

## new 操作符原理是什么？模拟实现。

## call、apply、bind 有什么区别？模拟实现。






























完整的JavaScript由三部分组成

1、ECMAScript，脚本语言的标准化规范
2、DOM 文档对象模型
3、BOM 浏览器对象模型

ECMAScript组成部分
- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 对象

DOM
BOM 

## 数据类型

- js种有哪些数据类型，它们的区别是什么？

js 的数据类型分`基本数据类型`和`引用数据类型`, 区别是基本数据类型操作值，引用数据类型操作空间地址。

- 基本数据类型
String 字符串
Number 数值
Boolean 布尔
Null 
Undefined
Symbol 唯一标识符（ES6)

- 引用数据类型
Object 

```js
typeof ''; // string
typeof 1; // number
typeof true; // boolean
typeof false; // boolean
typeof undefined; // undefined
typeof Symbol(); // symbol

typeof null; // object
typeof Object(); // object
typeof []; // object
typeof {}; // object

typeof function(){}; // function
```

- 如何检测数据类型？

- `typeof null` 为什么是 object ?


## this 指向

## 什么是闭包



## 深浅拷贝的区别以及实现

## new 操作符原理是什么？模拟实现。
## call、apply、bind 有什么区别？模拟实现。
## 什么是 promise ？模拟实现。
## 如何实现数组扁平化？
## 如何实现数组去重？


# 异步解决方案的发展以及优缺点
gennerator
promise
async/await

# set map weakSet weakMap 的区别


## 什么是防抖节流？有什么区别？模拟实现。
## 为什么 0.1 + 0.2 != 0.3 ？如何解决？