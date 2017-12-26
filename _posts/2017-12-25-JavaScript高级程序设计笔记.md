---
layout: post
title: 《JavaScript高级程序设计》
subtitle: ReadingNotes
date: 2017-12-25
header-img: img/post-bg-2015.jpg
catalog: true
tags:
 - JavaScript
---

# JavaScript实现

ECMA-262——定义一种名为 ECMAScript(ek-ma-script) 的新脚本语言的**标准**.

ECMA-262 要求支持 Unicode 标准（从而支持多语言开发），而且对象也变成了平台无关的。

JavaScript有三部分组成：

- 核心--ECMAScript
- 文档对象模型--DOM
- 浏览器对象模型--BOM

Web浏览器是 ECMAScript 实现可能的**宿主环境**之一。

宿主环境不仅提供实现，还提供扩展——如 DOM.

Node和Adobe Flash也是宿主环境。

## DOM

针对XML，但经过扩展用于HTML的应用程序编程接口。

DOM 级别：

DOM1 级有两个模块：**DOM 核心**和 **DOM HTML**

DOM2 级引入了新模块：

- DOM 视图
- DOM 事件
- DOM 样式
- DOM 遍历和范围

DOM3 级 新增：

- DOM 加载和保存
- DOM 验证

ps:有些书中所谓的DOM0 级实际上是指 DHTML.

## BOM

根本上来讲，BOM 只处理浏览器窗口和框架；

习惯上，也把所有针对浏览器的JavaScript扩展算作BOM的一部分。

如，navigator对象，location对象，screen对象，XMLHttpRequest...

# 在HTML中使用JavaScript

## script 标签元素

### 一些属性

- async:可选。表示应该立即下载脚本，但不妨碍页面中其他操作。只对外部脚本文件有效。
- charset:可选。通过src属性指定代码字符集。大多数浏览器忽略其值。
- defer:可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。
- type:MIME类型，默认text/javascript

### 标签位置

现代Web应用程序一般会放在\<body>元素中页面内容的后面，先呈现页面，再执行js,加快访问速度。

### 延迟脚本

大多数浏览器会忽略defer属性；

如果是IE7及以下版本，支持defer属性：

1. 一个html最好只有一个延迟脚本；
2. 延迟脚本最好放在页面底部。

### 异步脚本

因为异步脚本执行顺序不确定:

1. 要确保互相之间**不依赖**；
2. 不要在加载期间修改DOM.

## noscript 标签元素

该元素中的内容在两种情况下会显示出来：

1. 浏览器不支持脚本；
2. 浏览器支持脚本，但被禁用。

# 基本概念

## 语法

### 区分大小写

### 标识符

==变量、函数、属性的名字，函数的参数==

> 规则：
>
> 首个字母必须是==字母、下划线、$==;
>
> 其他字符可以是字母、下划线、$、数字。

### 严格模式

整个脚本启用：在顶部添加如下代码

```javascript
"use strict";
```

在函数内部启用：代码如下

```javascript
function foo{
  "use strict";
  //do sth...
}
```

> IE10+支持。

### 语句

最好每句结尾加上分号。

在控制语句使用代码块是最佳实践。

###  变量

var 操作符，局部变量，弱类型。

> 最佳实践是把弱类型当作强类型来用。

不用var 操作符定义的变量，将作为全局变量，==不推荐==。

[关于var声明变量更详细的说明以及**变量提升(hoisting)**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)

### 数据类型

**基本数据类型：==undefined、null、boolean、number、string==**

**复杂(引用)数据类型：==Object==**

#### typeof 操作符

==用来检测基本数据类型，除了null.==

> typeof  null 会返回 "object";
>
> typeof function(){}  会返回 "function"

#### undefined 类型

只有一个特殊的值——undefined.

```javascript
undefined===undefined;  //返回true
```

var 声明变量但不初始化，这个变量的值默认undefined.

