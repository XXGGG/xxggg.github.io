# 🍇〖CSS〗🍇

🟢🔵🟡🔴

## 👾【代码】👾

### 🟢 去除a标签下划线
```css
text-decoration:none;
```
### 🟢去除列表的前缀符号
```css
list-style:none;
```
### 🟢字间距
```css
letter-spacing:20px;
```
### 🟢 不同的光标 
```css
cursor:pointer;
```
### 🟢只留文字的背景：
```css
-webkit-background-clip:text;
```
### 🔵 对比度
```css
filter:contrast(30);
```
### 🔵 高斯模糊
```css
filtar:blur(20px);
```
### 🔵 延迟动画
```css
animation-delay:0.5s;
```
### 🔵 切割空间
```css
clip-path:inset(0px 50% 0 0);
```
### 🔵 隐藏背面
```css
backface-visibility:hidden;
```
### 🔵 设定透视深度
```css
perspective:(1000px);
```
### 🔵 img图片不被拖动
```css
-webkit-user-drag: none;
```



## 👾【代码片段】👾

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

### 🔵 隐藏滚动条的方法!  
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```
### 🔵 防止单行文字溢出
```css
text-overflow:ellipsis;
overflow:hidden;  
white-space:nowrap;
```

### 🔵 背景图片居中
```css
background-position-x: center;
background-position-y: center;
```

### 🔵 去掉 input 发光
```css
input:focus{
    box-shadow:none;
}
//实验当中 👇 可行
input:focus{
    outline: none;
}
```

### 🔵 多行文字… 省略的方法
```css
overflow: hidden;
word-break: break-all;  /*允许在单词内换行，更美观*/
text-overflow: ellipsis;
display: -webkit-box;  /*元素作为box伸缩盒子*/
-webkit-line-clamp: 3;  /*设置文本行数限制*/
-webkit-box-orient: vertical;  /*设置文本排列方式*/
```

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



