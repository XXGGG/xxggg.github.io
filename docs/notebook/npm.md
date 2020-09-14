# 🥝npm🥝

## 🟢〖提前总结〗
关于npm，下载node.js 的时候就自带了，为什么下载node.js，因为搭建vue-cli 要用node呀！！！  
所以基本只要知道**npm是一个下载包的商店**（包-就是人家写好的js，可以拿来用的东西）就可以了    
虽然你也可以直接写一些好用的东西 然后上传到商店给别人用（但是目前还没怎么牛） 

- 所以！ 基本只要知道npm的安装、卸载、更新、还有怎么看package.json 文件就好了...

使用国内淘宝镜像：

    npm install -g cnpm --registry=https://registry.npm.taobao.org


-【完】-
---
为什么用npm [参考文章](https://zhuanlan.zhihu.com/p/24357770)


## 🐱‍👤具体步骤（一些意义于来由）
>关于来源 貌似直接看参考文章好，直接抄过来也没什么意思。
了解一下就好了。  

NPM 的思路大概是这样的：

1. 买个服务器作为代码仓库（registry），在里面放所有需要被共享的代码

2. 发邮件通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）

3. 社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码

4. 下载完的代码出现在 node_modules 目录里，可以随意使用了。

这些可以被使用的代码被叫做「包」（package），这就是 NPM 名字的由来：Node Package(包) Manager(管理器)。


## 🟢 安装
```sh
npm instll <想要安装的模块>
```
### 🟢 -g 全局
全局会安装到电脑的user目录下  
没带g就会安装到当前文件夹里  
```sh
npm instll <想要安装的模块> -g
```

### 🟢 -S 安装到生产环境
生产环境就是生产出来 可以用 打包好的
```sh
npm instll <想要安装的模块> -S
npm instll <想要安装的模块> --save
```

### 🟢 -D 安装到开发环境
开发就是还没完成，还在开发中，调试中。
```sh
npm instll <想要安装的模块> -D
npm instll <想要安装的模块> --dev
```  
## 🟢 卸载
一样可以带-g 卸载全局里面的
```sh
npm uninstll <需要卸载的模块>
```