```javascript
var msg;
alert(msg);	//"undefined"
alert(foo);	//"报错"
typeof foo;	//"undefined"
/* 区别：
	alert();是函数，参数作为变量需要声明；
	typeof只是操作符，返回逻辑上的“未定义”.
*/
```

#### null 类型

最佳实践：

> 如果定义的变量用来保存对象，最好显式的将其初始化为null.
>
> 避免初始化为undefined.

null 与 undefined

```javascript
alert(null==undefined);//true
/* == 操作符会进行操作数的转化，所以导致相等*/
alert(null===undefined);//false
```

#### boolean 类型

字面值：true false.

#### number 类型

十进制	最基本的数值字面量格式。

八进制	==0==打头,严格模式下无效，js引擎报错。

十六进制	==0x==打头

==算术计算时，所有八进制和十六进制数值都会转成十进制==

> +0 == -0;	//true

##### 浮点数值

默认情况下，ECMAScript 会将那些小数点后带有6个0以上的数值转为科学计数法。

==永远不要测试某个特定的浮点数值==

```javascript
var a=0.1;
var b=0.2;
var c=a+b;
alert(c==0.3);//false 实际c的值为0.30000000000000004
```

##### 数值范围

Number.NEGATIVE_INFINITY(-Infinity)
Number.MIN_VALUE
==isFinite();//true==
Number.MAX_VALUE
Number.POSITIVE_INFINITY(Infinity)

##### NaN

特殊的数值。

ECMAScript中，任何==数值范围以外==值除以0返回NaN.

```javascript
NaN==NaN;//false
```

isNaN() 函数，检测任何类型，测试是否“不是数值”。

> isNaN()也适用于对象：
>
> 1. 调用对象的valueOf()方法，确定是否可转换为数值；
> 2. 若不能，基于valueOf()返回值再调用toString(),测试toString()返回值；

##### 数值转换

Number()、parseInt()、parseFloat()

Number()可用于任何类型，规则：

> if boolean:true->1,false->0;
>
> if number:return();
>
> if null:0;
>
> if undefined:NaN;
>
> if string:"number"->number;""->0;NaN;
>
> if object:object.valueOf()->:if NaN:object.toString()->if string

parseInt()/parseFloat()更加适合用来把字符串转化为数字。

> > parseInt也可以不按八进制、十六进制格式书写第一个参数，可在第二个参数指明进制即可：parseInt(字符串,进制数)  如
> >
> > ```javascript
> > parseInt(70,8); //56
> > parseInt("AF",16);//如果不写进制，会默认按十进制转化成NaN
> > ```
>
> > parseFloat() 只解析十进制，也没有第二个参数。
> >
> > 八进制会先检测是否为有效的八进制数字，否则忽略前面的0，按十进制解析.
> >
> > 十六进制字符串直接解析为0.

#### string 类型

字符串，最好用双引号。

特点：**不可变**。

##### 转换为string

除了null/undefined，其他js数据类型都有一个==toString()==方法。

toString()默认输出十进制字符串，可传入表示进制基数的参数，输出需要的进制表示的字符串。

==String()函数==，可转任何类型为string,规则：

> if toString():return toString();
>
> if null:return "null";
>
> if undefined:return "undefined";

==a + "" ->"a"==

#### Object 类型

所有Object类型都有下列属性和方法：

> **constructor**:构造器
>
> **hasOwnProperty(propertyName)**:检查给定的属性（propertyName）在当前对象**实例**中是否存在。o.hasOwnProperty("name")
>
> **isPropertyOf(object)**:检查传入对象（object）是否为传入对象的原型
>
> **propertyIsEnumerable(properyName)**:检查给定属性是否可用for-in枚举
>
> **toLocalString()**;
>
> **toString()**;
>
> **valueOf()**:返回对象的字符串、数值、布尔值表示

### 操作符

算术操作符、位操作符、关系操作符、相等操作符

在操作对象时，相应的操作符会调用对象的valueOf()和toString()方法

