---
title: 🍇『flex』🍇
--- 

## 🍇 Flex - 弹性布局
参考文章:[https://developers.weixin.qq.com/ebook?action=get_post_info&docid=00080e799303986b0086e605f5680a](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=00080e799303986b0086e605f5680a) 


```css
.container{

    display:flex;

    flex-direction:row（默认值） | row-reverse | column |column-reverse

    flex-wrap:nowrap（默认值） | wrap | wrap-reverse

    justify-content:flex-start（默认值） | flex-end | center |space-between | space-around | space-evenly

    align-items:stretch（默认值） | center  | flex-end | baseline | flex-start

    align-content:stretch（默认值） | flex-start | center | flex-end | space-between | space-around | space-evenly

}
```
### 🟢 display 开启
-  `display:flex;` 

### 🟢 flex-direction 主轴
- `flex-direction:row;` **从左到右为主轴**
- `flex-direction:row-reverse;` **从右到左为主轴**
- `flex-direction:column;` **从上到下为主轴**
- `flex-direction:column-reverse;` **从下到上为主轴**

### 🟢 flex-wrap 换行
- `flex-wrap:nowrap;` **不能换行**
- `flex-wrap:wrap;` **能换行**
- `flex-wrap:wrap-reverse;` **换到上面行**

### 🟢 justify-content 主轴方向 - 排列
>这里的左右 只是在 主轴是横row，并且 从左到右的情况。
- `justify-content:flex-start;` **前（左）**
- `justify-content:center;` **中**
- `justify-content:flex-end;` **后（右）**
---
- `justify-content:space-between;` **B-间距相等，末端为0**
- `justify-content:space-around;` **A-间距相等，末端为间距一半**
- `justify-content:space-evenly;` **E-间距相等，末端间距相同**

### 🟢 align-items 副轴方向 - 对齐
- `align-items:stretch` **项目拉伸至填满行高**
- `align-items:flex-start` **项目顶部与行起点对齐**
- `align-items:center` **项目在行中居中对齐**
- `align-items:flex-end` **项目底部与行终点对齐**
- `align-items:baseline` **项目的第一行文字的基线对齐**

### 🟢 align-content 副轴方向 - 排列
>align-content与align-items的区别在于 content是针对内容框里整体的排列对齐，而items是一排中每个之间该怎么对齐的问题。
- `align-content:stretch` **当未设置项目尺寸，将各行中的项目拉伸至填满交叉轴。当设置了项目尺寸，项目尺寸不变，项目行拉伸至填满交叉轴**
- `align-content:flex-start` **靠上方**
- `align-content:center` **居中，上下间距相同**
- `align-content:flex-end` **靠下方**
---
>这个和justify-content中是一样的 只不过由主轴变成副轴
- `align-content:flex-between` **B-间距相等，末端为0**
- `align-content:flex-around` **A-间距相等，末端为间距一半**
- `align-content:flex-evenly` **E-间距相等，末端间距相同**



