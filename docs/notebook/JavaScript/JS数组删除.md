---
title: 🍉『JS数组删除』🍉
---

JavaScript中数组元素删除的七大方法汇总

1. length（长度）
2. delete（删除指定一个位置） 
3. pop 栈方法（去掉并返回最后一个）
4. shift 队列（移除并返回第一项）
5. splice（最强方法？！）
6. forEach 迭代  
7. filter 过滤

## 🟢 1. length（长度）
JavaScript中Array的length属性非常有特点一一它不是只读的。因此，通过设置这个属性可以从数组的末尾移除项或添加新项，请看下面例子：
```js
var colors = ["red", "blue", "grey"];   //创建一个包含3个字符串的数组
colors.length = 2; //也就是他把长度订为了2 第三个就没了 
console.log(colors[2]);  //undefined  就是未定义！
```

## 🟢 2. delete（删除指定一个位置）
```js
var arr = [1, 2, 3, 4];
delete arr[0];
console.log(arr);   //[undefined, 2, 3, 4]
```
删除第0位，但是长度没变

## 🟢 3. pop 栈方法（去掉并返回最后一个）
```js
var colors = ["red", "blue", "grey"];
var item = colors.pop();
console.log(item);      //"grey"
console.log(colors.length);    //2
```
pop就是返回最后一位，而原数组里会被去掉最后一个

## 🟢 4. shift 队列（移除并返回第一项）
```js
var colors = ["red", "blue", "grey"];
var item = colors.shift();
console.log(item);      //"red"
console.log(colors.length);    //2
```

## 🟢 5. splice（最强方法？！）
splice()恐怕要算最强大的数组方法了，他的用法有很多种，在此只介绍删除数组元素的方法。  
在删除数组元素的时候，它可以删除任意数量的项，只需要指定2个参数：**要删除的第一项的位置**和**要删除的项数**  
例如splice(0, 2)会删除数组中的前两项。
```js
var colors = ["red", "blue", "grey"];
var item = colors.splice(0, 1);
console.log(item);      //"red"
console.log(colors);    //["blue", "grey"]
```

## 🟢 6. forEach 迭代
```js
var colors = ["red", "blue", "grey"];

colors.forEach(function(item, index, arr) {
    if(item == "red") {
        arr.splice(index, 1); //利用迭代的方法找到他的index索引 如何利用splice来删除它
    }
});
```

## 🟢 7 filter 过滤
```js
var colors = ["red", "blue", "grey"];
colors = colors.filter(function(item) {
    return item != "red"  //返回不是red的字符串
});
console.log(colors);    //["blue", "grey"]
```