#### 一元操作符

==自增 ++/自减 --==

```javascript
var a=2;
var b=20;
var num1 = a-- + b;//22
var num2 = a + b;//21
var num3 = ++a +b;//22
/*
	a-- 应该看作一个整体，他的值是对a的值的一份copy,做完与b的加法运算之后，然后自减1，最后把自减后的值赋给a
	同理，++a 也应该看作一个整体，不过他是先自增1，然后加法运算，自增后的值赋值给a
*/
```

#### 布尔操作符

##### 逻辑非 !

规则：

> if object :back: false
>
> if "" :back: true
>
> if "string" :back: false
>
> if 0 :back: true
>
> if not 0 :back: false
>
> if null :back: true
>
> if NaNt :back: true
>
> if undefined :back: true

##### 逻辑与 &&

规则：

>if object && foo :back: foo
>
>if foo(true) && object :back: object
>
>if object1 && object2 :back: object2
>
>if null/foo && foo/null :back: null
>
>if NaN/foo && foo/NaN :back: NaN
>
>if undefined/foo && foo/undefined :back: undefined

##### 逻辑或 ||

>if object && foo :back: object
>
>if foo(false) && object :back: object
>
>if object1 && object2 :back: object1
>
>if null && null :back: null
>
>if NaN && NaN :back: NaN
>
>if undefined && undefined :back: undefined

#### 乘性操作符

乘法-*	除法-/	求模-%

##### 乘法

规则：

> if number * number :back: number
>
> if NaN * number :back: NaN
>
> if Infinity * 0 :back: NaN
>
> if Infinity * !0 :back:+-Infinity
>
> if Infinity * Infinity :back: Infinity
>
> if foo* number :back: Number(foo)*number

##### 除法

规则与乘法基本一样

##### 求摸

同上

#### 加性操作符

#### 关系操作符

#  面向对象的程序设计

ECMA-262 把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。” 

## 理解对象

### 属性类型

==ECMA-262 第 5 版在定义只有内部才用的特性（attribute）时，描述了属性（property）的各种特征。==
ECMA-262 定义这些特性是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了表示特性是内部值，该规范把它们放在了两对儿方括号中，例如[[Enumerable]]。 

ECMAScript 中有两种属性：==数据属性==和==访问属性==

- 数据属性包含一个数据值的位置。在这个位置可以读取和写入值。有四个==特性(attibute)==：

> **[[Configurable]]**：表示对象的属性能否delete从而重新定义属性，能否修改属性的特性。对直接定义在对象上的属性，默认true.(这个attribute权限最重)
>
> **[[Enumerable]]**：表示能否通过 *for-in* 返回属性。对直接定义在对象上的属性，默认true.
>
> **[[Writable]]**：表示能否修改属性的值。对直接定义在对象上的属性，默认true.
>
> **[[Value]]**：包含这个属性的数据值。读写属性值都从这里读写，默认undefined.

要修改对象属性默认的特性，必须使用ECMAScript5 的==Object.defineProperty()==方法。三个参数：属性所在**对象**、引号引起来的**属性名**、**描述符对象**。

> 描述符（descriptor）对象的属性必须是：configurable、enumerable、writable、value.
>
> 在调用 Object.defineProperty() 方法时，如果不指定描述符对象的属性(configurable、enumerable、writable)，默认都为false

- 访问器属性不包含数据值。包含一对 getter/setter 函数，在读取访问器属性时，调用getter 返回有效值；写入访问器属性时，调用 setter 传入新值。四个特性：

> **[[Configurable]]**：表示对象的属性能否 *delete* 从而重新定义属性，能否修改属性的特性。对直接定义在对象上的属性，默认true.(这个attribute权限最重)
>
> **[[Enumerable]]**：表示能否通过 *for-in* 返回属性。对直接定义在对象上的属性，默认true.
>
> **[[Get]]**：在读取属性时调用的函数。默认值为 undefined.
>
> **[[Set]]**：在写入属性时调用的函数。默认值为 undefined.

