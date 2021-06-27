---
title: 🥝『Vite』🥝
---


## 🟢 前言
Vite - 项目构建打包工具

Vite 貌似 是一款类似是于 vue-cli 的“脚手架”，也就是帮你把一些配置文件呀什么的准备好，让你可以马上用vue来开发，不用部署、设置、那些零零碎碎的东西。 当然细致的还是要自己调。大概就是怎么个东西。

至于他更轻、更快、什么的对于我们基础前端，暂时不用去理，底层的道理/原理也不理。   
人家说是好东西，用就完事了，学就完事了！ （目前Vite好像还在bate测试阶段，先学着一点点看看）

## 🟢 Vite 特性
1. Vite主打特点就是轻快冷服务启动。冷服务的意思是，在开发预览中，它是不进行打包的。
2. 开发中可以实现热更新，也就是说在你开发的时候，只要一保存，结果就会更新。
3. 按需进行更新编译，不会刷新全部DOM节点。这功能会加快我们的开发流程度。

## 🟢 安装
> **Vite，目前它只支持Vue3.x的版本，不支持Vue2.x版本。**


1. 先使用 `npm init vite-app xxg` 进行初始化 (xxg 就是项目名)
2. 进到xxg文件夹里，`cd xxg`
3. `npm install`
4. `npm run dev`

> Vite2.0 更新了。👇
```
$ npm init @vitejs/app
```

然后搞定 和 **vue-cli** 差不多

---
**文件/文件夹 说明👇**   

    |-node_modules          -- 项目依赖包的目录
    |-public                -- 项目公用文件
        |--favicon.ico      -- 网站地址栏前面的小图标
    |-src                   -- 源文件目录，程序员主要工作的地方
        |-assets            -- 静态文件目录，图片图标，比如网站logo
        |-components        -- Vue3.x的自定义组件目录
        |--App.vue          -- 项目的根组件，单页应用都需要的
        |--index.css        -- 一般项目的通用CSS样式写在这里，main.js引入
        |--main.js          -- 项目入口文件，SPA单页应用都需要入口文件
    |--.gitignore           -- git的管理配置文件，设置那些目录或文件不管理
    |-- index.html          -- 项目的默认首页，Vue的组件需要挂载到这个文件上
    |-- package-lock.json   --项目包的锁定文件，用于防止包版本不一样导致的错误
    |-- package.json        -- 项目配置文件，包管理、项目名称、版本和命令


## 🟢 适配
对typescript、css、json的支持

### 🔵 在vite中使用 typescript
```html
<script lang="ts">
//....any
</script>
```

### 🔵 css直接引入
    import './assets/app.css'

### 🔵 JSON直接引入
    import data from './assets/xxg.json'


### 🔵 关于scss 预处理
1. 先安装 
```
npm install --save-dev node-sass;  
npm install --save-dev sass-loader;
```
2. 使用
```html
<style lang="scss">
  .name{
    color:green;
  }
</style>
```





