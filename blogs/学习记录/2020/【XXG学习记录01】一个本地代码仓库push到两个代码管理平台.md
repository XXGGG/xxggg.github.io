---
title: 【XXG学习记录01】一个本地代码仓库push到两个代码管理平台
author: '谢夏戈'
date: 2020-08-15
sidebar: 'auto'
categories:
 - 学习记录
---


## 前言

今天是2020年8月14号 不过已经过了凌晨0点，所以现在是15号 凌晨一点多。   
最近通过VuePress 搭建了一个个人的博客 通过Github pages 部署了网站  

[博客（GitHub）](https://xxggg.github.io)  
[博客（Gitee）](https://xxggg.gitee.io)

![](https://gitee.com/XXGGG/img/raw/master/img/blog1-0.png)

但是得翻墙，挂vpn，才能打开。通过网上了解，似乎之前不用。但我还是遇到了这个问题，如果我想把我的博客给我的朋友看，那他们还要翻墙，那岂不是很麻烦。
‘码云’也有类似Github pages的功能 （码云国内的 所以不用翻墙）  

那问题就来了！  
**“我能不能push一次 把代码同时上传到 ‘GitHub’ 跟 ‘码云’ ”**  
**“本地一个仓库绑定两个git管理平台”**

## 方法一： 使用 <code>git remote add</code> 命令

先查看绑定的情况,可以看到绑定了GitHub的远程仓库

    $ git remote -v
    
    github  https://github.com/XXGGG/test.git (fetch)
    github  https://github.com/XXGGG/test.git (push)

使用 git remote add 命令 （绑定码云的仓库）

    $ git remote add gitee https://gitee.com/XXGGG/test.git

然后再看一次，这样本地仓库就成功绑定多一个远程仓库

    $ git remote -v

    gitee   https://gitee.com/XXGGG/test.git (fetch)
    gitee   https://gitee.com/XXGGG/test.git (push)
    github  https://github.com/XXGGG/test.git (fetch)
    github  https://github.com/XXGGG/test.git (push)

不过这个方法要push两次也就是在你绑定完后 首次push到‘码云’ 用👇

    $ git push --set-upstream gitee master

随后你要用 git push <远程仓库名>

    git push github
    git push gitee

    如果不加远程仓库名 那么默认上一次 git push <远程仓库名>的仓库

> 这是缺点 要push两次 

## 方法二：使用 <code>git remote set-url --add</code> 命令

先删除方法一的绑定

    git remote rm gitee

使用命令添加远程仓库（注意下面👇这个‘github’名称是于之前那个远程仓库名称一样的）

    git remote set-url --add github https://gitee.com/XXGGG/test.git

查看远程仓库。github这个名称就绑定了两个push地址了，

    github  https://github.com/XXGGG/test.git (fetch)
    github  https://github.com/XXGGG/test.git (push)
    github  https://gitee.com/XXGGG/test.git (push)

> 好处是只需要push一次

## 方法三：修改.git/config 文件
>打开本地仓库文件夹后 打开 显示 隐藏文件 就可以看到.git文件夹了 

打开config 添加对应url 此方法于方法二一样

    [remote "github"]
        url = https://github.com/XXGGG/test.git
        fetch = +refs/heads/*:refs/remotes/github/*
        url = https://gitee.com/XXGGG/test.git

## 关于git pull
方法二和三 在pull的 只能从第一个url地址拉取代码

## 最后
虽然我的代码既保存在了GitHub 又保存到了码云。但是还是达不到我的目的。    

因为我的博客是用GitHub actions 从分支自动打包上传到master主分支的  
也就是说 我本地是没有push我打包好的内容到GitHub上的  
我push只是工程文件到分支，打包跟部署我是交给GitHub actions

所以我码云上的代码一样 只有分支是更新的 但是master分支是没有更新的

虽然我可以用码云上的强制同步代码功能 但是还是不够智能方便
也就是每次在提交完‘GitHub’后还得去‘码云’按按钮  
那前面的操作就白费了  

也就是说 我得看看‘码云’有没有类似‘GitHub actions’这类，或者是第三方插件来解决这个问题

这个问题留给下一篇。

