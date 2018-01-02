---
layout: post
title: JavaScript 语言精粹读书笔记
subtitle: js核心
date: 2017-12-31
header-img: img/post-bg.jpg
catalog: true
tags:
 - JavaScript
---

应该尽量避免使用块级注释

**数字**：js只有一个数字类型。内部表示为64位的浮点数。

运算符的优先级：

| . [] ()                 | 提取属性和调用函数 |
| ----------------------- | --------- |
| delete typeof new + - ! | 一元运算符     |
| * / %                   | 乘法/除法/取余  |
| + -                     | 加减        |
| >= <= > <               | 不等式运算符    |
| === !==                 | 等  不等     |
| &&                      | 逻辑与       |
| \|\|                    | 逻辑或       |
| ?:                      | 三元        |

