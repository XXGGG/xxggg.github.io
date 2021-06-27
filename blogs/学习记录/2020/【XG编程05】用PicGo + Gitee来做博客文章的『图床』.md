---
title: 【XG编程05】用PicGo + Gitee来做博客文章的『图床』
author: '谢夏戈'
date: 2020-11-25
sidebar: 'auto'
categories:
 - PicGo
 - Gitee
 - 图床
---

## 前言

之前写博客很少用到图片，因为图片麻烦，在各个平台发放文章，如果要用到图片，没有图床的话，会很麻烦。

有很多云服务提供图床，比如什么七牛云，腾讯云，阿里云。

但是都需要收费，如果只是做做实验，平时很少发文章。不是主要的业务，做一个免费且较安全的图床，确实足够。挺好。

所以就使用gitee来做 网络上的照片存储器！！  
github 也可以，但是我实验了下，图片有时候会挂，介于在国内，所以还是使用gitee（码云）！

## 下载安装PicGo👇

- [PicGo的GitHub地址](https://github.com/Molunerfinn/PicGo)（里面有下载地址）
- [或者点这个](https://github.com/Molunerfinn/PicGo/releases)

然后Windows的点击这个下载
![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-0.png)


## 安装之后打开主界面并且搜索gitee插件👇

- gitee-uploader 

![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-1.png)

---

- 安装插件完后 -> 重启软件, 然后在图床设置选择gitee👇

![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-2.png)

- 记得要在gitee上开一个账号且创建一个用来放这些照片的仓库👇
- repo 就是gitee账号下的仓库地址（记得仓库是要设置公开的）
- branch 自然就是主分支了
- token 是私人令牌 在gitee官网拿👇

**在设置里 然后选👇**  

![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-3.png)
![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-4.png)


**然后只需要选👇**

![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-5.png)

提交后生成的 私人令牌只会显示一次，复制到刚刚的 token 就可以了

## 最后

这样 gitee图库 就创造好了，以后写博客需要用到图片就把图片复制，或者截图，然后用PicGo传到gitee，在上传的同时 剪切板就已经有Markdown的图片地址模板了。

这样在写完自己本身博客的文章的同时，还可以把这种带图片的文章同时上传到CSDN呀，简书呀~ 等等等等~ 

【完】