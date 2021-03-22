---
title: 【XXG学习记录08】img标签src引用网络图片，响应403的解决方法
author: '谢夏戈'
date: 2021-03-02
sidebar: 'auto'
categories:
 - 学习记录
---


## 正题👇
在html页面加入<meta name="referrer" content="no-referrer">标签，就可以解决页面加载网络图片的问题，

原因大概是网络安全的问题，别人的页面做了安全防护的问题。

在html的head标签中加上：
```html
<meta name="referrer" content="no-referrer" /> <!--可以让img标签预加载网络图片-->
```

---  

[参考文章：https://blog.csdn.net/gybshen/article/details/79990533](https://blog.csdn.net/gybshen/article/details/79990533)