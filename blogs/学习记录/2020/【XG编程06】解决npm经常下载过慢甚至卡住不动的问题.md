---
title: 【XG编程06】解决npm经常下载过慢甚至卡住不动的问题
author: '谢夏戈'
date: 2020-12-13
sidebar: 'auto'
categories:
 - npm
---

## 前言

解决方案是将npm的下载地址转到淘宝的镜像地址。
1. 首先我们在cmd中输入`npm config get registry`命令查看npm的默认下载地址
2. 之后我们看到的下载地址是 https://registry.npmjs.org/
3. 再使用`npm config set registry https://registry.npm.taobao.org` 命令将默认下载地址改成淘宝镜像就可以了。
4. 我们在使用`npm config get registry`命令，此时我们看到下载地址变成了 https://registry.npm.taobao.org

