# 🥝Sass/scss🥝

根据[参考文章](https://www.runoob.com/sass/sass-tutorial.html)

## 安装 （npm）
```sh
npm install -g sass
```

### 使用
```css
/* 定义变量与值 */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* 使用变量 */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```

### 作用域
[参考文章](https://www.runoob.com/sass/sass-variables.html)


**注意：所有的全局变量我们一般定义在同一个文件，如：_globals.scss，然后我们使用 @include 来包含该文件。**

### 嵌套
[参考文章](https://www.runoob.com/sass/sass-nesting.html)

### 导入文件 @import
CSS @import 指令在每次调用时，都会创建一个额外的 HTTP 请求。但，Sass @import 指令将文件包含在 CSS 中，不需要额外的 HTTP 请求。  
```css
@import filename;
```

### Sass Partials
如果你不希望将一个 Sass 的代码文件编译到一个 CSS 文件，你可以在文件名的开头添加一个下划线。这将告诉 Sass 不要将其编译到 CSS 文件。

但是，在导入语句中我们不需要添加下划线。

    _filename;

**注意：请不要将带下划线与不带下划线的同名文件放置在同一个目录下，比如，_colors.scss 和 colors.scss 不能同时存在于同一个目录下，否则带下划线的文件将会被忽略。**

### Sass @mixin 与 @include
- @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
- @include 指令可以将混入（mixin）引入到文档中。

#### 定义一个混入
```css
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

#### 使用混入👇
```css
.danger {
  @include important-text;
  background-color: green;
}
```

**混入中也可以包含混入**
```css
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```

#### 向混入传递变量
```css
/* 混入接收两个参数 */
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px);  // 调用混入，并传递两个参数
}

.myNotes {
  @include bordered(red, 2px); // 调用混入，并传递两个参数
}
```


