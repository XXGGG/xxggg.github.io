---
title: 🍉『JS数组查找』🍉
---

## 🟢 includes() 判断数组里有没有这个数  
```js
str.includes(字符串,[可选。从哪个索引位置开始搜寻，默认值为0])
// 返回布尔值 true/false
```
举个栗子👇  
```js
let xxg = [1,2,3]
let gg = xxg.includes(1)
console.log(gg)//true
```

## 🟢 find() 返回数组中第一个满足条件的数据  
```js
// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var newNum1 = num.find((item, index) => {
    return item > 40;
})
console.log(newNum1);//50
```

## 🟢 findIndex() 返回数组中第一个满足条件的索引(从0开始), 不满足返回-1
```js
// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var newNum2 = num.findIndex((item, index) => {
    return item > 40;
})
console.log("newNum2 = " + newNum2);//4
```

## 🟢 indexOf() 返回数组中第一个满足条件的索引(从0开始), 不满足返回-1
```js
// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var newNum3 = num.indexOf(40);
var newNum4 = num.indexOf(40, 10);//从索引10的位置开始向后查找

console.log("newNum3 = " + newNum3);//3
console.log("newNum4 = " + newNum4);//-1
```

## 🟢 lastIndexOf() 返回数组中最后一个满足条件的索引(从0开始), 不满足返回-1
```js
// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var newNum5 = num.lastIndexOf(40);
var newNum6 = num.lastIndexOf(40, 1);//从索引1的位置开始向前查找
console.log("newNum5 = " + newNum5);//3
console.log("newNum6 = " + newNum6);//-1
```
