(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{535:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"🥝webpack🥝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🥝webpack🥝"}},[s._v("#")]),s._v(" 🥝webpack🥝")]),s._v(" "),t("h2",{attrs:{id:"〖提前总结〗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#〖提前总结〗"}},[s._v("#")]),s._v(" 〖提前总结〗")]),s._v(" "),t("p",[s._v("总的来说因为写vue的项目要用vue-cli来搭建，而vue-cli的模板又是webpack，所以我们要学习什么是webpack? 那webpack又是什么呢?")]),s._v(" "),t("p",[s._v("字面上翻译过来的意思是“网络打包”，打包? 为什么要打包?，因为我们要把代码文件分开来写（模块化），分开来写有个好处就是比较好看（所谓可读性强、易读，易维护），还有就是可以复用。")]),s._v(" "),t("p",[s._v("所以我们要分开来写，但是分开来写，实际到浏览器上，人家访问我们的网站又要http请求很多文件，会慢，会卡，很没前途。")]),s._v(" "),t("p",[s._v("那就要把分散的文件打包成一个！！这样发出的http请求就少了。那用上了webpack我们就暂时不用去考虑那么多优化http请求的问题的。所以用上webpack的vue-cli正好~")]),s._v(" "),t("p",[s._v("所以简单总结一下：我们暂时！暂时去理解webpack是用来干嘛的，就是把我们要写的模块化文件给打包起来，打包成一个，少数几个。就是优化。\n当然，麻烦的还是那些所谓的配置webpack.config.js")]),s._v(" "),t("p",[s._v("我们先来看看一些相关的吧👇")]),s._v(" "),t("p",[s._v("要使用Webpack 前须先安装Node.js，而Node.js自带（npm）。\nnode.js又是什么呢? 是可以运行js文件的！（什么?我不下载node.js 不也可以在浏览器用上js吗? 不不不，有了node.js 可以在命令行用"),t("code",[s._v("node xxg.js")]),s._v("这样运行js文件。而不是引入到html然后打开html...）")]),s._v(" "),t("p",[s._v("说到运行js文件，node.js还可以用他自带的一些方法来写模块化文件，可以‘引入’与‘输出’，那引入，我们除了可以引入自己一些复用的代码，就还可以引入别人的代码?那别人的代码怎么引入呢，要先下载，就是用npm（node自带的商店，一个没有页面的商店）来安装下载别人写的代码，然后引入来使用。")]),s._v(" "),t("p",[s._v("从而构成vue-cli这样一个大东西！")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("require")]),s._v(" - node的输入")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("module.exports")]),s._v(" - node的输出")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("exports")]),s._v(" - node的👆的简写")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("import")]),s._v(" - ES6的输入")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("export")]),s._v(" - ES6的输出（暴露）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("node变量")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("webpack配置项")])])])]),s._v(" "),t("h2",{attrs:{id:"👇下面开始别人的教学"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#👇下面开始别人的教学"}},[s._v("#")]),s._v(" 👇下面开始别人的教学??")]),s._v(" "),t("h2",{attrs:{id:"webpack是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么"}},[s._v("#")]),s._v(" webpack是什么")]),s._v(" "),t("p",[s._v("Webpack 是一个开源的前端打包工具。Webpack 提供了前端开发缺乏的模块化开发方式，将各种静态资源视为模块，并从它生成优化过的代码。要使用Webpack 前须先安装Node.js。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("webpack runoob1.js bundle.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行以上命令会编译 runoob1.js 文件并生成bundle.js 文件，")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"【webpack】👇直接看别人的文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【webpack】👇直接看别人的文章"}},[s._v("#")]),s._v(" 【webpack】👇直接看别人的文章")]),s._v(" "),t("blockquote",[t("p",[s._v("参考文章"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000012950660",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000012950660"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("👇")]),s._v(" "),t("h2",{attrs:{id:"webpack打包的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包的好处"}},[s._v("#")]),s._v(" webpack打包的好处")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("webpack c.js d.js  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("生成的d.js 就是我们需要生成的代码，简单的说其实就是把几个文件合并成一个文件了，这样做有一个很大的好处：")]),s._v(" "),t("p",[s._v("减少http请求，减少脚本的阻塞\n当html文件下载完成后，浏览器读取了html文件，会自动去逐个发起请求去下载html中一切可以下载的文件，比如图片、css、js文件，多一个script就多一次http请求，所以合并script可以减少http请求，这样就能减少网页等待的时间(页面空白时间)；")]),s._v(" "),t("p",[s._v("而script不仅仅会影响到自己，还会影响到其它文件的下载，因为script会阻塞其它资源的下载(意思就是在下载script的时候不能下载其它文件)，在低版本浏览器中连其它的script也会阻塞。")]),s._v(" "),t("h2",{attrs:{id:"node全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node全局变量"}},[s._v("#")]),s._v(" node全局变量")]),s._v(" "),t("p",[s._v("node.js中有个全局变量global,它就像浏览器中的window对象一样，都是运行环境提供的全局变量，在浏览器的运行环境中提供的是window对象，在node.js中提供的global对象")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("global.DTRACE_NET_SERVER_CONNECTION\nglobal.DTRACE_NET_STREAM_END\nglobal.DTRACE_HTTP_SERVER_REQUEST\nglobal.DTRACE_HTTP_SERVER_RESPONSE\nglobal.DTRACE_HTTP_CLIENT_REQUEST\nglobal.DTRACE_HTTP_CLIENT_RESPONSE\nglobal.global\nglobal.process\nglobal.Buffer\nglobal.clearImmediate\nglobal.clearInterval\nglobal.clearTimeout\nglobal.setImmediate\nglobal.setInterval\nglobal.setTimeout\nglobal.console\n")])])]),t("p",[s._v("和浏览器运行环境上window上的变量可以直接使用一样，global对象上的属性也可以直接使用，比如平时我们用的console.log('xxx')之所以能用,其实是调用的global.console.log('xxx')")]),s._v(" "),t("p",[s._v("当然你也可以自己跟global上加上变量，这样你就可以在全局使用它了，比如")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("a.js\n//在全局对象上加上了属性aaa,就可以直接使用aaa这个变量了\nglobal.aaa = 'xxxxx'\nconsole.log(aaa)\n\n//这里要正确的打印出aaa,需要a.js在b.js之前执行\nb.js\nconsole.log(aaa)\n")])])]),t("p",[s._v("和浏览器中的window对象不同的是，在浏览器中所有var申明的对象，会挂载到window上，但是在node中并不会")]),s._v(" "),t("p",[s._v("var声明的变量并不会挂载到global全局变量上")]),s._v(" "),t("h2",{attrs:{id:"👇模块级变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#👇模块级变量"}},[s._v("#")]),s._v(" 👇模块级变量")]),s._v(" "),t("ul",[t("li",[s._v("require 函数")]),s._v(" "),t("li",[s._v("exports 函数")])]),s._v(" "),t("h3",{attrs:{id:"🍖-require-引用-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🍖-require-引用-模块"}},[s._v("#")]),s._v(" 🍖 require 引用 模块")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("require(/a.js)      //可以省略.js 要是路径\n\nrequire(express)      //直接名字 - node自带的或是第三方的\n//（第三方的会去node_modues这个文件夹下找）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"🍙-mudule-exports-输出模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🍙-mudule-exports-输出模块"}},[s._v("#")]),s._v(" 🍙 mudule.exports 输出模块")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("c.js\nvar a = function() {\n    console.log('a');\n};\n\nvar b = function() {\n    console.log('b');\n};\n\nvar c = 'abcefg';\n\n//第一种用法，在module.exports对象上添加属性\nmodule.exports.a = a;\nmodule.exports.b = b;\nmodule.exports.c = c;\n\n//第二种用法，直接给module.exports重新赋值\nmodule.exports = {'a':a,'b':b,'c':c};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("blockquote",[t("p",[s._v("输出可以用module.exports 或者 简写成exports 。但还有一些区别")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//exports只有一种用法\nexports.a = a;\nexports.b = b;\nexports.c = c;\n\n//下面用法是错误的，因为直接给赋值并不能改变module.exports的值\nexports = {'a':a,'b':b,'c':c};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"【👆node的告一段落👆】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【👆node的告一段落👆】"}},[s._v("#")]),s._v(" 【👆node的告一段落👆】")]),s._v(" "),t("p",[s._v("接下来👇")]),s._v(" "),t("h2",{attrs:{id:"es6模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6模块化"}},[s._v("#")]),s._v(" ES6模块化")]),s._v(" "),t("p",[s._v("说完webpack的那些概括与node的引入/暴露。就来说说ES6的模块化是咋样的。👇")]),s._v(" "),t("p",[s._v("es6提供了import 和 export来实现模块化")]),s._v(" "),t("ul",[t("li",[s._v('import （可以在vue项目里看到很多什么import Vue from "vue" 这种')]),s._v(" "),t("li",[s._v("export （也可以在vue文件里经常看到什么 export default{}）")])]),s._v(" "),t("p",[t("strong",[s._v("var App = require('./App')")]),s._v(" 等价写法 "),t("strong",[s._v("import App from './App'")])]),s._v(" "),t("p",[t("strong",[s._v("module.exports={ 'a':a }")]),s._v(" 等价写法 "),t("strong",[s._v("export default { a }")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("es6中是使用export命令后面加上要导出的变量来实现导出的，而用import xx from 'xxxx'的形式来引入，而xx必须跟export命令后的变量名一模一样才能导入")]),s._v(" "),t("p",[s._v("上面和require、module.exports等价的用法使用了default关键字，所以在引入时可以自定义名字，这也是最常用的用法")]),s._v(" "),t("h2",{attrs:{id:"模块化总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化总结"}},[s._v("#")]),s._v(" 模块化总结")]),s._v(" "),t("p",[t("strong",[s._v("无论是node.js还是es6提供的模块化功能都不能直接使用，浏览器是没有办法识别node.js环境的变量也无法识别es6的语法，所以我们需要用webpack来实现，把它们都转化成浏览器能识别的代码。")])]),s._v(" "),t("p",[s._v("在使用webpack的时候，我们还是用es6的import和export比较多，因为require js文件直接可以用es6替代，引入node_module我们只要通过配置wepack也可以轻松用es6替代，而node.js的核心模块在浏览器中本来就没法用，所以在前端代码中也用不上，所以只要用es6的语法来实现模块化就好啦")]),s._v(" "),t("p",[s._v("但是webpack重写了node的require方法，使用require可以引入其它资源文件，比如图片和.json文件等，这个时候我们还是需要使用require的")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("可以看得出来，毕竟在vue-cli项目里很多都是es6的引入方式和暴露方式，然后请求图片等静态资源的时候用require")])])]),s._v(" "),t("h2",{attrs:{id:"最麻烦的webpack基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最麻烦的webpack基本配置"}},[s._v("#")]),s._v(" 最麻烦的webpack基本配置")]),s._v(" "),t("blockquote",[t("p",[s._v("还好是基本......\nwebpack.config.js👇")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//前面说到过，直接require的是node的核心模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//html-webpack-plugin是一个需要自己通过npm安装的模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HtmlWebpackPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html-webpack-plugin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// entry：定义要被打包的文件，可以是一个或者多个")]),s._v("\n    entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        app"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main.js'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// output：定义要打包后生成的文件")]),s._v("\n    output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义生成的文件")]),s._v("\n        fileName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义生成文件的路径")]),s._v("\n        path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义引用文件的路径,（实际项目中，因为编译生成的文件很有可能被你拷贝到的网站路径和现在生成的路径不一致）")]),s._v("\n        publicPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//resolve：定义能够被打包的文件，文件后缀名")]),s._v("\n    resolve"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//extensions配置的是可以省略的文件名类型，如果引用一个文件并没有加文件名，会去自动寻找以下配置的文件名")]),s._v("\n        extensions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//为一个常用路径取一个别名，以后就不用写src的路径了，直接用@替代，它就会自动变成的绝对路径，如果resolve有多个参数，就是把参数拼接起来后然后取它们的绝对路径")]),s._v("\n        alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//module: webpack将所有资源都看做是模块,而模块就需要加载器；")]),s._v("\n    module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模块加载规则，比如es6语法的js文件浏览器是无法识别的，我们就需要使用babel-loader帮忙转化成es5的文件")]),s._v("\n        rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用正则表达式表示要匹配的文件，这里表示的是后缀为.vue的文件")]),s._v("\n            test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.vue$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//loader都是需要通过安装或者自己写的，不是随便写一个文件名就可以的")]),s._v("\n            loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.js$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//表示需要为哪些目录下的.js文件使用babel-loader做处理")]),s._v("\n            include"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//plugins：定义额外的插件,插件可以做到load做不到的事情，一般load只是辅助转化一个文件，把文件中浏览器不支持的部分转化成浏览器认识的")]),s._v("\n    plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//会自动帮你生成一个index.html，并在html文件中引入打包生成的js文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("h2",{attrs:{id:"〖完〗-【最后】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#〖完〗-【最后】"}},[s._v("#")]),s._v(" 〖完〗-【最后】")]),s._v(" "),t("p",[s._v("最后 基本的webpack就学到这里了。"),t("br"),s._v("\n很好的暂时理解了webpack的一个作用与基本使用。"),t("br"),s._v("\n当然，在vue项目中（也就是vue-cli搭建的项目中）基本已经配置好了，当然，我们不能知其然，不知其所以然，也许从某种程度上来说，这种理解还只是皮毛，但是暂时，已经足够了。")]),s._v(" "),t("p",[s._v("好吧 还有新的理解我再填写下来。")])])}),[],!1,null,null,null);a.default=e.exports}}]);