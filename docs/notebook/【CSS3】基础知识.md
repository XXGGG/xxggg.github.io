# 🍓CSS3 基础知识🍓

记录一些常用，重要的css代码片段。


## 兼容不同浏览器 - 加前缀
    -webkit [chrome和safari浏览器]
    -moz    [firefox浏览器]
    -ms     [IE浏览器]
    -o     	[opera]

## 【文本】
### 设置溢出文本用"省略标记"
    text-overflow : [clip 剪切掉] 或 [ellipsis 显示省略号]
### 溢出内容隐藏
    overflow:hidden
### 强制文本在一行内显示
    white-space:nowrap
### 超过容器是否转行
    word-wrap:[normal 控制连续文本转行] 或 [break-word 内容在边界内换行]
### 载入新的字体
    @font-face:
### 文本阴影
    text-shadow:[X][Y][blur模糊程度][color]

## 【图片】
### 设置图片的起始位置 { 必须先设置no-repeat } 
    background-origin:[border-box]或[padding-box]或[content-box]
### 图片裁剪
    background-clip:[border-box 默认]或[padding-box]或[content-box]
### 图片尺寸
    background-size:[auto]或[px]或[100%]或[cover 覆盖]或[contain 容纳]

## 【基础】
### 圆角效果
    border-radius:5%
### 阴影效果
    box-shadow :X轴 Y轴 [阴影模糊半径px] [阴影扩展半径px] [阴影颜色] [投影方式:内inset]
### 边框图片
    border-image:[url()] [50像素] [round(平铺)\ repeat(重复)\ stretch(拉伸) ]
### 线性渐变
    background-image:linear-gradient:([角度deg]/[上下左右], [颜色,颜色,...])
### 径向渐变
    background-image:radial-gradient:([颜色,颜色,颜色...])

## 【变形】
### 旋转
    transform:rotate(45deg);
### 扭曲
    transform:skew(45deg);
### 缩放
    transform:scale(x,y);
### 位移
    transform:translate(x,y);
### 矩阵
    transform:matrix(a,b,c,d,e,f);
### 原点
    transform-origin:left top;

## 【动画】
### 过渡效果
    transition:[属性][过渡时间][过渡函数][过渡开始时间]
    transition-property:[过渡或动态模拟的css属性]
    transition-duration:[完成过渡的时间]
    transition-fiming-function:[过渡的函数]
    transition-delay:[开始出现的延迟时间]

### 关键帧
    @Keyframes xxg{
        0%{background:red;}
        100%{background:green;}
    }
> 配合下面这个一起

    div:hover{
        animation: xxg 5s ease-out .2s;{animation 是所有功能简写}
    }
#### 调用那个功能
    animation-name: xxg;            
#### 播放动画的时间
    animation-duration: 10s;        
#### 播放方式
    animation-tinmin-function:  [ease],
                                [linear],
                                [ease-in],
                                [ease-out],
                                [ease-in-out];
#### 开始播放的时间
    animation-delay: 2s;           
#### 播放次数
    animation-iteration-count: 5;   
#### 播放方向
    animation-direction:[normal 默认],
                        [alternate 第偶数次向前播放 第奇数次反方向播放]
#### 播放状态
    animation-play-state:[running 播放],[paused 停止]
#### 播放完动画后的状态
    animation-fill-mode:[none 默认],
                        [forwards关键帧的位置],
                        [backwards开始前马上用上初始帧],
                        [both包含2,3]


## 【选择器】
### CSS3属性选择器
    a[class^=xxg]  //开头有xxg
    a[herf$=xxg]   //结尾有xxg
    a[title*=xxg]  //包含了xxg


### CSS3伪类选择器
|伪类选择器              |说明                      |
|--                      |--                        |
|a:root 	             |伪类选择器 等同于选择html |
|a:not   		         |否定选择器 就是不选择这个 |
|a:empty 	 	         |选择没有任何内容的容器   |
|a:target		         |目标选择器 用来匹配页面url的某个标志符的目标元素|  
|a:first-child	         |第一个子元素  |
|a:last-child	         |最后一个子元素  |
|a:nth-child(n)	         |n=odd或者even,也可以是数字|
|a:nth-last-child(n)     |从最后一个子元素开始计算|
|a:first-of-type         |指定:第一个这个类型的元素,而不是第一个元素 | 
|a:last-of-type	         |指定:最后一个这个类型的元素|
|a:nth-of-type(n)        |指定:这个类型的的元素的选择|
|a:nth-last-of-type(n)   |[...]
|a:only-child 	         |选的这个元素他 有且只有一个子元素|
|a:only-of-type          |选择这个元素下 他的唯一类型的子元素|

### 表单选择器
    :enabled		[可用状态下的   表单选择器]  
    :disabled		[不可用状态下的 表单选择器]  
    :chechked		[单\复选择框 选中的状态]  

### 很特殊的选择器
    ::selection		[鼠标刮选的内容的那个....]
    :read-only		[选择那些 只读状态 在元素中设置了readonly='readonly'的]
    :read-write		[选择那些 非只读状态]

[通常和content(内容)配合使用]

    ::before (前) 
    ::after (后)  


##  【多列布局】
    columns: 200px 2;                   {每栏200px 2栏显示}
    columns-gap:2px;                    {每栏间距}
    columns-rule:2px gotted green       {边框宽度 边框样式 边框颜色}
    columns-span:all;                   {表示这个东西跨越所有的栏}

## 【盒子模型】
    box-sizing: [默认content-box],
                [border-box 定死的宽\高度不会被其他盒子元素改变],
                [inherit继承]


# 【伸缩布局flex】
```css
.xxg { 
    display: flex;

    flex-direction:column; /* 设置为纵轴 默认是横轴row */

    justify-content:flex-start;/*横轴用这个*/

    align-items:flex-start;/*纵轴用这个*/

    /* 左 右 居中 */
    justify-content: <flex-start>/<flex-end>/<center>;/*x*/
    align-items: <flex-start>/<flex-end>/<center>;/*y*/

    /*项目盒子自适应伸缩*/
    flex:200;

}
```

## 【媒体类型Media】
### 根据媒体类型加载不同的样式
    All       -     [所有]
    Screen    -     [电脑显示器]
    Print     -     [打印用纸或打印预览视图]

### link方法
    <link media="print"/>

### @import方法
    @importurl(print.css) print;
    @importurl(xxg.css)  screen;

### @media方法
    @media screen {
        选择器{/*样式代码*/};
    }
<br/>

    @media screen and (max-width:600px) {
        
    }

## 【其他】
### 权重
优先级最高，但也会被权重高的important所覆盖

    !important 
