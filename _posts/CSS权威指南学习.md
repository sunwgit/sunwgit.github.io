---
load: post
title: CSS权威指南笔记
date: 2017-12-25
header-img: img/post-bg-desk.jpg
catalog: true
tags: css
---



## 元素

### 替换和非替换

**替换元素**：指用来替换元素内容的部分并非由文档内容直接表示。如img，input

**非替换元素**：元素内容是什么，一般浏览器会呈现什么。如span

### 块级和行内

**块级元素**：生成一个元素框，默认填充父元素内容区，旁边不能有其他元素。如div，p

**行内元素**:在一个文本行内生成，不会打断这行文本。如strong,a

## link标记

```html
<link rel="stylesheet" type="text/css" href="css1.css" media="all">
```

### 属性

**rel** 代表“关系”（relation）,在这里，关系为stylesheet.

**type**总是设置为text/css. 这个值描述了link标记加载的数据的类型。

**href**值为样式表的URL（绝对/相对路径）

media有三个使用最广泛的值：

- all	用于所有表现媒体
- screen    屏幕媒体中表现文档时使用
- print    为视力正常的用户打印文档时使用，另外还会在显示文档的“打印预览”时使用

## style元素

```html
<style type="text/css">
	@import url(styles.css);/*@import 必须放在最前边，否则不会加载*/
</style>
```

在css文件中使用 *@import* 也要放入最开头，除了IE浏览器，其他的浏览器也会忽略不是放在顶部的 *@import* 语句。

### link 和 @import 区别

- 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- 区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
- 区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- 区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。
- 区别5：@import 必须写入 style 标签的顶部或者css文档的开头


### 内联样式

为单个元素指定样式,通常*不推荐*

```html
<p style="color:gray;">
  ....
</p>
```

## 具体的样式规则

```css
Selector{
  属性名1:属性值1；
  属性名2:属性值2；
  ...
}
```

### 选择器

#### 元素选择器

> tips:
>
> css关键字通常是*空格*分隔，只有一种例外——font可以用 "/":
>
> ​	h2{font:medium/150% sans-serif;}
>
> 斜线分隔了字体**大小**和**行高**两个关键字。

#### 通配选择器

```css
*{...}
```

> 通常用来清理浏览器默认布局：
>
> ```css
> *{
>   margin:0;
>   padding:0;
> }
> ```

#### 类选择器和 ID 选择器

```css
.clz{...}/*类选择器*/
#ids{...}/*ID选择器*/
```

> tips:
>
> ID有唯一性，所以ID选择器一般不能与其他选择器结合使用

#### 属性选择器

##### 简单性选择（不指定属性值）

```css
img[alt]{...}/*针对所有含alt属性的图片*/
h1[class]{...}/*针对所有含class属性的h1*/
*[title]{...}/*针对所有含title属性的任何元素*/
a[href][title]{...}/*所有含href且含title的锚*/
```

##### 根据具体属性值选择

```css
p[class="nav"]{...}/*相当于p.nav{...}*/
```

##### 根据部分属性值选择

假设有一个元素：

```html
<p class="urgent warning">
  ....
</p>
```

选择class值中有waring的元素：

```css
p[class~="warning"]{...}/*波浪号 ~ */
/*相当于 p.warning{...}
所以这里的~指的是【在n个属性值中选择一个】，而不是随意匹配某个字符串
*/
```

字符串匹配选择:

```css
[foo^="bar"]  /*foo属性值以"bar"开头*/
[foo$="bar"]  /*foo属性值以"bar"结尾*/
[foo*="bar"]  /*foo属性值包含"bar"字符串*/
```

##### 特定属性选择

```css
[foo|="bar"]	/*foo属性值等于"bar"或者以"bar-"开头*/
```

#### 后代/包含/上下文选择器

```css
E F{sRules}/*结合符为空格*/
/*选择器将会命中所有符合条件的后代，包括儿子，孙子，孙子的孙子... */
```

#### 子选择器

```css
E>F{sRules}
/*与 包含选择器(E F) 不同的是，子选择符只能命中子元素，而不能命中孙辈。*/
```

#### 相邻选择器

```css
E+F{sRules}
/*选择【紧贴】在E元素之后F元素，元素E与F必须同属一个父级*/
```

#### 兄弟选择器

```css
E~F{sRules}
/*选择E元素后面的所有兄弟元素F，元素E与F必须同属一个父级。 */
```

#### 伪类选择器

常用的伪类

> a:link{...}	静态伪类
>
> a:visited{...}	静态。。
>
> a:hover{...}		动态
>
> a:active{...}		动态
>
> input:focus{...}		动态
>
> :first-child
>
> :last-child
>
> :only-child
>
> :nth-child(n)
>
> :nth-last-child(n)
>
> :first-of-type
>
> :last-of-type
>
> :only-of-type
>
> :nth-of-type(n)
>
> :nth-last-of-type(n)
>
> :not(s)
>
> :root
>
> :empty
>
> :checked
>
> :enabled
>
> :disabled
>
> :lang(fr)

