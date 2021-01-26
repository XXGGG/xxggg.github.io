# 🔵什么是【webpack】

## 🔵〖总结〗
总的来说因为写vue的项目要用vue-cli来搭建，而vue-cli的模板又是webpack，所以我们要学习什么是webpack? 那webpack又是什么呢?  

字面上翻译过来的意思是“网络打包”，打包? 为什么要打包?，因为我们要把代码文件分开来写（模块化），分开来写有个好处就是比较好看（所谓可读性强、易读，易维护），还有就是可以复用。  

所以我们要分开来写，但是分开来写，实际到浏览器上，人家访问我们的网站又要http请求很多文件，会慢，会卡，很没前途。  

那就要把分散的文件打包成一个！！这样发出的http请求就少了。那用上了webpack我们就暂时不用去考虑那么多优化http请求的问题的。所以用上webpack的vue-cli正好~

所以简单总结一下：我们暂时！暂时去理解webpack是用来干嘛的，就是把我们要写的模块化文件给打包起来，打包成一个，少数几个。就是优化。
当然，麻烦的还是那些所谓的配置webpack.config.js

我们先来看看一些相关的吧👇

要使用Webpack 前须先安装Node.js，而Node.js自带（npm）。
node.js又是什么呢? 是可以运行js文件的！（什么?我不下载node.js 不也可以在浏览器用上js吗? 不不不，有了node.js 可以在命令行用```node xxg.js ```这样运行js文件。而不是引入到html然后打开html...）  

说到运行js文件，node.js还可以用他自带的一些方法来写模块化文件，可以‘引入’与‘输出’，那引入，我们除了可以引入自己一些复用的代码，就还可以引入别人的代码?那别人的代码怎么引入呢，要先下载，就是用npm（node自带的商店，一个没有页面的商店）来安装下载别人写的代码，然后引入来使用。

从而构成vue-cli这样一个大东西！


- ```require ``` - node的输入
- ```module.exports``` - node的输出
- ```exports ``` - node的👆的简写（还是有所不同）  

- ```import``` - ES6的输入
- ```export``` - ES6的输出（暴露）

- ```node变量```
- ```webpack配置项 ```


👇下面开始别人的教学??
---
## 🔵 webpack是什么
Webpack 是一个开源的前端打包工具。Webpack 提供了前端开发缺乏的模块化开发方式，将各种静态资源视为模块，并从它生成优化过的代码。要使用Webpack 前须先安装Node.js。

```sh
npm install webpack -g
```
```sh
webpack runoob1.js bundle.js
```
执行以上命令会编译 runoob1.js 文件并生成bundle.js 文件，

>这里给黄球🔵的意思，虽然vue-cli模板是webpack，但是很少在命令行这样打，大致也了解。

