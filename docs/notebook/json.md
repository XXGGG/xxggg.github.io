# 🥝json🥝

json的全称为：JavaScript Object Notation，是一种轻量级的数据交互格式。它基于 ECMAScript (欧洲计算机协会制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。

## 说白了👇

**json是一种格式！ 一种用来比较方便表示数据的格式**

听过XML XML 指可扩展标记语言（eXtensible Markup Language）。  
跟json一样用与存储以及表示数据

只不过现阶段来说 json来表示数据 更加可观 可控

简单的表示
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


## JSON.parse()👇
JSON 通常用于与服务端交换数据。 在接收服务器数据时一般是字符串。  
我们可以使用 **JSON.parse() 方法将数据转换为 JavaScript 对象。**  

JSON.parse(text[, reviver])

## JSON.stringify()👇
JSON 通常用于与服务端交换数据。在向服务器发送数据时一般是字符串。  
我们可以使用 **JSON.stringify() 方法将 JavaScript 对象转换为字符串。**   

JSON.stringify(value[, replacer[, space]])