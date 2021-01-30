---
title: 🍍『Vue-cli 3.x』🍍
---

vue-cli 3  与 2有很多相同的地方，也有很多不同的地方

## 🟢 安装
2的安装是：（要全局带-g）
```sh
npm install vue-cli -g
```
安装3之前要卸载2：(就多了个un)
```sh
npm uninstall vue-cli -g
```
**而3的安装是：**
```sh
npm install @vue/cli -g
```

## 🟢 创建项目
2的创建项目是：webpack是模板
```sh
vue init webpack <项目名字>（项目名字要小写）
```
**3的创建项目是：**
```sh
vue create <项目名字>（项目名字要小写）
```
也可以使用ui 图形界面来创建
vue ui

创建时有很多选项
可以选择默认
最重要是要有vue-router,和store,或者后面再单独安装也可以

## 🟢 服务
### 🔵 开启开发服务（跑起来）
2里开启的指令是：
```sh
npm run dev
```
**3是：**
```sh
npm run server
```
>当然可以在package.json 配置文件里面改...

### 🔵 打包
**2和3打包都一样**
```sh
npm run build
```

