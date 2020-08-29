(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{525:function(s,a,t){"use strict";t.r(a);var r=t(4),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"🥝npm🥝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🥝npm🥝"}},[s._v("#")]),s._v(" 🥝npm🥝")]),s._v(" "),t("blockquote",[t("p",[s._v("为什么用npm 参考文章："),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24357770",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/24357770"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"具体步骤（🐱‍👤一些意义于来由）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤（🐱‍👤一些意义于来由）"}},[s._v("#")]),s._v(" 具体步骤（🐱‍👤一些意义于来由）")]),s._v(" "),t("blockquote",[t("p",[s._v("关于来源 貌似直接看参考文章好，直接抄过来也没什么意思。\n了解一下就好了。")])]),s._v(" "),t("p",[s._v("NPM 的思路大概是这样的：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("买个服务器作为代码仓库（registry），在里面放所有需要被共享的代码")])]),s._v(" "),t("li",[t("p",[s._v("发邮件通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）")])]),s._v(" "),t("li",[t("p",[s._v("社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码")])]),s._v(" "),t("li",[t("p",[s._v("下载完的代码出现在 node_modules 目录里，可以随意使用了。")])])]),s._v(" "),t("p",[s._v("这些可以被使用的代码被叫做「包」（package），这就是 NPM 名字的由来：Node Package(包) Manager(管理器)。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"g-全局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g-全局"}},[s._v("#")]),s._v(" -g 全局")]),s._v(" "),t("p",[s._v("全局会安装到电脑的user目录下"),t("br"),s._v("\n没带g就会安装到当前文件夹里")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"s-安装到生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s-安装到生产环境"}},[s._v("#")]),s._v(" -S 安装到生产环境")]),s._v(" "),t("p",[s._v("生产环境就是生产出来 可以用 打包好的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -S\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"d-安装到开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d-安装到开发环境"}},[s._v("#")]),s._v(" -D 安装到开发环境")]),s._v(" "),t("p",[s._v("开发就是还没完成，还在开发中，调试中。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -D\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" instll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("想要安装的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("p",[s._v("一样可以带-g 卸载全局里面的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unistll "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("需要卸载的模块"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);