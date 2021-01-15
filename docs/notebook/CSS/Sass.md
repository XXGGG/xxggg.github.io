---
title: 🍇『Sass/scss』🍇
---

参考文章：[https://www.runoob.com/sass/sass-tutorial.html](https://www.runoob.com/sass/sass-tutorial.html)

# Sass 
Sass/scss是css的预处理
## 1.安装
> 一般我们使用【node】环境下,在@Vue/cli脚手架中

还有一个要安装的👉【sass-loader】,因为我们在 webpack的项目中要使用

    npm install node-sass --save-dev
    npm install sass-loader --save-dev

## 2.使用【在vue/cli脚手架中】
```html
<style lang='scss' scoped>
    /* 然后在这里面写写写 */
</style>
```
> 注意：要写scss 别写sass 要不很难受~

## 3.通用文件的位置
>一般Sass文件都是放在 `scr/assets/styles/`里的

- 项目中会有一个 function.scss 文件来单独维护各种各样的函数 【函数】
- 项目中有专门的 mixin.scss 文件来管理全局的 @mixin 指令【混合指令】


## 【最后】
通过这次学习 大致了解了Sass的一些基本使用，下阶段肯定是要把之前写的一些小demo全部改用sass来写，
这样可以更加习惯，同时使用多点， 按照一些好的规范！ 利用好【注释】

对于Sass的基础学习暂告一段落，但是对于Sass的学习才刚刚开始，使用就是学习的开始！！