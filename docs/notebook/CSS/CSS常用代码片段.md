---
title: 🫐『CSS常用代码片段』🫐
---

## 🟢 清除浮动代码 
```css
.clearfix:after {
    display:block;
    content:'';
    clear:both;
    height:0;
}
.clearfix {
    zoom: 1;
}
```

## 🟢 隐藏滚动条的方法!  
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```
## 🟢 防止单行文字溢出
```css
text-overflow:ellipsis;
overflow:hidden;  
white-space:nowrap;
```

## 🟢 背景图片居中
```css
background-position-x: center;
background-position-y: center;
```

## 🟢 去掉 input 发光
```css
input:focus{
    box-shadow:none;
}
//实验当中 👇 可行
input:focus{
    outline: none;
}
```

## 🟢 多行文字… 省略的方法
```css
overflow: hidden;
word-break: break-all;  /*允许在单词内换行，更美观*/
text-overflow: ellipsis;
display: -webkit-box;  /*元素作为box伸缩盒子*/
-webkit-line-clamp: 3;  /*设置文本行数限制*/
-webkit-box-orient: vertical;  /*设置文本排列方式*/
```

## 🟢 在position:fixed 下居中
```css
.css{
    position:fixed
    left: 0;
    right: 0;
}
```
## 🟢 ... 代替“溢出字”
```css
.class{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## 🟢 单词/数字 不换行溢出解决办法
```css
word-wrap: break-word;
```
