---
title: 【XG编程08】用js判断移动端还是桌面端
author: '谢夏戈'
date: 2021-02-20
sidebar: 'auto'
categories:
 - Js
---




## Navigator对象

`Navigator`对象包含有关浏览器的信息，他里面有个属性`userAgent`，会展示这个网页是用什么设备访问的  
（所谓userAgent 就是用户代理，说起来很长，之前百度查到说是关于浏览器发展的整个历程，所以都是在伪装代理成Mozilla） 

>说来话长 所以还是不说了 反正知道js里有这个东西，这个东西有这个属性就可以了


`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36`

## 判断在移动端，还是桌面pc端👇
```js
window.location.href = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? "https://y.music.163.com/m/" :  "https://music.163.com/";
```
```js
window.location.href = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? "https://m.bilibili.com/" :  "https://www.bilibili.com/";
```

他们喜欢用m代表移动端-mobile，简单点说就是利用三则运算 和 正则表达式来判断当前访问的设备里有没有 Android...等这些手机系统浏览器字样，有就跳转到他们设置好的手机版。  

现在似乎都不兴响应式网站了。其实也有响应式的，只是响应一定的屏幕尺寸而已，不会完全从桌面响应到手机，比如什么哔哩哔哩，百度，腾讯这些网站，毕竟他们大公司，有能力有钱再维护多一个，而且移动端网站他们几乎优化比较少，他们更多希望他们的用户从移动端的网站下载他们的app，所以移动端网站就像个展位，站位，有就可以。

当然，国外的一些网站 类似GitHub，twitter...这些就都还是从网页响应到手机的，说实话还真的有点厉害，毕竟听人们说，这样响应式维护的成本和难度更高，也许是业务问题吧，想一想像“淘宝”这种类型的大网站，如果用响应式开发，那岂不是...... 

当年有幸我也参与开发过，判断移动端还是桌面端的，不过就不是移动端随随便便，甚至移动端要比桌面端更加重要，毕竟现在越来越多的人用移动端（手机），除了自己写着玩玩的项目，还是最好用判断的方式来区分且写多一个移动端的网站，用户体验要好很多。（除非是简单是项目）












---

[参考文章：https://www.cnblogs.com/gaohuijiao/p/6736155.html](https://www.cnblogs.com/gaohuijiao/p/6736155.html)