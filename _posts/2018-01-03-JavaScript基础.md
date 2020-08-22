---
load: post
title: JavaScript 基础学习笔记
date: 2018-01-03
header-img: img/post-bg-desk.jpg
catalog: true
tags: JavaScript
---



# js的引入方式

1.  行内式  onclick 事件  在项目中不用

    ```html
    <div onclick="alert(1);">js 第一天</div>
    ```

    

2.  内嵌式 script 元素标签 在项目中偶尔使用，不建议使用

    ```html
    <script>
        alert(1);
    </script>
    ```

    

3.  外链式  script标签，src外部js文件引入，一般放在最后面，推荐

    ```html
    <script src="index.js" type="text/javascript">
    	// 这里写的js代码无效  
    </script>
    ```

    >   js用来做页面的动态交互，一般放在\</body>之前或之后，让浏览器先加载静态资源然后js渲染效果。

# js的输出方式

## alert

警告框，默认调用 `toString` 方法，返回一个字符串。

## confirm

确认框，当点击弹出框的*确定*按钮时，返回`true`,点击*取消*,返回`false`.

## prompt

输入提示框，返回输入框中的内容（字符串），如果点击*确认*，但没有输入，返回空字符串，点击*取消*，返回`null`.

```js
console.log(prompt("确认？")==="");//true
console.log(typeof prompt("确认？"));//"string"
```

## Console 控制台输出

`console.log()` 不调用 `toString` 方法。优势：输出数据类型更加明确，是什么类型就输出什么类型，不会 `toString` 强转成字符串。

>   小技巧：
>
>   当输出颜色为黑色时，说明输出的是字符串
>
>   当输出的颜色为蓝色时，说明输出的是数字、boolean

`console.dir()` 比 `console.log()` 输出更为详细

`console.table()` 以表格的形式输出，一般用在 *JSON* 对象中使用

## 写入页面

`document.write()`  很少用

# Js技术的基本构成

ECMAScript——核心，标准  

DOM:Document Object Model,操作页面  

BOM:Browser Ojbect Model，操作浏览器属性

# 变量和常量

**变量**：值是可以改变的,用来存储常量或者对象的地址

js中定义变量的方式：*var* 操作符

```js
var name = "kik";
```

变量命名遵循*驼峰命名法*.

>   以**字母、下划线`_`、$**开头
>
>   以**字母、下划线`_`、$、数字**组成
>
>   不能使用*关键字、保留字*
>
>   约定俗成的规范：
>
>   `$` 开头的一般是框架的变量
>
>   `_` 开头一般是私有的变量

**常量**：字面值，不可修改

es6开始，定义一个常量，用 `const` 操作符

```js
const name = "nik";//name 作为一个常量，其值不可修改
```

# 数据类型

## 基本数据类型

number/string/null/undefined/boolean

## 引用数据类型 Object

Obejct/Array/Function/Date/RegExp/Error

### 数据类型的检测

`typeof` 一般用来检测基本数据类型

两种特殊情况：
```js
typeof function(){}//"function"
typeof null;//"object"
// 其他所有的引用类型用 typeof 检测得到的均是 "object" ,没有检测意义
// 还有一种 typeof 0/1;检测一个不能识别的类型，会返回 NaN
```

`instanceof` 检测引用数据类型，检测当前实例是否属于某个类

```js
var arr = [12,"hello"];
arr instanceof Array;//true
arr instanceof Object;//true 所有的非Object引用类型都是Object的间接实例
```

`constructor` 检测引用数据类型，获取当前对象的构造器

```js
var arr = [12,"hello"];
arr.constructor;// ƒ Array() { [native code] }
```

`Object.prototype.toString.call` 检测任何数据类型，获取当前对象所属类的原型类型的字符串形式

```js
var arr = [12,"hello"];
Object.prototype.toString.call(arr);// "[object Array]"
```

### 布尔

`Boolean()` 将其他类型转换为 boolean 值：true/false

`0`,`""`,`NaN`,`null`,`undefined`全部转化为 false,其余皆为 true.

#### 逻辑非 ！

`!12` 相当于先`Boolean(12)`,得到 boolean 值 true,然后取反,得到 false。

`!!12`相当于`Boolean(12)`,得到 boolean 值 true.

### 字符串 string

`String()` 把其他类型转换为string类型

如果是基本数据类型，转为字符串输出

如果是引用类型中的数组，会直接输出其元素值的字符串类型

所有引用类型遵循规则：

>   1.  先调用对象自身的`toString`方法。如果返回原始类型的值，则对该值使用`String`函数，不再进行以下步骤。
>   2.  如果`toString`方法返回的是对象，再调用原对象的`valueOf`方法。如果`valueOf`方法返回原始类型的值，则对该值使用`String`函数，不再进行以下步骤。
>   3.  如果`valueOf`方法返回的是对象，就报错。

字符串常用方法：

`charAt` charAt(index)返回指定位置的字符

`charCodeAt` charCodeAt(index)返回指定位置字符的 `ASCII` 码值

`substr` substr(start,[length])返回从指定位置start（可以为负数）开始截取的字符串,如果length省略，一直截取到字符串结束

`substring` substring(start,[end])返回从指定位置截取的字符串，end若省略，截取到结束

`slice` slice(start,end)返回从指定位置截取的字符串，end若省略，截取到结束,start,end都可为负数，表示从末尾开始计数

