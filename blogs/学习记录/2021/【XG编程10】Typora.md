---
title: 【XG编程10】Typora+PicGo-Core+Gitee
author: '谢夏戈'
date: 2021-06-27
sidebar: 'auto'
categories:
 - Markdown
 - Typora
 - Gitee
 - PicGo
---



## 🍝前言

之前分享过一篇【用PicGo + Gitee来做博客文章的『图床』】

但是不够高效，每次都得先把图片拖拽到PicGo，等上传完图片返回 图片地址链接 后才能粘贴到md文章里使用。



这次的方法可以在Typora写md文章时，直接拖拽进图片，图片自动上传，像在写word一样。

至于如何创建Gitee账户、仓库，等就不赘述了。用Gitee也是因为访问速度比较快。



## 🍳开始👇

1. 下载Typora  -  [Typora官网](https://www.typora.io/) ，并安装好。（我的版本是 version 0.10.11(beta)版，画面布局等可能会有所不同）
2. 下载Node.js - [Node.js](https://nodejs.org/zh-cn/)
3. 在Typora里找到【偏好设置】把上传服务设定，也就是第4步设置成【PicGo-Core】然后按下【下载或更新】。

![image-20210627115849324](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/image-20210627115849324.png)

3. 点击`验证图片上传选项`可以看到picgo-core的目录

![image-20210627130752832](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/image-20210627130752832.png)

3. 安装picgo插件，要先到picgo.exe 目录下，然后进入cmd

   - gitee-uploader 用于上传图片
   - super-prefix 用于给图片重命名，在前缀打上时间戳

   ```sh
   install gitee-uploader super-prefix
   ```

   

4. 第六步【打开配置文件】红字部分对应自己的填写，这里的仓库用的是Gitee

![image-20210627120548202](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/image-20210627120548202.png)

```json
{
  "picBed": {
    "uploader": "gitee",
    "current": "gitee",
    "gitee": {
      "branch": "main（这个是项目仓库的分支，默认主分支）（也可以写master）",
      "customUrl": "",
      "repo": "gitee用户名/仓库名",
      "path": "仓库的文件夹名（可以不写，那图片就会保存在根目录下）/",
      "token": "在gitee的设置里点击个人令牌，然后创建个人令牌获得" 
    }
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true,
    "picgo-plugin-super-prefix": true,
  },
}
```

5. 然后第七步，点击【验证图片上传选项】，测试一下是否可以正常上传图片，或者是手动拖拽图片进md文件里看看。



## token（个人令牌）👇

![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-3.png)![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-4.png)![](https://gitee.com/XXGGG/Xcloud/raw/main/Typora/blog5-5.png)