#### 伪元素选择器

> :first-letter/::first-letter
>
> :first-line/::first-line
>
> :before/::before
>
> :after/::after
>
> ::placeholder
>
> ::selection

## 选择器权重

> 1. 内联样式，如：style="",权值 1000
> 2. ID选择器，如：#content,权值 100
> 3. 类、伪类、属性选择器，如 ：.content,权值 10
> 4. 类型、伪元素选择器，如：div,权值 1

权重值越大，优先级越高；

多个选择器组合在一起，权重为各选择器权重之和；

!important 强制应用某样式；

另外，通配符选择器权值为0.

## 继承

> 1. 一般地，大多数**框模型**属性（margin,padding,background,border）都不能继承。
> 2. 通配选择器优先于继承，因为继承没有继承值而通配选择器权重存在（零）

## 层叠

在声明权重方面要考虑5级。权重**由大到小**依次为：

1. 读者的重要声明
2. 开发者的重要声明
3. 开发者的正常声明
4. 读者的正常声明
5. 用户代理（一般是浏览器）声明

> 相同权重,相同来源，写在后面权重更大；

## 值和单位

css的几乎所有工作，其基础都是单位。

### 数字

整数、实数（小数），都可以是正数或负数。

### 百分数 %

相对另一个值：同一元素另一属性的值、继承自父元素的值、祖先元素的一个值

### 颜色

#### 命名颜色

```css
h1{color:red;}
```

#### 函数式RGB颜色

```css
h1{color:rgb(100%,100%,100%)}/*100%表示白色，0%黑色，超过100%会自动修正为100%，小于0%会自动修正为0%*/

h1{color:rgb(255,255,255)}/*255表示白色，0黑色，超过255会自动修正为255，小于0会自动修正为0*/
```

#### 十六进制RGB颜色

```css
h1{color:#ffffff;}/*白色*/
```

> 为了兼容性，最好使用rgb(color)或这十六进制表示；
>
> 十六进制的6位表示法最好不要简写。

#### Web安全颜色

> 在256色计算机系统上总能避免抖动的颜色。

什么是256色计算机系统？

> 我们经常说：系统处于16色或256色状态，它的意思是屏幕上最多能显示多少种颜色。
>
> 在16色下显示黑白的文本或简单的色彩线条是非常正常的，但如果我们要想看多于16种颜色的画片，就得用256色或更多的色彩了。也就是说，要把显示模式设置成高色彩状态。
>
> 对屏幕上的每一个像素来说，256种颜色要用8位二进制数表示，即2的8次方，因此我们也把256色图形叫做8位图；
>
> 如果每个象素的颜色用16位二进制数表示，我们就叫它16位图，它可以表达2的16次方即65536种颜色；还有24位彩色图，可以表达16,777,216种颜色。

**web安全颜色表示为rgb值20%和51的倍数。另外，0%或0也是一个安全值。**

**web安全颜色表示为十六进制表现为00，33，63，93，CC，FF的组合,简写为0，3，6，9，C，F的组合。**

### 长度单位

一般为，**数字+单位**，有一个例外：**当数字为0时，后边不需要单位。**

长度单位可分两类：**绝对长度单位**和**相对长度单位**

#### 绝对长度单位

应该减少使用，in-英寸，cm-厘米，mm-毫米，pt-点，pc-派卡,

px(1px就是显示器上看到的一个点，**取决于显示设备分辨率**)

#### 相对长度单位

em,ex（0.5em）

> 在表示字体大小上最常用 em,在图片大小上常用 px

### CSS2单位

#### 角度值

deg-度，grad-梯度，rad-弧度

#### 时间值

用于指定语音元素之间的延迟。

1s=1000ms

#### 频率值

Hz/MHz

## 字体

几个名词：

font-family

font-weight

font-size

字体风格（斜体等）

字体变形（大小写等）

### 字体系列

css定义了5种通用font-family:

*Serif字体*

 > 这些字体**成比例**，而且有上下短线。若字体的所有字符根据其不同大小有不同宽度，则**称该字体成比例。**
 >
 > serif字体包括 Times、Georgia、New Century Schoolbook

*Sans-serif字体*

> 成比例，没有上下短线。
>
> 包括 Helvetica、Geneva、Verdana、Arial

*Monospace字体*

> 非成比例的。等款字体，包括 Courier、Courier New

*Cursive*  

> 草书，模仿手写体。

*Fantasy* 

> 艺术字。

### 指定 font-family

```css
p{font-family:Georgia;}/*如果用户没有安装该字体，浏览器会用默认字体来显示*/

p{font-family:Georgia,serif;}/*如果用户没有安装该字体，浏览器会匹配一种可用的serif字体来显示*/
```

**强烈建议** ：在所有的font-family规则中都提供一个通用字体系列。

> 如果 font-family名称包含**空格**（如 Couier New）或**关键字**,则必须加引号。