访问器属性不能直接定义，必须使用 Object.defineProperty()来定义 

### 定义多个属性 & 读取属性的特性

由于为对象定义多个属性的可能性很大，ECMAScript 5又定义了一个==Object.defineProperties()==方法。利用这个方法可以通过描述符一次定义多个属性。这个方法接收**两个对象参数**：第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应。

```javascript
var book={};
Object.defineProperties(book,{
  _year:{
    configurable:false,
    enumerable:true,
    writable:true,
    value:2016},
  edition:{
    configurable:false,
    enumerable:true,
    writable:true,
    value:1},
  year:{
    configurable:false,
    enumerable:false,
    get:function(){
      return this._year;
    },
    set:function (newValue) {
      if(newValue > 2016){
        this._year=newValue;
        this.edition += newValue -2017;
      }
    }
  }
});
var desc = Object.getOwnPropertyDescriptor(book,"_year");
console.dir(desc);
desc = Object.getOwnPropertyDescriptor(book,"year");
console.dir(desc);
book.year=3333;
console.dir(book);
```

## 创建对象

### 工厂模式

```js
function createPerson(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
		alert(this.name);
    }
    return o;
}
var person = createPerson("kiki",33);
```

缺点：没有解决对象识别问题。

### 构造函数模式

```js
// 构造函数模式
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
		alert(this.name);
    }
}
var person = new Person("kiki",33);
```

特点：

>   没有显式地创建对象；
>
>   直接将属性赋给了 this 对象；
>
>   没有 return 语句。

创建 Person 实例，必须 new 操作符。new 的过程：

>   1.  创建一个新对象；
>   2.  将构造函数的作用域赋给新对象（因此 this 指向了这个新对象）；
>   3.  执行构造函数中的代码（为这个新对象添加属性）；
>   4.  返回新对象。

缺点：使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。 

### 原型模式

#### 理解原型对象

我们创建的==每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。==使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

```js
function Person() {
}

Person.prototype.name = "kiki";
Person.prototype.age = 33;
Person.prototype.sayName = function () {
	alert(this.name);
};
person = new Person();
person.sayName();
console.log(person);
```

**原型对象——构造函数——实例对象**之间的关系

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/prototype-1.png)

可以通过 **isPrototypeOf()** 方法来确定对象之间是否存在这种关系。从本质上讲，如果[[Prototype]]指向调用 isPrototypeOf()方法的对象（Person.prototype），那么这个方法就返回 true，如下所示：

```js
alert(Person.prototype.isPrototypeOf(person));//true
```

ES 5新增方法 Object.getPrototypeOf(),返回 [[Prototype]] 的值：

```js
console.log(Object.getPrototypeOf(person)===Person.prototype);
console.log(Object.getPrototypeOf(person));
```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/prototype-2.png)

可以通过对象实例访问prototype的值，但是对象实例不能重写prototype中的值。当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性；

```js
person.age=12;
```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/prototype-3.png)

#### 原型与 in 操作符

有两种方式使用 in 操作符：单独使用和在 for-in 循环中使用。 

在单独使用时， in 操作符会在通过对象能够访问给定属性时返回 true，==无论该属性存在于实例中还是原型中。==

在使用for-in循环时，返回的是所有能够通过对象访问的、可枚举的（enumerated）属性，其中既包括存在于实例中的属性，也包括存在于原型中的属性。屏蔽（比如手动添加toString属性，屏蔽了原型中的toString）了原型中不可枚举属性（即将[[Enumerable]]标记为 false 的属性,ES 5中toString/constructor/prototype都是默认false,不可枚举）的实例属性也会在 for-in循环中返回，因为根据规定，所有开发人员定义的属性都是可枚举的。

要取得对象上所有可枚举的实例属性，可以使用 ECMAScript 5 的 ==Object.keys()==方法。这个方法接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。 

