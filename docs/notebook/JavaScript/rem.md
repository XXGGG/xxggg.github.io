---
title: 🍉『rem』🍉
---

## 🟢 移动端的方案 

随便写个文件夹，然后把下面👇rem.js 引入main.js
```js
//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/20 + 'px';
```