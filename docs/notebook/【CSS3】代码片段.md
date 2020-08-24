# 🍓CSS3 代码片段🍓

记录一些css3的少用基础知识，只是方便查阅。

## 【代码】

### 不同的光标 
    cursor:pointer;

### 高斯模糊
    filtar:blur(20px)  

### 对比度
    filter:contrast(30);


## 【代码片段】

### ... 代替“溢出字”
```css
.class{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

### 单词/数字 不换行溢出解决办法

    word-wrap: break-word;

### 隐藏滚动条的方法!  
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```

### 清除浮动代码 
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