```js
function Person(){}
Person.prototype = {
  name:"kik",
  age:12,
  sayName:function(){
    alert(this.name);
  }
}
var keys = Object.keys(Person.prototype);
alert(keys);//"name,age,sayName"

var person = new Person();
person.name = "nik";
var pkeys = Object.keys(person);
alert(pkeys);//"name"
```

#### 几点注意

关于**给原型添加属性**和**重写原型对象**：

给原型添加属性，先看一个例子：

```js
var person = new Person();
Person.prototype.sayName = function(){//给原型对象添加属性
  alert(this.name);
}
person.sayName();//没问题
```

再看一个例子：

```js
function Person() {
}
var p1 = new Person();
Person.prototype={// 重写原型对象
  name:"kiki",
  sayName:function () {
    alert(this.name);
  }
}
//p1.sayName(); //error
var p2 = new Person();
p2.sayName();//没问题
```

两种差异的原因：

>   给原型对象添加属性，constructor 指向原型对象的指针没有变，自然创建的实例对象指向原型的指针也没有变；
>
>   所以 person 指向的还是原来的 prototype 对象，可以 sayName;
>
>   而重写原型对象，导致 constructor 指向了新的 prototype 对象，所以重写原型对象之前创建的实例 p1访问不了 sayName,p2 却可以。
>
>   可以用函数 Object.getPrototypeOf()查看 p1 和 p2 的原型对象：
>
>   ```js
>   console.log(Object.getPrototypeOf(p1));
>   console.log(Object.getPrototypeOf(p2));
>   ```
>
>   ![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/prototype-4.png)

从上面的例子中还可以看出一点：**重写原型创建的对象的构造器是隐式的Object,而不是显式的Person**，验证：

```js
alert(p2.constructor===Person);//false
alert(p2.constructor===Object);//true
```
#### 关于原生对象的原型

不推荐在产品化的程序中修改原生对象的原型。如果因某个实现中缺少某个方法，就在原生对象的原型中添加这个方法，那么当在另一个支持该方法的实现中运行代码时，就可能会导致命名冲突。而且，这样做也可能会意外地重写原生方法。 

原型模式创建对象的缺点：原型模式的最大问题是由其共享的本性所导致的。

原型中所有属性是被很多实例共享的，这种共享对于函数非常合适。对于那些包含基本值的属性倒也说得过去，毕竟（如前面的例子所示），通过在实例上添加一个同名属性，可以隐藏原型中的对应属性。然而，对于包含引用类型值的属性来说，问题就比较突出了。来看下面的例子：

```js
function Person(){}
Person.prototype = {
  name:"kiki",
  friends:["jack","pony"]
}
var p1 = new Person();
var p2 = new Person();

p1.friends.push("van");
alert(p1.friends);//"jack,pony,van"
alert(p2.friends);//"jack,pony,van"
alert(p1.friends===p2.friends);//true 
```



### 组合使用构造函数模式

**创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。**==构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性==。结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。另外，这种混成模式还支持向构造函数传递参数；可谓是集两种模式之长。 

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"];
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    alert(this.name);
  }
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Count,Van"
alert(person2.friends); //"Shelby,Count"
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true
```

这种构造函数与原型混成的模式，是目前在 ECMAScript 中使用最广泛、认同度最高的一种创建自定义类型的方法。可以说，这是用来定义引用类型的一种默认模式。 

### 动态原型模式

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  if (typeof this.sayName != "function") {
    Person.prototype.sayName = function () {
      alert(this.name);
    }
  }
}

var person = new Person("kik", 33);
person.sayName();
```

可以看成混合式的变种写法。

### 寄生构造函数模式

除了使用 new 操作符并把使用的包装函数叫做构造函数之外，这个模式跟工厂模式其实是一模一样的。 

```js
function Person(name){
  var o = new Object();
  o.name = name;
  o.sayName = function(){
    alert(this.name);
  }
  return o;
}
var person = new Person("kik");
person.sayName(); //"kik"
```

