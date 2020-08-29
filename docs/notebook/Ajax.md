# 🥝AJAX🥝
>参考文章：[https://www.runoob.com/ajax/ajax-tutorial.html](https://www.runoob.com/ajax/ajax-tutorial.html)

## 什么是Ajax
- AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。  
- AJAX 不是新的编程语言，而是一种使用现有标准的新方法。  
- AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。  
- AJAX 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。  

>通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

## AJAX - 创建 XMLHttpRequest 对象

**XMLHttpRequest 是 AJAX 的基础。**
>所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
### 创建 XMLHttpRequest 对象
>不参考老浏览器的办法（IE5和IE6）
```js
var xhr = new XMLHttpRequest();
```

### XMLHttpRequest - 向服务器发送请求请求

后面的 true 表示 是否异步（一般填true就可以了）
```js
xhr.open("GET","/try/ajax/demo_get.php",true);
xhr.send();
```
或者
```js
xhr.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xhr.send();
// 为了避免得到的是缓存的结果，请向 URL 添加一个唯一的 ID
```
```js
xhr.open("GET","/try/ajax/demo_get.php?fname=Henry&lname=Ford" + Math.random(),true);
xhr.send();
// 通过 GET 方法发送信息，请向 URL 添加信息
```
---
### POST
```js
xhr.open("POST","/try/ajax/demo_get.php" ,true);
xhr.send();
```
如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
```js
xhr.open("POST","/try/ajax/demo_post2.php",true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("fname=Henry&lname=Ford");
``` 

---
AJAX 指的是**异步** JavaScript 和 XML（Asynchronous JavaScript and XML）。

XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true 

---
### 服务器响应
如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

- responseText  获得字符串形式的响应数据。
- responseXML   获得 XML 形式的响应数据。

#### 如果来自服务器的响应并非 XML，请使用 responseText 属性。
```js
document.getElementById("myDiv").innerHTML=xhr.responseText;
```
#### 如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性
（ps：现在已经没有使用xml了的吧 都用json）
```js
xmlDoc=xhr.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;
```
>看到xml都觉得麻烦....

---

### onreadystatechange 事件
当请求被发送到服务器时，我们需要执行一些基于响应的任务。  
每当 readyState 改变时，就会触发 onreadystatechange 事件。  
readyState 属性存有 XMLHttpRequest 的状态信息。  
下面是 XMLHttpRequest 对象的三个重要的属性：  

- onreadystatechange	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
- readyState	
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    - 0: 请求未初始化
    - 1: 服务器连接已建立
    - 2: 请求已接收
    - 3: 请求处理中
    - 4: 请求已完成，且响应已就绪
- status	200: "OK"/404: 未找到页面
```js
xhr.onreadystatechange=function(){
    if (xhr.readyState==4 && xhr.status==200)
    {
        document.getElementById("myDiv").innerHTML = xhr.responseText;
    }
}
```



## 【结束】
对于Ajax 还是知道个概念
大概就是从后台请求数据来，然后这把去渲染页面，
最关键的还是请求数据。🐽

原生的小黄人-xhr来请求数据不熟悉 😂

还是喜欢用vue搭配axios ✔

【这大概就是Ajax吧~~~】