---
## 🐷【webpack】直接看别人的文章 👇
参考文章：[https://segmentfault.com/a/1190000012950660](https://segmentfault.com/a/1190000012950660)

  
## 🔵 webpack打包的好处  
c -> d ，把c文件打包成d文件
```sh
webpack c.js d.js  
```
生成的d.js 就是我们需要生成的代码，简单的说其实就是把几个文件合并成一个文件了，这样做有一个很大的好处：

减少http请求，减少脚本的阻塞
当html文件下载完成后，浏览器读取了html文件，会自动去逐个发起请求去下载html中一切可以下载的文件，比如图片、css、js文件，多一个script就多一次http请求，所以合并script可以减少http请求，这样就能减少网页等待的时间(页面空白时间)；

而script不仅仅会影响到自己，还会影响到其它文件的下载，因为script会阻塞其它资源的下载(意思就是在下载script的时候不能下载其它文件)，在低版本浏览器中连其它的script也会阻塞。


## 🟡 node全局变量

node.js中有个全局变量global,它就像浏览器中的window对象一样，都是运行环境提供的全局变量，在浏览器的运行环境中提供的是window对象，在node.js中提供的global对象


    global.DTRACE_NET_SERVER_CONNECTION
    global.DTRACE_NET_STREAM_END
    global.DTRACE_HTTP_SERVER_REQUEST
    global.DTRACE_HTTP_SERVER_RESPONSE
    global.DTRACE_HTTP_CLIENT_REQUEST
    global.DTRACE_HTTP_CLIENT_RESPONSE
    global.global
    global.process
    global.Buffer
    global.clearImmediate
    global.clearInterval
    global.clearTimeout
    global.setImmediate
    global.setInterval
    global.setTimeout
    global.console

和浏览器运行环境上window上的变量可以直接使用一样，global对象上的属性也可以直接使用，比如平时我们用的console.log('xxx')之所以能用,其实是调用的global.console.log('xxx')

当然你也可以自己跟global上加上变量，这样你就可以在全局使用它了，比如

    a.js
    //在全局对象上加上了属性aaa,就可以直接使用aaa这个变量了
    global.aaa = 'xxxxx'
    console.log(aaa)

    //这里要正确的打印出aaa,需要a.js在b.js之前执行
    b.js
    console.log(aaa)

和浏览器中的window对象不同的是，在浏览器中所有var申明的对象，会挂载到window上，但是在node中并不会

var声明的变量并不会挂载到global全局变量上


## 🟢模块级变量👇

- require 函数
- exports 函数

### 🟢 require 引用 模块🍖
```
require(/a.js)      //可以省略.js 要是路径

require(express)      //直接名字 - node自带的或是第三方的
//（第三方的会去node_modues这个文件夹下找）
```
>在vue-cli中引入图片有使用过

### 🔵 mudule.exports 输出模块🍙

```
c.js
var a = function() {
    console.log('a');
};

var b = function() {
    console.log('b');
};

var c = 'abcefg';

//第一种用法，在module.exports对象上添加属性
module.exports.a = a;
module.exports.b = b;
module.exports.c = c;

//第二种用法，直接给module.exports重新赋值
module.exports = {'a':a,'b':b,'c':c};
```

>输出可以用module.exports 或者 简写成exports 。但还有一些区别
```
//exports只有一种用法
exports.a = a;
exports.b = b;
exports.c = c;

//下面用法是错误的，因为直接给赋值并不能改变module.exports的值
exports = {'a':a,'b':b,'c':c};
```

【👆node的告一段落👆】
-----

接下来👇
## 🟢 ES6模块化
说完webpack的那些概括与node的引入/暴露。就来说说ES6的模块化是咋样的。👇

es6提供了import 和 export来实现模块化
- import （可以在vue项目里看到很多什么import Vue from "vue" 这种
- export （也可以在vue文件里经常看到什么 export default{}）


**var App = require('./App')** 等价写法 **import App from './App'**

**module.exports={ 'a':a }** 等价写法 **export default { a }**

>vue-cli中的单文件组件之间的引入和暴露用的就是ES6的 `import` 和 `export`
---
es6中是使用export命令后面加上要导出的变量来实现导出的，而用import xx from 'xxxx'的形式来引入，而xx必须跟export命令后的变量名一模一样才能导入

上面和require、module.exports等价的用法使用了default关键字，所以在引入时可以自定义名字，这也是最常用的用法

## 🐷 模块化总结
**无论是node.js还是es6提供的模块化功能都不能直接使用，浏览器是没有办法识别node.js环境的变量也无法识别es6的语法，所以我们需要用webpack来实现，把它们都转化成浏览器能识别的代码。**

在使用webpack的时候，我们还是用es6的import和export比较多，因为require js文件直接可以用es6替代，引入node_module我们只要通过配置wepack也可以轻松用es6替代，而node.js的核心模块在浏览器中本来就没法用，所以在前端代码中也用不上，所以只要用es6的语法来实现模块化就好啦

但是webpack重写了node的require方法，使用require可以引入其它资源文件，比如图片和.json文件等，这个时候我们还是需要使用require的

>**可以看得出来，毕竟在vue-cli项目里很多都是es6的引入方式和暴露方式，然后请求图片等静态资源的时候用require**

## 🟡 最麻烦的webpack基本配置
>还好是基本......
webpack.config.js👇
```js
//前面说到过，直接require的是node的核心模块
const path = require('path');

//html-webpack-plugin是一个需要自己通过npm安装的模块
const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    // entry：定义要被打包的文件，可以是一个或者多个
    entry: {
        app:'./main.js'
    },
    // output：定义要打包后生成的文件
    output: {
        //定义生成的文件
        fileName: '[name].js',
        //定义生成文件的路径
        path: './dist',
        //定义引用文件的路径,（实际项目中，因为编译生成的文件很有可能被你拷贝到的网站路径和现在生成的路径不一致）
        publicPath: '/'
    },
    //resolve：定义能够被打包的文件，文件后缀名
    resolve: {
        //extensions配置的是可以省略的文件名类型，如果引用一个文件并没有加文件名，会去自动寻找以下配置的文件名
        extensions: ['.js', '.vue', '.json'],
        //为一个常用路径取一个别名，以后就不用写src的路径了，直接用@替代，它就会自动变成的绝对路径，如果resolve有多个参数，就是把参数拼接起来后然后取它们的绝对路径
        alias: {
            '@': path.resolve('src'),
        }
    },
    //module: webpack将所有资源都看做是模块,而模块就需要加载器；
    module: {
        //模块加载规则，比如es6语法的js文件浏览器是无法识别的，我们就需要使用babel-loader帮忙转化成es5的文件
        rules: [
          {
            //用正则表达式表示要匹配的文件，这里表示的是后缀为.vue的文件
            test: /\.vue$/,
            //loader都是需要通过安装或者自己写的，不是随便写一个文件名就可以的
            loader: 'vue-loader',
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            //表示需要为哪些目录下的.js文件使用babel-loader做处理
            include: [path.resolve('src'), path.resolve('test')]
          }
        ]
    },
    //plugins：定义额外的插件,插件可以做到load做不到的事情，一般load只是辅助转化一个文件，把文件中浏览器不支持的部分转化成浏览器认识的
    plugins: [
        //会自动帮你生成一个index.html，并在html文件中引入打包生成的js文件
        new HtmlWebpackPlugin({
          filename: 'index.html'
        })
    ]
};

module.exports = config;
```


## 🐷〖完〗-【最后】

最后 基本的webpack就学到这里了。  
很好的暂时理解了webpack的一个作用与基本使用。  
当然，在vue项目中（也就是vue-cli搭建的项目中）基本已经配置好了，当然，我们不能知其然，不知其所以然，也许从某种程度上来说，这种理解还只是皮毛，但是暂时，已经足够了。

好吧 还有新的理解我再填写下来。