这个模式可以在特殊的情况下用来为对象创建构造函数。假设我们想创建一个具有额外方法的特殊数组。由于不能直接修改 Array 构造函数，因此可以使用这个模式。 

```js
function SpecialArray(){
  var arr = new Array();//创建数字
  arr.push.apply(arr,arguments);// 添加值
  arr.toPipedString = function(){
    return this.join("|");
  }
  return arr;
}
var colors = new SpecialArray("red","orange","yellow");
alert(colors.toPipedString());// "red|orange|yellow"
```

>   用这种方法创建的对象调用的构造器还是Array的构造器，而非SpecialArray. colors instanceof SpecialArray ->false.
>
>   除非特殊情况，不推荐这么写。

### 稳妥构造函数模式

道格拉斯·克罗克福德（Douglas Crockford）发明了 JavaScript 中的**稳妥对象（durable objects）**这个概念。

==所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。==

稳妥对象最适合在一些安全的环境中（这些环境中会禁止使用 this 和 new），或者在防止数据被其他应用程序（如 Mashup程序）改动时使用。稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：

>   一是新创建对象的实例方法不引用 this；
>
>   二是不使用 new 操作符调用构造函数。按照稳妥构造函数的要求，可以将前面的 Person 构造函数重写如下。

```js
function Person(name){
  //创建需要返回的对象
  var o = new Object();
  
  //可以在这里定义私有变量和函数
  
  //添加方法
  o.sayName = function(){
    alert(name);
  }
  
  //返回对象
  return o;
}
```



## 继承

ECMAScript ==只支持实现继承==，而且其实现继承**主要是依靠原型链来实现的**。 

### 原型链

ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。其基本思想是**利用原型让一个引用类型继承另一个引用类型的属性和方法**。 

简单回顾**构造函数、原型、实例**的关系：

>   每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。 

```js
	function SuperType() {
        this.prototype=true;
    }
    SuperType.prototype.getSuperValue = function () {
        return this.prototype;
    };
    function SubType() {
        this.subproperty = false;
    }
    // 继承了SuperType
    SubType.prototype = new SuperType();

    SubType.prototype.getSubValue = function () {
        return this.subproperty;
    };

    var instance = new SubType();
    console.log(new SuperType());
    console.log(instance);
```

结果分析：

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/inherit.png)

>   确定原型与实例的关系：instanceof、isPrototypeOf




### 借用构造函数

### 组合继承

### 原型式继承

### 寄生式继承

### 寄生组合式继承

## 函数表达式

定义函数的方法有两种：**函数声明**、**函数表达式**

-   关于函数声明，它的一个重要特征就是**函数声明提升**（function declaration hoisting），意思是在执行
    代码之前会先读取函数声明。 
-   函数表达式与其他表达式一样，在使用前==必须先赋值==。

### 递归

-   arguments.callee

-   [为什么ES5严格模式删除了arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)

### 闭包

