---
title: 🍒『Node 搭建服务器流程』🍒 
---
## 🟢 前言
整个流程是我自己用来反复练习而写的   
学习了node.js 也了解了很多关于node的知识，所以跟着视频学习了使用node来搭建一个本地的服务器。👇

### 🔵 1. 新建文件夹 - xxg 
### 🔵 2. npm初始化
```sl
npm init -y
```
### 🔵 3. git初始化
```sl
git init （如果不使用github git 可以不初始化）
```
### 🔵 4. 安装插件
```sl
npm install express -S 【node框架】
npm install nodemon -D 【自动检测文件变化,热加载】
```
- express是node框架可以快速搭建起服务。  
- nodemon 可以在你修改文件的时候，热加载，不用每次都重新启动服务。（有助于开发，所以用-D 添加到dev开发时期）
### 🔵 5. 配置 package.json 👇（关于nodemon）
```json
"scripts": {
    "dev":"nodemon src/app",
},
```
### 🔵 6. 新建文件夹 xxg/src

- 用来放源文件xxg/src/app.js 然后在文件里面写👇  
![](https://gitee.com/XXGGG/img/raw/master/img/node1.png)   

- all是接收所有类型的接口（get呀 还是post）👇测试用，后面要注释掉👇    
![](https://gitee.com/XXGGG/img/raw/master/img/node2.png)

- 然后在最后启动该服务  
![](https://gitee.com/XXGGG/img/raw/master/img/node3.png)

- npm run dev (先把服务跑起来测试一下）  
然后先在浏览器输入 127.0.0.1:3000/test 查看一下

**至此我们的服务就完成了，因为我们已经可以使用浏览器来访问到我们的接口了，但是！我们还没有写具体功能的接口，还有很多事情没有做，让我们继续👇**

### 🔵 7. 安装 关于数据库和配置接口的插件
- npm install sequelize -S 【node库】
- npm install sequelize-cli -S 【sequelize脚手架】
- npm install mysql2 【sequelize的驱动】  

首先先说sequelize 他是一个node的库，跟jQuery和js的关系一样，他封装了很多有用且方便的函数，通常这种东西方便了我们，但是同时隐藏了很多我们需要知道的知识点，但是没办法，我们先用他就对了。  

在安装了他以后就安装脚手架，同样，他跟vue和vue-cli的关系也差不多，就是你安装好后再初始化，就会多出很多帮我们准备好的文件。

而mysql2 是sequelize的驱动，安装就对了。不用管他具体干什么，简单点说 sequelize需要他！

然后我们来准备下面的工作，并说明为什么
- 在mysql命令行或者用“navicat这个MySQL工具”来创建一个数据库（不用创建表）
    - 如果用sql 就是  👇     
        create database 数据库名;
    - 如果用navicat 👇（这个工具正版一年上万，改天再写一个关于怎么弄破解版的）
    ![](https://gitee.com/XXGGG/img/raw/master/img/node4.png)  
    在新建数据库里写 关于字符集 跟排列规则 先这样写，为什么也不清楚。

---
**下面的操作很重要**

1.  **npx sequelize init**   
    脚手架搭完 初始化（会多出很多文件，可以新建一个文件夹db存放，或者先创建xxg/db 文件夹 然后在这个文件夹的命令行来 初始化）

2. **npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string**     
  这个命令是 生成数据库表的模型（仅仅只是模型，砸门还没有把这个模型映上数据库那边，别着急）（不过我们可以通过这里很清楚的看到 name后面跟着的是表名 而attributes 是表的属性 比如 name是字符串，deadline是日期2020-11-24这样

3. 配置db/config.json里的development（密码要在双引号内）

4. **npx sequelize db:migrate**    
    将sequelize的模型 ->生成在数据库中

---

**这样我们的数据库的表就建好了！所以 以上，我们完成了创建数据库的表，跟把服务开启了，那我们接下来就要来开始写接口了**

在写接口前 先下载这个东西 body-parser （哈哈哈要下载安装好多东西呀.... 这个是用来接收我们在前端传那些参数过来的，要有它才能接收... 没办法 下载安装把... 
 
- npm install body-parser 【app.js中间件 - 接收body】

		
### 🔵 8.一些小处理👇

在写正式的接口前，说三点
1. 先把db/migrations里的文件默认的 createdAt 跟 updatedAt 删掉  
它是默认的创建时间跟默认更新时间（当然也可以先不删）   
如果删除了 就要在db/models/的对应 数据库表.js文件夹里 init下加 timestamps:false

2. 	- 下载 “postman” 工具 可以用来测试接口  
这个直接去官网下载就可以了 名字就叫postman👇  
![](https://gitee.com/XXGGG/img/raw/master/img/node5.png)  
可以用它来测试接口 （可以调成post呀 或者get呀）

3. 说一下路由接口 其实所谓路由路由 就是设置各个分路，比如我们用post是是一种分路
，get是一种分路， all是接收所有分路，在分路中又有分路。👇  
比如：get的可以用“/page/” 或者 “/check/”。

app.use 这个use也是跟all一样接收所有类型 然后过滤一遍，在中间件中处理别的业务（对了，这里忘记说什么是中间件了，其实中间件就是个过滤器...）  
**【可以先不写，后面自然懂】**

**【接下来正式写接口】**
1. 第一个接口是处理异常用的👇 写在最后 （当然写在“启动服务”前） 
![](https://gitee.com/XXGGG/img/raw/master/img/node6.png)  
【可以把这个处理异常理解为 中间件】

2. 安装且引入body-parser
- 如果前面没安装 现在就安装 ```npm install body-parser```
- 然后引入👇  
![](https://gitee.com/XXGGG/img/raw/master/img/node7.png)
![](https://gitee.com/XXGGG/img/raw/master/img/node8.png)

【👆这个引入就对了，反正后面可以使用他来拿到 前端传来的参数】

3. 载入可以触及 数据库的模块 models👇
![](https://gitee.com/XXGGG/img/raw/master/img/node9.png)

---

### 🔵 9. 真的真的，这次真的写接口了
【增】【删】【改】【查】👇 

1. 【增】  
![](https://gitee.com/XXGGG/img/raw/master/img/node10.png)

先从头开始分析 
- app 就是我们实例express()的
- post 是类型嘛 对吧 然后 '/create' 是路由嘛（post里是一个小分类）
- 使用async 是因为要异步 因为等等要触及到数据库，一般触及到这些需要时间来调取的就要用异步async，await来等等（俗称Premise 允诺！）
- req是请求来的，res是向前端响应的，next就是去下一步
---
- 在每次写这些接口的时候都要用try - catch 怕接口报错，反正如果真的报错了就使用next()让他把错误的消息往下推，给到我们之前设置在最后的那个“处理异常”的中间件！！

- **然后最重要的是 我们使用post的话 要接收参数要用`req.body`**  
- **而触及到数据库要用我们前面载入的 models模块 这个Todo是表名 create是向数据表里添加数据**
- res.json 是向前端返回的东西

2. 【删】  
![](https://gitee.com/XXGGG/img/raw/master/img/node11.png)

3. 【改】
![](https://gitee.com/XXGGG/img/raw/master/img/node12.png)

4. 【查】
![](https://gitee.com/XXGGG/img/raw/master/img/node13.png)


### 🔵 9.【命令代码小总结】
- 都要用try
- post 接收是 req.body
- get 接收是 req.params
- models.表名.create  是加入数据表
- models.表名.findAndCountAll  是查询，且总结数据条数
- models.表名.findOne  是查询 某一个（要根据条件👇）  
![](https://gitee.com/XXGGG/img/raw/master/img/node14.png)

---

- 变量名.update 是更新信息
- 变量名.destroy 是删除信息

（这里可以理解什么时候要用models，在还没有这条数据 要查，拿，创造的时候就用models，而在拿到后赋值给变量，就可以使用变量自带的更新或者删除属性！！！）

【对了！！在查分页的时候 offset跟limit这两个参数名字是固定的，不能变哦！】

---

### 🔵 10. postman - 调试

那么以上就可以使用 postman 这个工具 来根据不同的 接口
比如什么 
- http://127.0.0.1:3000/create 
- http://127.0.0.1:3000/update

来增加参数然后调试了，比如👇
![](https://gitee.com/XXGGG/img/raw/master/img/node15.png)

记得【get的话要使用 get】


### 🔵 11. 跨域
其实对于跨域的知识，我还不是很清楚。  
大致知道同源跨域的意思（毕竟百度一下都有说）  

但是我们现在写的接口只能在postman 或者浏览器输入 `http://127.0.0.1:3000/list/1 `
来接收 node这个服务器返回的东西。

如果我们现在随便写个前端项目 并且在本地跑起来！想要用ajax来得到数据的话，那就要使用到跨域，（这个知识点也是在网上查的，其实都是在网上了解的这些知识。）

那我们就在刚刚一直写的那些接口前！添加一个中间件！👇 （在app.js 靠前的位置）  
![](https://gitee.com/XXGGG/img/raw/master/img/node16.png)

*是全部什么都允许 （大概这个意思）
简化一下就是👇

//设置跨域访问
```js
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```

### 🔵 暂告一段落

后面再继续探讨，当前端网页写完，放到github page 时，还如何来调用 本地的服务器

也就是我把自己的电脑当服务器 自己电脑开着服务 开着数据库当 数据库

【这个问题留给下一章，继续复习搭建，多写几次！】