`split` split(seprator,[length]) 返回被分割形成的数组，length 指定数组的长度

`replace`  方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

```js
// 语法：stringObject.replace(regexp/substr,replacement)
var str="Visit Microsoft!"
console.log(str.replace(/Microsoft/, "W3School"));//Visit W3School!
```



`match`方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。返回匹配的字符串。

`indexOf`	检测某个字符是否是字符串的一部分，若是，返回所在索引，不在，返回 -1

`lastIndexOf`	同上，检测顺序为倒序

`toUpperCase`	把字符串转为大写

`toLowerCase` 把字符串转为小写

`trim`	去除字符串首部和尾部的空格

`concat` 拼接两个字符串

**substr,substring,slice在参数为负数时区别：**
- substr(start,[length]) 
1. if `start<0 && abs(start)` > `length`, `start`=0; 
2. if `start<0 && abs(start)` <= `length`, `start`=`start+length`;
- substring(start,[end])
1. if `start|end` < 0,`start|end` = 0;
2. if `start|end` >= `length`,`start|end`=`length`
3. if `start` > `end`,`start=end`,`end=start`;
- slice(start,end)
1. if `start|end` < 0 && `abs(start|end)` >= `length`, `start|end`=0
2. if `start|end` < 0,`start|end` = `start|end` + `length`

**最终总结：**
>substr和slice对于负数下标处理相同，即**绝对值大于length，按照0处理，否则，从数组后边往前找，即length+index**

>substring 对于负数下标，处理方法简单粗暴，即**只要小于0，都按照0处理**，
需要注意的是substring最先判断两个参数大小，调整顺序，然后处理负数问题。
### 数字类型　number

>   0 12 -12 9.2 ,number有一个特殊类型：`NaN`

```js
typeof NaN;//"number"
```

`isNaN` 用来检测数据值是否是非有效数字，如果是有效数字，返回 `false`,反之，返回 `true`.

`Number()` 强制转换，将其他数据类型转换为number类型

