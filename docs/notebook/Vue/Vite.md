---
title: 🥝『Vite』🥝
---

## 🟢 安装
> **Vite，目前它只支持Vue3.x的版本，不支持Vue2.x版本。**

> Vite2.0 更新了。👇
```
$ npm init @vitejs/app
```

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





