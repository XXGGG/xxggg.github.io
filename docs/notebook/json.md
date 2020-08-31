# 🥝json🥝


## 〖提前总结〗
**说白了👉：json是一种表示数据 的 格式！**  



---

## 👇下面这些比较官方

json的全称为：JavaScript Object Notation，是一种轻量级的数据交互格式。它基于 ECMAScript (欧洲计算机协会制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。

## 👇

貌似XML也是用来传送/交互数据的，      
但json看起来更加简洁，易懂，可控，易读咯~~ 😁

简单的表示👇
```json
{
    "data":[
        { "name": "xxg" , "age": "18" },
        { "name": "xxg" , "age": "18" }   
    ]
}
```
- 末尾别逗号
- 不能加//注释
- 不能出现NaN,undefined,函数function()
>貌似还有其他规则..... 但是大概知道怎么用，有必要再记过来....

## JSON.parse()👇 （下面这两个还挺重要的）
JSON 通常用于与服务端交换数据。 在接收服务器数据时一般是字符串。  
- **JSON.parse() 方法将数据转换为 JavaScript 对象。**  

## JSON.stringify()👇
JSON 通常用于与服务端交换数据。在向服务器发送数据时一般是字符串。  
- **JSON.stringify() 方法将 JavaScript 对象转换为字符串。**   