关于数据类型的转换，[->详细...](http://javascript.ruanyifeng.com/grammar/conversion.html)

`parseInt()` 提取字符串中的整数，遇到第一个非数字则返回`NaN`

`parseInt()` 函数在转换字符串时，会忽略字符串前面的空格，知道找到第一个非空格字符。

>   如果第一个字符不是数字或者负号，`parseInt()` 就会返回 `NaN`，同样的，用 `parseInt()` 转换空字符串也会返回 `NaN`。
>
>   如果第一个字符是数字字符，`parseInt()` 会继续解析第二个字符，直到解析完所有后续字符串或者遇到了一个非数字字符。
>
>   **`parseInt()`方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数。**
>
>   基是由 `parseInt()` 方法的第二个参数指定的，所以要解析十六进制的值，当然，对二进制、八进制，甚至十进制（默认模式），都可以这样调用`parseInt()` 方法。



`parseFloat()` 提取字符串中的整数及其小数部分

>   `parseFloat()` 也是从第一个字符（位置`0`）开始解析每一个字符。也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。
>
>   也就是说，字符串中第一个小数点是有效的，而第二个小数点就是无效的了，它后面的字符串将被忽略。`parseFloat()` 只解析十进制，因此它没有第二个参数指定基数的用法.
>
>   如果字符串中包含的是一个可解析为正数的数（没有小数点，或者小数点后都是零），`parseFloat()` 会返回整数。

`toFixed()` 可把 **Number** 四舍五入为指定小数位数的数字。

**语法**

```js
NumberObject.toFixed(num)//返回NumberObject保留指定小数位且四舍五入后的字符串模式
```

>   如果省略参数，不会保留小数位，并且四舍五入。

## 对象数据类型 object

对象：属性和方法的集合。

属性名可以是字母、数字，属性值可以任意类型：

```js
var obj = {name:"老贼",age:10000,1:1,"skill type":["前端","后端"]}
```

### 访问对象的属性

两种方式：

-   点 `.` 操作符

```js
console.log(obj.name);
// 但用 . 操作符 访问不了数字类型的属性名和有空格的字符串属性名：
console.log(obj.1);//Uncaught SyntaxError: Unexpected number
console.log(obj.skill type);//Uncaught SyntaxError: Unexpected identifier
```

-   `[]` 操作符

```js
// 数字类型或者有空格的字符串属性名必须用[]来访问
console.log(obj[1]);// 如果是数字，类似于数组，obj["1"]也可以访问
console.log(obj["skill type"]);
```

如果访问一个不存在的属性，返回 `undefined`

### 增加属性

如果给当前对象不存在的属性赋值，会给当前对象增加一个属性，并赋值

```js
obj.sex;//undefined
obj.sex="男";
console.log(obj);//{1: 1, name: "sunw", age: 1, skill type: Array(2), sex: "男"}
```

### 修改属性名

重新赋值即可

### 删除属性

**假删除**:设置属性值为 `null`,但属性还存在，只是值为空

**真删除**:对象的属性不存在，举例，`delete obj.name` 或 `delete obj["name"]`

与通常对 delete 的理解不同，delete 操作符与直接释放内存**无关**。内存管理 通过断开引用来间接完成的，查看[内存管理](https://developer.mozilla.org/zh-CNdocs/Web/JavaScript/Memory_Management)页可了解详情。

`delete` 操作符会从某个对象上移除指定属性。成功删除的时候回返回 `true`，否则返回 `false`。但是，重要的是要考虑以下情况：

-   如果你删除的属性在对象上不存在，那么delete将不会起作用，但仍会返回true

-   如果 `delete` 操作符删除成功，则被删除的属性将从所属的对象上彻底消失。然后，如果该对象的原型链上有一个同名属性，则该对象会从原型链上继承该同名属性。（也就是说delete操作只会在自身的属性上起作用）

-   任何使用 `var` 声明的属性不能从全局作用域或函数的作用域中删除。

    -   这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
    -   除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。

-   任何用[`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)或[`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)声明的属性不能够从它被声明的作用域中删除。

-   不可设置的(Non-configurable)属性不能被移除。这意味着像[`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math), [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array), [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)内置对象的属性以及使用[`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法设置为不可设置的属性不能被删除。

    -> [More...](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)

## 基本数据类型和引用数据类型区别

------

[->来源](https://www.jianshu.com/p/a32fe1c964c1)

**数据类型**

1.  ECMAScript变量包含两种不同类型的值：基本类型值、引用类型值；
2.  基本类型值：指的是保存在**栈**内存中的简单数据段；
3.  引用类型值：指的是那些保存在**堆**内存中的对象，意思是，变量中保存的实际上只是一个指针，这个指针指向内存堆中实际的值；

**两种访问方式**

1.  基本类型值：**按值访问**，操作的是他们实际保存的值；

2.  引用类型值：按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再顺藤摸瓜地找到保存在堆内存中的值；

    

    

    ![img](http://upload-images.jianshu.io/upload_images/67090-a3fecb055ffebaf8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/484)

    

**两种类型复制**
基本类型变量的复制：  
从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到为新变量分配的位置上，**改变源数据不会影响到新的变量**（互不干涉）；  
引用类型变量的复制：  
**复制的是存储在栈中的指针**，将指针复制到栈中为新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象，复制操作结束后，两个变量实际上将引用同一个对象；因此**改变其中的一个，将影响另一个**；  

**函数参数的传递**  
**1、ECMA中所有函数的参数都是按值传递的**  
在向参数传递基本类型的值时，被传递的值会被复制给一个**局部变量**，在向参数传递引用类型的值时，会把这个值在内存的地址复制给一个**局部变量**  
基本数据类型传递参数   

```js
funciton addTen(num){
  num+=10;
  return num;
}
var count=20;
var result=addTen(count);
alert(count);//20
alert(resullt);//30
```

执行结果是：20和30。  
在这段代码中，将变量`count`当做参数传递给了函数`addTen`，也就是相当于将变量`count`的值复制给了函数`addTen`的参数。这时`addTen`的参数`num`可以看做是函数内部的一个变量。  
在上段代码中，就相当于两个基本数据类型变量之间的值复制。而基本数据类型都有自己独立的内存地址，所以`num`和`count`是没有任何关系的，他们只是值相等而已，函数执行完毕后，`count`的值并没有改变。  
而函数外面的`result`是被直接赋值的，所以`result`的值就是函数的结果30。  

引用类型传递参数  

```js
function setName(obj){
  obj.name="LSN";
}
var person=new Object();
setName(person);
alert(person.name); // LSN
```

执行结果是：LSN。  
在这段代码中，函数`setName`的作用是给`obj`对象添加了一个属性`name`，并给该属性赋值为"LSN"，因为`obj`是引用类型，所以这里属于是将引用类型`person`赋值给了`obj`，也就是说`person`和`obj`引用了一个内存地址，所以当给`obj`新加了属性`name`时，在函数外面的`person`也跟着改变，最后`person.name`的结果为LSN。   

**引用类型传递参数到底传的是值还是引用**

```js
function setName(obj){
  obj.name="ABC";
  obj=new Object();
  obj.name="BCD";
}
var person=new Object();
setName(person);
alert(person.name); // ABC
```

执行结果是：ABC。  
实例3与实例2的区别是在函数中又加了2行代码，在给`obj`对象新加一个属性`name`并赋值后又将`obj`定义成了一个新的对象（`new Object()`），定义新对象后又`name`赋上新的值“BCD”。  
这个时候如果是按引用传递的话，那么最后`person`对象就会自动修改为指向其`name`属性为"BCD"的新对象，但最后显示的却是“ABC”，这说明即使在函数内部修改了参数的值，但原始的引用还保持不变。  
实际上，当在函数内部`obj=new Object()`时 这个新的`obj`就已经成为函数内部的局部对象了，这个对象会在函数执行完毕后等待GC销毁。

**两种变量类型检测**

1.  `typeof` 操作符是检测基本类型的最佳工具；
2.  **如果变量值是nul或者对象，typeof 将返回“object”；**
3.  `instanceof` 用于检测引用类型，可以检测到具体的，它是什么类型的实例；
4.  如果变量是给定引用类型的实例，`instanceof` 操作符会返回 `true`;

**补充：基本包装类型(包装对象)**
先看下以下代码：

```js
var s1 = "helloworld";
var s2 = s1.substr(4);
```

上面我们说到字符串是基本数据类型，不应该有方法，那为什么这里 `s1` 可以调用 `substr()` 呢？  
ECMAScript 还提供了三个特殊的引用类型 `Boolean`，`String`，`Number`.我们称这三个特殊的引用类型为**基本包装类型**，也叫**包装对象**。  

也就是说当读取 `string`，`boolean` 和 `number` 这三个基本数据类型的时候，后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据.  

所以当第二行代码访问 `s1` 的时候，后台会自动完成下列操作：

-   创建String类型的一个实例；`// var s1 = new String("helloworld");`
-   在实例上调用指定方法；`// var s2 = s1.substr(4);`
-   销毁这个实例；`// s1 = null;`

正因为有第三步这个销毁的动作，所以基本数据类型不可以添加属性和方法，这也正是基本装包类型和引用类型主要区别：**对象的生存期**。  

**使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都是一直保存在内存中。自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。**

------

## 函数数据类型 function

-   为什么要学函数?
    -   防止代码重复，减少冗余代码
    -   有封装的功能，防止代码冲突
    -   一个函数代表一个功能，若要实现相同的功能，只需要执行这个函数即可
-   函数的定义(制定一项功能)
-   函数的执行(执行这个功能)

函数实际上是对象。每个函数都是Function类型的实例，而且跟其他引用类型一样具有属性和方法。**函数名实际上是一个指向函数对象的指针**。

函数定义方式：

1.  声明式定义 function foo(){}
2.  表达式定义 var foo = function(){}
3.  构造函数式 var foo = new Function();// 最好放弃治疗

函数定义的举例说明：

举例：

```js
function foo(){}
```

说明：

1.  开辟堆内存空间，假设地址#fff000
2.  将函数体内的内容以字符串的形式存入开辟的内存空间
3.  把堆内存地址赋给foo,foo压入栈

执行函数 *函数名();*

执行说明：

1.  开辟一个私有的空间（作用域，闭包）
2.  把堆内存的字符串转成js代码，从上到下执行
3.  每次运行都会重新开辟私有的内存空间
4.  函数的执行开辟的空间都在栈内存

**`return` 返回值**

1.  不是一定要写 `return`,根据需求来决定
2.  没写 `return`，函数执行后会返回 `undefined`
3.  写了 `return`，但 `return` 后没写值，返回值还是 `undefined`
4.  遇到 `return` 函数无条件终止执行

**`arguments`**

`arguments.callee` 指方法本身

`arguments.length` 实参的个数

**`匿名函数`**

```js
!(function(){//! 是防止前边有函数声明，让js解析器误认为执行！之前的函数，导致错误
  console.log(arguments.callee);
})();
// 函数表达式的写法
var foo = function(){
  console.log(arguments.callee);
}
```



## == 运算符

`==` 运算符一般是先判断左右的类型(Type)：

-   **如果类型相同**：
    -   如果类型是`undefined`,那么 `undefined==undefined;//true`
    -   若类型是 `null`,那么 `null==null;//true`
    -   若类型是 `number`,那么：
        -   `NaN==NaN;//false`
        -   左右值是相同的number，返回 `true`
        -   `+0` 永远等于 `-0`
        -   其他均返回 `false`
    -   若是 `string` 类型，相同的字符串返回 `true`,否则`false`
    -   若是 `boolean` 类型，左右相同返回 `true`,否则 `false`
    -   若是 `object` 类型，左右引用地址相同，返回 `true`,否则 `false`
-   **左右类型不同**：
    -   `null==undefined;//true` `undefined==null;//true`
    -   若是 `string` 或 `boolean` 和 `number` 比较，需要对 `string` 或 `boolean` 用 `Number()` 强转 
    -   若两侧只有一侧是 `object`,而另一侧既不是 `string`,也不是`number`，则需要返回 `object` 的原始值和另一侧比较

一个特殊情况：`null==undefined`//true [->原因...](https://stackoverflow.com/questions/16607761/why-null-undefined-is-true-in-javascript)

ECMA-262关于 `==` 的说明:

>   # The Abstract Equality Comparison Algorithm
>
>   The comparison x == y, where x and y are values, produces **true** or **false**. Such a comparison is performed as follows:
>
>   1.  If Type (x) is the same as Type (y), then
>       1.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Undefined, return **true**.
>       2.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Null, return **true**.
>       3.  If Type (x) is Number, then
>           1.  If *x* is **NaN**, return **false**.
>           2.  If *y* is **NaN**, return **false**.
>           3.  If *x* is the same Number value as *y*, return **true**.
>           4.  If *x* is **+0** and *y* is **−0**, return **true**.
>           5.  If *x* is **−0** and *y* is **+0**, return **true**.
>           6.  Return **false**.
>       4.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is String, then return **true** if *x* and *y* are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return **false**.
>       5.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Boolean, return **true** if *x* and *y* are both **true** or both **false**. Otherwise, return **false**.
>       6.  Return **true** if *x* and *y* refer to the same object. Otherwise, return **false**.
>   2.  If *x* is **null** and *y* is **undefined**, return **true**.
>   3.  If *x* is **undefined** and *y* is **null**, return **true**.
>   4.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Number and [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*y*) is String,
>       return the result of the comparison *x* == [ToNumber](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3)(*y*).
>   5.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is String and [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*y*) is Number,
>       return the result of the comparison [ToNumber](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3)(*x*) == *y*.
>   6.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Boolean, return the result of the comparison [ToNumber](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3)(*x*) == *y*.
>   7.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*y*) is Boolean, return the result of the comparison *x* == [ToNumber](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3)(*y*).
>   8.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is either String or Number and [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*y*) is Object,
>       return the result of the comparison *x* == [ToPrimitive](http://www.ecma-international.org/ecma-262/5.1/#sec-9.1)(*y*).
>   9.  If [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*x*) is Object and [Type](http://www.ecma-international.org/ecma-262/5.1/#sec-8)(*y*) is either String or Number,
>       return the result of the comparison [ToPrimitive](http://www.ecma-international.org/ecma-262/5.1/#sec-9.1)(*x*) == *y*.
>   10.  Return **false**.
>
>   **NOTE 1** Given the above definition of equality:
>
>   -   String comparison can be forced by: `"" + a == "" + b`.
>   -   Numeric comparison can be forced by: `+a == +b`.
>   -   Boolean comparison can be forced by: `!a == !b`.
>
>   **NOTE 2** The equality operators maintain the following invariants:
>
>   -   `A` `!=` `B` is equivalent to `!(A` `==` `B)`.
>   -   `A` `==` `B` is equivalent to `B` `==` `A`, except in the order of evaluation of `A` and `B`.
>
>   **NOTE 3** The equality operator is not always transitive. For example, there might be two distinct String objects, each representing the same String value; each String object would be considered equal to the String value by the `==` operator, but the two String objects would not be equal to each other. For Example:
>
>   -   `new String("a")` `==` `"a"` and `"a"` `==` `new String("a")`are both **true**.
>   -   `new String("a")` `==` `new String("a")` is **false**.
>
>   **NOTE 4** Comparison of Strings uses a simple equality test on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore Strings values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalised form.

[->MDN 上 `==` 的解释...](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

## 条件语句 

### if-else

```js
if(condition1){
  statement1...
}else if(condition2){
  statement2...
}....else{
  statement...
}
  //condition 会调用 Boolean() 方法
```

**三元运算符**:`expression1?expression2:expression3;` 适用于简单的 `if-else`,非此即彼型。

`!!expression` 相当于 `Boolean(expression)` 相当于`expression?true:false`

```js
condition?statement1:statement2;
```

### switch-case

用于一个变量或表达式(`case`)有多个值的情况，相较于 `if-else`结构更加清晰。

```js
switch(case){
  case val1:statement1...;break;
  case val2:statement2...;break;
    	...
  case valn:statementn...;break;
  default:statement...;
}
```

`default` 语句，当所有条件都不满足(case 的值与 case 子句val1..valn **严格相等**的)的情况下，执行 default 语句。

`default` 语句可选，但是一般建议写上。

如果不写 `break` 语句，语句将一直执行，直到遇到下一个 break 语句或者 default，然后跳出代码执行环境。

**switch中的相等判断用严格相等 `===`**

[->switch更多资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch)

### for-in 与 for 区别

[`for-in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。

遍历次数受属性的个数决定，`for...in`不应该用于迭代一个 `Array`.

通常，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性。

`for` 遍历次数受 `length` 控制。

另外，in操作符用来判断某个属性属于某个对象，可以是对象的直接属性，也可以是通过prototype继承的属性

```js
var person = {name:"kk",age:12};
"name" in person;//true
"gender" in person;//false
// 一个变量如果不赋值，默认undefined,但是如果一个对象的属性显式的赋值为undefined,则该属性用in检测，仍然为true
person.gender = undefined;
"gender" in person;//true
// 如果用 delete 操作符删除，则检测结果为false
delete person.gender;
"gender" in person;//false
// 如果检测的是数组,则in运算符用来检测第一个运算数是否为数组包含的索引之一。
var arr = [12,34,22];
12 in arr;//false
0 in arr;//true
```



#### 小案例：选项卡

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #tab {
            width: 500px;
            margin: 0 auto;
        }

        #tab ul {
            text-align: center;
            margin: 0;
        }

        #tab ul li {
            height: 45px;
            width: 100px;
            line-height: 45px;
            display: inline-block;
            margin-left: -5px;
            /*border: 1px solid #dbb979;*/
        }

        #tab ul li:hover {
            background-color: #DBC467;
        }

        #tab div {
            height: 100px;
            line-height: 100px;
            background-color: #dbb979;
            border: 1px solid #dbb979;
            margin-top: -1px;
            display: none;

        }

        #tab ul li.selectLi {
            background-color: #dbb979;
        }

        #tab div.selectDiv {
            background-color: #dbb979;
            display: block;
        }
    </style>
</head>
<body>
<div id="tab">
    <ul>
        <li>我的关注</li>
        <li class="selectLi">推荐</li>
        <li>导航</li>
        <li>猜你喜欢</li>
    </ul>
    <div class="selectDiv">我的关注的内容</div>
    <div>推荐的内容</div>
    <div>导航的内容</div>
    <div>猜你喜欢</div>
</div>
</body>
</html>
<script>
    var oTab = document.getElementById("tab");
    var oLis = oTab.getElementsByTagName("li");
    var oDivs = oTab.getElementsByTagName("div");

    for (var i = 0; i < oLis.length; i++) {
        // 自定义属性，把下标存起来
        oLis[i].index = i;
        oLis[i].onclick = function () {
            // 调用切换tab方法
            changeTab(this.index);
        }
    }

    // 切换选项卡
    var preIndex = 1;
    function changeTab(n) {
        // 清除已经存在的样式
        //for (var i = 0; i < oLis.length; i++) {
            //oLis[i].className = "";
            //oDivs[i].className = "";
        //}
        oLis[preIndex].className = "";
        oDivs[preIndex].className = "";
      	preIndex = n;
        // 设置选项卡点击之后的样式
        oLis[n].className = "selectLi";
        oDivs[n].className = "selectDiv";
    }
</script>
```

## Array 数组

数组是对象类型中细分出来的一种类型，把对象中属性名是数字的全部拿出来，再经过内部的处理独立成数组类型。

对象的元素部分顺序，但是数组的元素是有序排列的。它的 “属性名” 是从 0 开始依次递增的数字，称为**索引**。

### 定义数组：

-   字面量方式

    ```js
    var arr = ["a",34,{name:"kk",age:23}];
    ```

-   构造函数方式

    ```js
    var arr = new Array();
    ```

### 数组中的方法

从以下四个维度理解数组方法：

1.  方法的含义
2.  方法需不需要传参
3.  方法有没有返回值
4.  原数组是否改变

根据是否修改原数组把数组方法分为两大类：

**会修改原数组的方法：**

| 方法                | 功能                                       | 参数                                       | 返回值                          | 备注                          |
| ----------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------- | --------------------------- |
| `push()`          | 向数组**尾部**添加元素                            | 要添加的元素                                   | 新数组的`length`                 | 相当于`arr[arr.length]=value;` |
| `unshift()`       | 向数组**头部**添加元素                            | 要添加的元素                                   | 新数组的 `length`                |                             |
| `pop()`           | 删除数组**尾部**的**一个**元素                      |                                          | 被删除的元素                       | 相当于`arr.length--;`          |
| `shift()`         | 删除数组**头部**的**一个**元素                      |                                          | 被删除的元素                       |                             |
| `splice(n,m,[x])` | 从索引`n`开始删除`m`项，然后用`x`的内容**替换**删除的内容，这里的替换可能增加原数组长度:如果`m==0`,插入的元素在`n`的前边 | `n,m`必须;`x`可选；                           | 被删除的元素构成的**数组**，如果没有删除返回`[]` |                             |
| `reverse()`       | 反向排列                                     |                                          | 反转后的数组                       |                             |
| `sort()`          | 对数组做各种**有序**排列                           | 1. 不传参，默认ascii 顺序排列，只能对位数相同的数字排序<br />2.参数为回调函数：`function(a,b){return a-b}`,若返回`a-b`,升序；若返回`b-a`,降序。 | 重新排序后的数组                     |                             |

**不会改变原数组的方法：**

| 方法                   | 功能                                | 参数                                       | 返回值              | 备注                         |
| -------------------- | --------------------------------- | ---------------------------------------- | ---------------- | -------------------------- |
| `toString()`         | 调用数组每一个元素的`toString`方法，拼接为一个字符串输出 |                                          | 字符串              |                            |
| `join([character])`  | 按照指定字符，将数组的每一项拼接成字符串              | 可选字符                                     | 指定字符拼接成的字符串      | 不传参，默认以`,`拼接               |
| `concat()`           | 拼接一个新的数组                          | 任何数据类型                                   | 拼接后的数组           | 如果参数是一个数组，会把数组中的元素提取出来然后拼接 |
| `slice(start,[end])` | 截取数组                              | 从索引`start`截取到索引`end`,`end`可选，若不选`end`,将截取到末尾;<br />若索引值为负数，从末尾开始计算 | 截取后的数组           | 在js中涉及到区间范围，一般都是前闭后开：`[)`  |
| `indexOf()`          | 从数组头部开始查找数组某一个元素的位置               | 数组中某元素                                   | 查找到返回索引值，查不到返回-1 | 用来判断数组中元素是否存在              |
| `lastIndexOf()`      | 从数组尾部开始查找数组某一个元素的位置               | 数组中某元素                                   | 查找到返回索引值，查不到返回-1 | IE8-不支持                    |

### 算法

####  冒泡排序

```js
function bubbleSort(arr) {
  if (Array.isArray(arr)) {
    for (var j = 0; j < arr.length - 1; j++) {
      var temp = null;
      for (var i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
        index++;
        console.log("循环第" + index + "次");
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 2, 2, 0]));
```



#### 数组去重

双循环

```js
function removeDuplication(arr) {
  if(Array.isArray(arr))
    for(var i=0;i<arr.length-1;i++){
      for(var j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
          arr.splice(j,1);//数组塌陷
          j--;
        }
      }
    }
  return arr;
}
console.log(removeDuplication([1,5,2,1,2,3,4,3]));
```

以对象为中介

```js
function removeDuplication(arr) {
  if(Array.isArray(arr)){
    var obj = {};
    for(var i=0;i<arr.length;i++){
      if(obj[arr[i]]===arr[i]){
        arr.splice(i,1);
        i--;
      }else{
        obj[arr[i]]=arr[i];
      }
    }
    console.log(obj);
    obj=null;
  }
  return arr;
}

console.log(removeDuplication([1, {}, {}, [],[],3, 2,"a", 1,"a"]));
```

#### 递归调用

**快速排序**

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var povitIndex = Math.floor(arr.length / 2);
  var povit = arr.splice(povitIndex,1)[0];// 删除中间元素组成一个新数组
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < povit) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(povit, quickSort(right));
}

console.log(quickSort([1, 4, 2, 1, 54]));
```

### 插入排序

**splice()方法的使用**

```js
/**
* 插入排序：
* 先从需要排序的牌(arr[])中拿出一张牌放入左边(left[])，
* 之后每拿出一张牌，从右往左(倒序)跟左边的牌(left[])依次比较：
*
* 1.如果比左边最后一张牌大，则直接排在左边牌的最后边
* 2.如果比左边的最后一张牌小，则继续往前比较，直到遇到比自己小的牌则插入比自己小的牌之后
* 3.如果比左边第一张牌还小，则直接插入左边牌的最前边
*/
function insertSort(arr) {
  var left = arr.splice(0, 1);
  for (var i = 0; i < arr.length; i++) {
    for (var j = left.length - 1; j >= 0;) {
      if (arr[i] > left[j]) {
        // 在这里，splice 用来将元素插入两个元素之间，或者直接插入数组的末尾
        left.splice(j + 1, 0, arr[i]);
        break;
      } else {
        j--; //跟left数组的下一个元素比较
        if (j === -1) {
          left.unshift(arr[i]);
        }
      }
    }
  }
  return left;
}

var arr = [2, 4, 1, 34, 20, 9, 3];
console.log(insertSort(arr));
```

## Math

```js
Math.sqrt();//开方
Math.pow();//幂次方
Math.abs();//绝对值
Math.floor();//向下取整
Math.ceil();//向上取整
Math.round();//四舍五入
Math.random();// 随机数
Math.min();//取最小值
Math.max();//取最大值
```

```js
//取m~n之间的随机数
Math.random()*(n-m)+m;
```

```js
// 从5~68之间随机4个整数
var arr = [];
while (arr.length < 4) {
  var temp = Math.round(Math.random() * 63 + 5);
  if (arr.indexOf(temp) === -1) {// 判断元素是否存在
    arr[arr.length] = temp;// 比push效率更高
  }
}
console.log(arr);
```

## DOM

浏览器渲染页面时，会把页面所有内容渲染成有层次关系的DOM节点。

一个页面的**根节点**只有一个`document`，一个页面的**根元素**只有一个:`html`.

一个页面有如下节点组成：**文档节点**，**元素节点**，**注释节点**，**文本节点**.

| NodeType | NodeName    | NodeValue |      |
| -------- | ----------- | --------- | ---- |
| 9        | `#document` | `null`    | 文档节点 |
| 1        | 大写的标记名      | `null`    | 元素节点 |
| 8        | `#comment`  | 注释内容      | 注释节点 |
| 3        | `#text`     | 文本内容      | 文本节点 |

### 表示节点之间相互关系的属性

`parentNode` 父节点（都是元素节点）

`childNodes`	获取所有的子节点

`children`	获取所有的子元素节点（IE不兼容）

`firstChild`	获取第一个子节点

`firstElementChild` 	获取第一个子元素节点

`lastChild`	获取最后一个子节点

`lastElementChild` 获取最后一个子元素节点

`previousSibling` 哥哥节点

`previousElementSilbing` 哥哥元素节点

`nextSibling` 	弟弟节点

`nextElementSibling`	弟弟元素节点

>   所有的元素节点 IE8 及以下都不兼容

### js 获取元素总结

-   id ->`document.getElementById('div1')` 只有一个
-   tagName ->`context.getElementsByTagName('li') `是一个集合，是一组元素
-   className ->`context.getElementsByClassName('a1 a2')`是一个集合,一组元素，IE9以下的版本不支持`document.getElementsByClassName`方法
-   name ->`context.getElementsByName('aa') `是一个集合，是一组元素，在IE下只对表单元素起作用，对非表单元素不起作用，为了兼容性，最好只用来操作表单元素
-   选择器 在移动端页面用的
-   `document.querySelector()`通过选择器获取到一个元素
-   `document.querySelectorAll()` 通过选择器获取到一组元素 ，元素集合 

### 自定义封装

IE浏览器不支持所有的获取元素的属性，需要自定义方法解决：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>children</title>
</head>
<body>
<ul id="oUl">
    <li id="li1">11</li>
    <!--注释-->
    <li>222</li>
    asdfasdfafaaaa
    <li id="li3">333</li>
    <li>444</li>
    <li>5555</li>
    <li id="li6">6666</li>
</ul>

<div id="div1">
    <span>asdf</span>
    adfadf
    <p>saa</p>
    <em></em>
</div>
</body>
</html>
<script>
    var oLi1 = document.getElementById("li1");
    var oLi3 = document.getElementById("li3");
    var oLi6 = document.getElementById("li6");
    // var oUl = document.getElementById("oUl");
    var oDiv = document.getElementById("div1");
    /**
     * 获取指定元素的所有元素节点
     *
     * @param ele 指定的元素
     * @returns {Array}  arr 所有子元素节点
     */
    function getChildren(ele) {
        var arr = [];
        var allNodes = ele.childNodes;
        // console.log(allNodes);
        for (var i = 0; i < allNodes.length; i++) {
            if (allNodes[i].nodeType === 1) {
                arr[arr.length] = allNodes[i];
            }
        }
        return arr;
    }

    console.log(getChildren(oDiv));

    /**
     * 获取指定元素的哥哥元素
     *
     * @param ele 指定元素
     * @returns {Object} preEle 哥哥元素
     */
    function getPreEleSibling(ele) {
        var preEle = ele.previousSibling;
        while (preEle){
            if(preEle.nodeType===1){
                return preEle;
            }
            preEle = preEle.previousSibling;
        }
        return preEle;
    }

    console.log("获取li3哥哥元素:");
    console.log(getPreEleSibling(oLi3));

    /**
     * 获取指定元素的弟弟元素
     *
     * @param ele 指定元素
     * @returns {Object} nextEleSibling 弟弟元素
     */
    function getNextEleSibling(ele) {
        var nextEleSibling = ele.nextSibling;
        while (nextEleSibling){
            if(nextEleSibling.nodeType===1){
                return nextEleSibling;
            }
            nextEleSibling = nextEleSibling.nextSibling;
        }
        return nextEleSibling;
    }

    console.log("li3弟弟元素：");

    console.log(getNextEleSibling(oLi3));

    /**
     * 获取指定元素的所有的哥哥元素
     *
     * @param ele 指定元素
     * @returns {Array} PreEleSiblings 所有哥哥元素的集合
     */
    function getEleSiblings(ele) {
        var preEle = ele.previousSibling;
        var PreEleSiblings = [];
        while (preEle){
            if(preEle.nodeType===1){
                PreEleSiblings.unshift(preEle);
                preEle = preEle.previousSibling;
            }else{
                preEle = preEle.previousSibling;
            }
        }
        return PreEleSiblings;
    }

    console.log("获取所有哥哥元素：");
    console.log(getEleSiblings(oLi3));

    /**
     * 获取指定元素的所有的弟弟元素
     *
     * @param ele
     * @returns {Array} nextEleSiblings 所有弟弟元素的集合
     */
    function getNextEleSiblings(ele) {
        var nextEle = ele.nextSibling;
        var nextEleSiblings=[];
        while (nextEle){
            if(nextEle.nodeType===1){
                nextEleSiblings[nextEleSiblings.length] = nextEle;
                nextEle = nextEle.nextSibling;
            }else{
                nextEle = nextEle.nextSibling;
            }
        }
        return nextEleSiblings;
    }

    console.log("获取li1所有弟弟元素：");
    console.log(getNextEleSiblings(oLi1));
</script>
```

### 动态操作 DOM 节点（DOM 元素节点）

#### 创建

创建元素

```js
var oDiv = document.createElement("div");
```

创建文本节点

```js
var oText = document.createTextNode("Hello");
```

#### 添加

```js
var oBody = document.body; // 获得body标签
var oHtml = document.documentElement;  //获得html标签
oBody.appendChild(oDiv);
oDiv.appendChild(oText);// 在 oDiv 之后添加 一般不这么用  有innerHTML
oBody.insertBefore(oText,oDiv);//在 oDiv 之前添加
```

####  删除

```js
document.removeChild(ele);
```

#### 替换

语义：**先删除，后添加**

```js
document.replaceChild(newEle,oldEle);
```

#### 克隆

```js
ele.cloneNode();
ele.cloneNode(true);
```

>   默认不传参，参数值默认 false,表示浅克隆:只克隆当前元素 ele 及其属性
>
>   传入参数 true,深克隆:克隆 ele 及其后代所有节点，包含非元素节点以及元素节点及其属性

#### 元素节点属性操作

```js
ele.setAttribute(attrName,attrValue);
ele.getAttribute(attrName);
ele.removeAttribute(attrName);
```

>   `ele.setAttribute("class","classValue"); ` 设置**原生**属性时，IE7及以下浏览器不支持

## Date

### 定时器

`window.setTimeout([fn],[interval])`	只会执行一次，返回一个数字编号

`window.setInterval([fn],[interval])`	按时间周期 `interval` 不停执行 `fn` ，返回一个数字编号

清除定时器

`clearTimeout()`				`clearInterval()`   		

#### 倒计时案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>倒计时</title>
    <style>
        div {
            font-size: 30px;
            background: palegreen;
            height: 40px;
            text-align: center;
        }

        span {
            color: orange;
        }
    </style>
</head>
<body>
<div id="div">距离下课还剩下<span id="time"></span></div>
</body>
</html>

<script>
    var timer = setInterval(getTime, 1000);

    function getTime() {
        var now = new Date();
        var target = new Date("2018/01/13 20:20:15");
        var timeDiff = target.getTime() - now.getTime();

        var hour = Math.floor(timeDiff / 1000 / 60 / 60);
        var minute = Math.floor(timeDiff / 1000 / 60 - hour * 60);
        var second = Math.floor(timeDiff / 1000 - minute * 60 - hour * 60 * 60);

        document.getElementById("time").innerHTML = timeFormat(hour) + "时" + timeFormat(minute) + "分" + timeFormat(second) + "秒";
        if (timeDiff <= 0) {
            clearInterval(timer);
            document.getElementById("time").innerHTML = "下课";
        }
    }

    // 格式化时间
    function timeFormat(time) {
        return time < 10 ? "0" + time : time;
    }

    // 给一个点击事件，如果倒计时运行则点击后停止，反之，则运行。
    var oDiv = document.getElementById("div");
    oDiv.onclick = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else {
            timer = setInterval(getTime, 1000);
        }
    }
</script>
```





