---
title: 【css】实现水平垂直居中
date: 2020-06-02
categories:
  - frontEnd
tags: 
  - css
---
# BFC

块级格式化上下文，拥有自己的渲染规则，决定元素如何渲染的一个容器

### 触发条件

满足下列的任意一个或多个条件即可

- 根元素
- 浮动元素
- position的值不为 static 和 relative
- overflow的值不为 visible
- display的值为 flex、inline-flex、inline-block、table-cell、table-caption、grid等

### 渲染规则

- BFC内部的块级元素会垂直放置,margin重叠
- BFC区域间的margin不会重叠
- BFC是一个隔离的独立容器，容器里面的子元素和外面的元素互不影响
- 计算BFC容器的高度时，浮动元素也参与计算 (可以用来解决内部元素浮动，导致父级元素的高度坍塌问题)
- BFC的区域不会与浮动元素重叠(这点是BFC最重要的一点渲染规则，可以用这个规则解决很多布局的问题)

### 应用场景

- 解决浮动导致父元素高度塌陷问题
- 实现两栏布局
- 避免外边距折叠