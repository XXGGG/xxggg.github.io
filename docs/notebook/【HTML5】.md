# 🍓HTML5🍓

## sessionStorage

### 保存数据语法：
```js
sessionStorage.setItem("key", "value");
[也可以直接 sessionStorage.key = value]
```

### 读取数据语法：
```js
var lastname = sessionStorage.getItem("key");
```

### 删除指定键的数据语法：
```js
sessionStorage.removeItem("key");
```

### 删除所有数据：
```js
sessionStorage.clear();
```
---

## localStorage

### 保存数据语法：
```js
localStorage.setItem("key", "value");
```
### 读取数据语法：
```js
var lastname = localStorage.getItem("key");
```
### 删除数据语法：
```js
localStorage.removeItem("key");
```

>浏览器的大小不统一，并且在 IE8 以上的 IE 版本才支持localStorage 这个属性。  
目前所有的浏览器中都会把localStorage的值类型限定为string类型  
- localStorage在浏览器的隐私模式下面是不可读取的。  
- localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡。  
- localStorage不能被爬虫抓取到。  
- localStorage 只支持 string 类型的存储  

---