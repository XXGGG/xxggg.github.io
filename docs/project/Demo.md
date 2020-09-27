# demo - 【作品展览】

制作/测试 一些有趣的布局，或者是css效果，或者是测试一下工具的用法！  

---

项目作品展览地址：[vue2-demo](https://xxggg.gitee.io/vue2-demo/#/)   
源代码都在 [GitHub【vue2-demo】](https://github.com/XXGGG/vue2-demo/tree/master/src/views/test)  

## 水滴效果（drop）
 "水滴效果"最重要的一个css是👇 高斯模糊！ 
```css
.drop{
    filter: blur(10px);
}
```
这个css套在（水滴的div）上会出现边缘模糊的效果，搭配下面这个 对比度👇（对比度设置在最外层的框上）
```css
.class{
    filter: contrast(10);
}
```
外层的对比度-这个滤镜👉盖去了里面水滴的模糊，让（水滴div）在动画（也就是运动）过程中与另一个div 接
触时，有一种水乳交融！微微粘稠的感觉~

而剩下的的水滴下落的效果就是设置另外的（水滴div）下落动画包括延迟动画就可以了。  

（聚水div）的只要设置它的```border-radius``` 让它扭扭曲曲的就可以了，然后让它顺时针旋转~
> ps: 因为对比度的关系，水滴最好设置成白色，背景为黑色。否则因为高斯模糊边缘颜色会淡化，再配合对比度就会出现比较难看的颜色~ 

## 敲代码的日夜（sun_moon）
《敲代码的日夜》这个重点其实在于js  

首先css👇   
月亮部分只需要用 ```border-radius:50%```设置出一个（太阳）的圆⚪不设置颜色，  
设置它的影子：```box-shadow``` 设置影子的颜色 调整一下位置，就是月亮了。

css部分还是相对简单的。
剩下的就是检测鼠标的移动来让画面切割了！【重点：切割！】
太阳的图层在上 月亮在下   

在太阳的css里设置 “切割” ：```clip-path: inset(0px 50% 0 0);```

---
【重点部分可以看源代码】  
源代码都在 [GitHub【vue2-demo】](https://github.com/XXGGG/vue2-demo/tree/master/src/views/test)  

## text1和聚光灯（text1）（SpotLight）
因为想着后面会有关于文本的玩法，所以在这里就设置了text1的名字，后面可能会出现text2 text3 ....  

text1 和聚光灯的效果是差不多的。

主要是把文字颜色设置成透明，然后设置背景- 背景可以是颜色或者图片
```css
.h1{
    color: transparent;
    background: linear-gradient(to right,#000,#16d2d8d2,#000);
}
```
最重要的一步是把 这个背景 用于文字上！！！ 👇
```css
.h1{
    -webkit-background-clip: text;
    background-size: 90%;
}
```
再设置一下这个背景的大小， 反正文字只是透明的，主要是设置背景大小，然后动画背景位置👇
```css
@keyframes move{
    0%{
        background-position: -400%;
    }
    50%{
        background-position: 400%;
    }
    100%{
        background-position: -400%;
    }
}
```

---

当然 在“聚光灯”中不是用这样的方法，但是前面步骤一样，聚光灯中使用的是图片，加载了网络上的图片， 然后对图片进行切割 👇
```css
@keyframes jgd{
    0%{
        -webkit-clip-path: ellipse(80px 80px at 10% 50%);
        clip-path: ellipse(80px 80px at 10% 50%);
    }
    50%{
        -webkit-clip-path: ellipse(80px 80px at 90% 50%);
        clip-path: ellipse(80px 80px at 90% 50%);
    }
    100%{
        -webkit-clip-path: ellipse(80px 80px at 10% 50%);
        clip-path: ellipse(80px 80px at 10% 50%);
    }
}
```


## 翻牌（flop）

翻牌这个 最重要的是 “深度”  也就是有 “纵深感” 让它看上去像3d的

主要在牌外层这个框上使用👇
```css
.card-contaniner{
    perspective: 1000px;
}
```
框里面设置两个div 一个正面 一个反面👇  

然后设置他们的背面不可看 - 隐藏 
```css
backface-visibility: hidden;
``` 
然后设置 '反面' 那个div 先翻过来
```css
.back{
    transform: rotateY(-180deg);
}
```
接下来 只要用```:hover```在鼠标指中的时候反过来就可以了~


## flex与grid 布局测试 （FlexBox）（grid）
至于flex 与 grid 布局 只是用于测试布局效果  
我应该会把这个记录在 本博客的 《小笔记》上