[参见：关于闭包-Closure](https://sunwgit.github.io/2017/12/25/%E5%85%B3%E4%BA%8E%E9%97%AD%E5%8C%85-Closure/)

### 模仿块级作用域

js不会警告是否多次声明了同一个变量，对后续重复声明视而不见，只会对变量执行初始化(重新赋值）。[具体参见](#变量)

```js
var a=3;//第一次声明以及初始化
var a;//第二次声明，js不会理会
var a = 9;//第三次声明，并且初始化，但js自动忽略var,只当作初始化语句`a=9;`对待
```

匿名函数可以用来模仿块级作用域，也即**私有作用域**

```js
(function(){
  //块级作用域范围
})();
```

**优点：**

1.  一般来说，我们都应该尽量少向全局作用域中添加变量和函数。在一个由很多开发人员共同参与的大型应用程序中，过多的全局变量和函数很容易导致命名冲突。而通过创建私有作用域，每个开发人员既可以使用自己的变量，又不必担心搞乱全局作用域；
2.  这种做法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完毕，就可以立即销毁其作用域链了。 

### 私有变量

任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量。

私有变量包括*函数的参数、局部变量和在函数内部定义的其他函数*。 

有权访问私有变量和私有函数的公有方法称为**特权方法**（privileged method）。

有两种在对象上创建特权方法的方式。第一种是在构造函数中定义特权方法，基本模式如下:

 ```js
function MyObject(){
  // 私有变量和私有函数
  var privateVar = 9;
  
  function privateFun(){
    return false;
  }
  
  //特权方法
  this.publicMeth=function(){//this->实例对象 .publicMeth->设置publicMeth为this的可访问属性
    privateVar++;//操作私有变量
    return privateFun();//调用私有方法
  };
}
console.log(new MyObject());//查看公共属性
 ```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/private-var-1.png)

缺点：必须依赖[构造函数模式](#构造函数模式)创建对象。

#### 静态私有变量

通过在私有作用域中定义私有变量或函数，创建特权方法：

```js
(function(){
 // 私有变量和私有函数
  var privateVar = 9;
  
  function privateMeth(){
    return false;
  }
  //构造函数
  MyObject = function(){
  };
  
  //共有、特权方法
  MyObject.prototype.publicMeth = function(){
    privateVar++;
    return privateMeth();
  }
})();
console.log(new MyObject());//MyObject没有var声明，所以是一个全局变量，可以在外部访问
```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/private-var-2.png)

ps:这个模式在定义构造函数时并没有使用函数声明，而是
使用了函数表达式 -->函数声明至创建局部变量，因此MyObject用了函数表达式的形式-->但在严格模式下，未经声明赋值会导致错误。

==这个模式与在构造函数中定义特权方法的主要区别，就在于私有变量和函数是由实例共享的。==

由于特权方法是在原型上定义的，因此所有实例都使用同一个函数。

```js
(function () {
  var name = "";
  Person = function (value) {
    name = value;
  };

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (value) {
    name = value;
  };
})();

var person1 = new Person("Nicholas");
console.log(person1.getName());//"Nicholas"
person1.setName("Greg");
console.log(person1.getName());//"Greg"

var person2 = new Person("Michael");
console.log(person1.getName());//"Nicholas"
console.log(person2.getName());//"Nicholas"
```

`Person` 构造函数与 `getName()`和 `setName()`方法一样，都有权访问私有变量 `name`。在这种模式下，变量 `name` 就变成了一个静态的、由所有实例共享的属性。也就是说，在一个实例上调用 `setName()`会影响所有实例。而调用 `setName()`或新建一个 `Person` 实例都会赋予 `name` 属性一个新值。 

#### 模块模式

```js
var singleton = function () {
	//私有变量 私有函数
	var privateVar = 9;

	function privateFunc() {
		return false;
	}

	//特权、共有方法属性
	return {
		publicProperty: true,
		publicMeth: function () {
			privateVar++;
			return privateFunc();
		}
	};
}();
console.log(singleton);
```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/private-var-3.png)

没有构造器，保证了单例，直接返回一个对象，且永远只有一个。

#### 增强的模块模式

在返回对象之前加入对其增强的代码。这种增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加某些属性和（或）方法对其加以增强的情况：

```js
function CustomType() {

}

var singleton = function () {
	//私有变量和私有函数
	var privateVar = 9;

	function privateFun() {
		return false;
	}

	//创建对象
	var obj = new CustomType();

	//添加特权/共有属性方法
	obj.publicProperty = true;
	obj.publicMeth = function () {
		privateVar++;
		return privateFun();
	};

	//返回对象
	return obj;
}();

console.log(singleton);
```

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/private-var-4.png)

### 总结

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/fun-ex-sumary.png)

---==JS的基础到此结束！==---

---

# BOM

## window对象

BOM 的核心对象——window,表示浏览器的一个实例。

>   JS 访问浏览器的接口；
>
>   ECMAScript 规定的 *Global* 对象。

