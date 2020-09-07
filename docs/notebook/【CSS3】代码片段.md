# 🍇CSS3 代码片段🍇

记录一些css3的少用基础知识，只是方便查阅。
🟢🔵🟡🔴

## 【代码】

### 🟢 不同的光标 
```css
cursor:pointer;
```
### 🔵 高斯模糊
```css
filtar:blur(20px);
```
### 🔵 对比度
```css
filter:contrast(30);
```
### 🟢 去除a标签下划线
```css
text-decoration:none;
```

## 【代码片段】

### 🔵 在position:fixed 下居中
```css
.css{
    position:fixed
    left: 0;
    right: 0;
}
```
### 🔵 ... 代替“溢出字”
```css
.class{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

### 🔵 单词/数字 不换行溢出解决办法
```css
word-wrap: break-word;
```
### 隐藏滚动条的方法!  
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```

### 🔵 清除浮动代码 
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
