---
title: 【折腾记录04】报错‘Failed to load resource:net::ERR_FILE_NOT_FOUND’
author: '谢夏戈'
date: 2020-08-18
sidebar: 'auto'
categories:
 - 折腾记录

tags:
 - 报错
---
 


## 问题
使用vue脚手架打包项目，npm run build之后运行index.html出现异常

    Failed to load resource: net::ERR_FILE_NOT_FOUND

>包括把我的项目放到github pages（当然 主要是本地打开都出了问题，不过很明显是路径问题，只是不知道哪里改）

## 解决方法

打开config中的index.js文件，将build中的'/'改为' ./ '

然后重新打包一下就好了

>图片主要看参考文章里的

## 参考文章

[参考文章](https://juejin.im/post/6844903904275234823)