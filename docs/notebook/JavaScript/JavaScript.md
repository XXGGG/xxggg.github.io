---
title: 🍉『JavaScript』🍉
---
## 🟢 定时器
```js
setTimeout(function(){
    //方法
},1000)
```

## 🟢 把字符串转换成整数型
```js
parseInt(window.prompt('input'));
```

## 🟢 执行浏览器复制命令
```js
document.execCommand("Copy");
```

## 🟢 在js处实现网页跳转
```js
location.href="网址"
```

## 🟢 监听鼠标位移
```js
window.addEventListener('mousemove',(e) => {
    let per = (100 - e.clientX / window.innerWidth * 100)
})
```