### 全局作用域

由于 window 对象同时扮演着 ECMAScript 中 Global 对象的角色，因此所有在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法。 

```js
var age = 29;
window.color = "red";
delete window.age;//var声明的全局变量不能delete成功，因为[[Configurable]]为false,IE<9报错
delete window.color;//成功，IE<9报错

var newValue = oldValue;//oldValue未定义，报错
var newValue = window.oldValue;//不报错，oldValue值为undefined
```

### 窗口关系

若页面包含框架，每个框架都有自己的window对象，保存在frames集合中。frames集合可以通过数值索引（从 0 开始，从左至右，从上到下）或者框架名称来访问相应的 window 对象。每个 window 对象都有一个 name 属性，其中包含框架的名称。

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/frame.png)

top:该对象始终指向最外层框架，即浏览器窗口；

parent:该对象始终指向当前frame的上层frame;

top===parent:页面没有frame,他们都指向唯一的window;

self:始终指向window.

### 窗口位置

| 浏览器属性      | 含义             | 备注              |
| ---------- | -------------- | --------------- |
| screenLeft | 表示窗口相对于屏幕左边的位置 | Firefox为screenX |
| screenTop  | 表示窗口相对于屏幕顶部的位置 | Firefox为screenX |

moveTo():参数为新位置的x和y坐标值，不适用于框架，只对外层window对象适用。

moveBy():参数为x和y轴位移的像素值,不适用于框架，只对外层window对象适用。

### 窗口大小

| 浏览器属性                       | IE9+/Firefox/Safari                     | Chrome       |
| --------------------------- | --------------------------------------- | ------------ |
| innerWidth<br />innerHeight | 表示视口即页面视图区的大小（减去边框宽度）                   | 视口viewport大小 |
| outerWidth<br />outerHeight | 返回浏览器窗口本身尺寸（无论从最外层window对象还是从某个frame访问） | 视口viewport大小 |

`document.documentElement.clientWidth`和`document.documentElement.clientHeight`保存了页面视口信息。

标准模式：`document.compatMode==="CSS1Compat"`

混杂模式：`document.compatMode==="BackCompat"`

[关于document.compatMode](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/compatMode)

调整浏览器窗口大小：`resizeTo()`、`resizeBy()`

### 导航和打开窗口

[window.open()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)

### 间歇调用和超时调用

JavaScript是单线程语言，但允许设置超时值来和间歇时间来调度代码在特定时间执行。

超时调用：`setTimeOut()`,取消超时调用 `clearTimeout()`

间歇调用：`setInterval()`,取消间歇调用 `clearInterval()`

### 系统对话框

`alert()`、`confirm()`、`prompt()`

它们的外观不受css控制，只跟系统和浏览器有关；

通过它们打开的对话框是**同步和模态**的，即显示对话框时代码会暂停执行，关掉窗口代码恢复执行。

## location对象

提供了当前窗口中加载的文档有关的信息，并有一些导航功能。

既是window对象的属性，也是document对象的属性：`window.location`和`document.location` 引用的是同一个对象。详细请[参考...](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

location对象的一些属性：

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/js-location-prop.png)

除了hash,其他属性都会导致页面重新加载。

`location.reload()` 使页面以*最有效*[^ ]的方式重新加载。



`location.assign()` 相当于window.location/location.href,会留下历史记录。如果想在修改 `URL` 之后，不留下历史记录，可以使用`location.replace()`.

## navigator对象

## screen对象

## history对象

# DOM

## 节点层次

### Node类型

### Document类型

### Element类型

### Text类型

### Comment类型

### CDATASection类型

### DocumentType类型

### DocumentFragment类型

### Attr类型

## DOM操作技术

### 动态脚本
### 动态样式
### 操作表格
### 使用NodeList



[^1]: 如果不传参数，优先从浏览器缓存重新加载；如果传入参数 true,则强制从服务器获取数据重新加载。