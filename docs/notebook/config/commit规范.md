---
title:  🥝commit规范🥝
---

## 🟢〖提前总结〗
❗ 目前正在使用的就是：  
gitmoji ➕ 大写字母标识 ➕ 大致修改的内容与文件
### 使用gitmoji
1. 使用gitmoji  - vs code工具（直接去商店搜）
2. 搭配自己一套标准
    - A : Add       新增
    - U : Update    更新/更改
    - F : Fix       修复

比如：  
💄 U 更改一下颜色  
🐛 F 修复一个bug  
📝 A 新增一篇文章  
✨ A 新增一个功能

---
其实也不一定要跟着下面这个的含义来   
表情嘛，主要是为了好看，其实主要用的那几个 用习惯了也可以自定义   
最主要的还是在描述 - 具体点说做了什么修改就好。   
至于规范，一方面是养成习惯，让自己的代码风格也规范。另一方面如果公司有要求也可以按公司的commit规范来提交公司的代码。

至于我自己还是挺喜欢emoji来提交代码的 先酱！🤭 

|样式|	代码|	含义|
|:-:|:-:|:-:|
🎨|	:art:               |改进代码结构/格式
⚡️|	:zap:               |提高性能
🔥|	:fire:              |移除代码或文件
🐛|	:bug:               |修复了Bug
🚑|	:ambulance:         |重要补丁
✨| :sparkles:          |引入新功能
📝|	:memo:              |写文档
🚀|	:rocket:            |部署程
💄|	:lipstick:          |更新UI和样式文件
🎉|	:tada:              |初次提交
✅| :white_check_mark:  |增加测试
🔑|	:lock:              |修复安全问题
🍎|	:apple:	            |修复macOS上的东西
🐧|	:penguin:	        |修复Linux上的东西
🏁|	:checkered_flag:    |修复Windows上的东西
🤖️| :robot:             |修复Android上的东西
🍏|	:green_apple:	    |修复iOS上的东西
🔖|	:bookmark:          |发布/版本标签
🚨|	:rotating_light:    |移除linter警告
🚧|	:construction:      |工作进行时
💚|	:green_heart:       |修复CI构建
⬇️|:arrow_down:         |依赖降级
⬆️|	:arrow_up:	        |依赖升级
👷|	:construction_worker:|添加CI构建系统
📈|	:chart_with_upwards_trend:	|添加分析或跟踪代码
🔨|	:hammer:	        |重构代码
➖|	:heavy_minus_sign:	|移除依赖
➕|	:heavy_plus_sign:	|添加依赖
🐳|	:whale:	            |关于Docker的工作
🔧|	:wrench:	        |更改配置文件
🌐|	:globe_with_meridians:	|国际化与本地化
✏️|	:pencil2:	        |改正错字
💩|	:hankey:	        |编写了需要改进的差代码
⏪|:rewind:	            |恢复更改
🔀|	:twisted_rightwards_arrows:|合并分枝
📦|	:package:	        |更新已编译的文件或包
👽|	:alien:	            |由于外部API的更改而更新代码
🚚|	:truck:	            |移动或重命名文件
📄|	:page_facing_up:	|添加或更新许可证
💥|	:boom:	            |引入突破性变化
🍱|	:bento:	            |添加或更新资源文件
👌|	:ok_hand:	        |由于代码审查而更新代码
♿️|	:wheelchair:	    |改善易达到
💡|	:bulb:	            |记录源代码
🍻|	:beers:	            |醉着写代码
💬|	:speech_balloon:	|更新文字
🗃️|	:card_file_box:	|执行数据库相关更改
🔉|	:loud_sound:	    |添加日志
🔇|	:mute:	            |移除日志
[https://github.com/carloscuesta/gitmoji/](https://github.com/carloscuesta/gitmoji/)



---

>下面是一些找到，看到的文章。关于如何规范commit的。  
业内比较规范的比如angular团队的规范，还有一些检查你规不规范的机制......  
（可以不用看）

---

## 如何规范commit


>参考文章：[https://zhuanlan.zhihu.com/p/100574040](https://zhuanlan.zhihu.com/p/100574040)  
！！ Angular团队的commit规范

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

### Head 头
- type: 用于说明 commit 的类型。一般有以下几种:
    - feat: 新增feature 
    - fix: 修复bug 
    - docs: 仅仅修改了文档，如readme.md 
    - style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。   
    - refactor: 代码重构，没有新增功能或修复bug 
    - perf: 优化相关，如提升性能、用户体验等。 
    - test: 测试用例，包括单元测试、集成测试。 
    - chore: 改变构建流程、或者增加依赖库、工具等。 
    - revert: 版本回滚

- scope: 用于说明 commit 影响的范围，比如: views, component, utils, test...
- subject: commit 目的的简短描述


### Body

对本次 commit 修改内容的具体描述, 可以分为多行。如下所示:

    # body: 72-character wrapped. This should answer:
    # * Why was this change necessary?
    # * How does it address the problem?
    # * Are there any side effects?
    # initial commit

### Footer

一些备注, 通常是 BREAKING CHANGE(当前代码与上一个版本不兼容) 或修复的 bug(关闭 Issue) 的链接。


---

简单介绍完上面的规范，我们下面来说一下commit.template，也就是 git 提交信息模板。

    git config commit.template   [模板文件名]    //这个命令只能设置当前分支的提交模板
    git config  — —global commit.template   [模板文件名]    //这个命令能设置全局的提交模板，注意global前面是两杠
---

## 工具
 - commitizen（cz-cli） - 交互式建立提交信息的工具

安装：
>commitizen 根据不同的adapter配置 commit message。例如，要使用 Angular 的 commit message 格式，可以安装cz-conventional-changelog。
```sh
# 需要同时安装commitizen和cz-conventional-changelog，后者是adapter 
$ npm install -g commitizen cz-conventional-changelog 
# 配置安装的adapter 
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc 
# 使用 
$ git cz
```


 - commitlint - 提交验证工具


 - gitmoji-cli - 表情包！！！ 就用这个了！！

安装：

```sh
npm i -g gitmoji-cli
```

或者使用vs code 的gitmoji
>还是使用这个吧 当然使用vs code还是比较少用的 毕竟自己经常按 git commit -m 'xxx'
但是如果不使用这个 图标对应是什么意思就很难理解 


-----
【完】





