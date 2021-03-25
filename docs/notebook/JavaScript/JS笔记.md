---
title: 🍋『JS笔记』🍋
---


## 🟢 Math 数学方法

- `.ceil()` 	向上取整
- `.floor()` 	向下取整
- `.round()` 	四舍五入
- `.random()` 	随机数(0~1之间) 
- `Math.random()*10`	(1~10之间)

## 🟢 数组方法

- `slice()`           截取数组的部分元素

- `push()`            向数组末尾添加元素
- `pop()`             把数组最后一个元素删除掉

- `unshift()`         往数组头部添加元素
- `shift()`           把数组的第一个元素删掉 **并且** 返回第一个数组的元素

- `sort()`            排序
- `reverse()`         反转排序
- `splice()`          万能方法，指定的索引开始删除若干元素，从该位置添加若干元素

- `concat()`          连接起来，并返回一个新的Array

- `join()`            把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串


## 🟢 事件DOM
### 🔵【鼠标事件】
- `onclick()` 	鼠标点击
- `ondblclick()`	鼠标双击
- `onmousedown()`	鼠标被按下
- `onmouseup()`	鼠标按下后的松开
- `oncontextmenu()` 	鼠标右键打开上下文菜单时触发
- `oncontextmenu="return false"`	屏蔽右键菜单
- `onmouseenter()` 	鼠标移到: //不支持冒泡
- `onmouseover()` 	鼠标移到://影响子元素
- `onmouseleave()` 	鼠标移开: //不支持冒泡
- `onmouseout()` 	鼠标移开://影响子元素
- `onmousemove()` 	鼠标被移动

### 🔵【键盘事件】
- `onkeydown()` 	键盘按下
- `onkeypress()`	键盘按下并且松开
- `onkeyup()` 	    键盘松开

### 🔵【框架/对象事件】

- `onabort` 	图像的加载被中断
- `onbeforeunload` 	即将离开页面(刷新或关闭)时触发
- `onerror` 	加载文档或图像时发生错误
- `onhashchange` 	该事件在当前 URL 的锚部分发生修改时触发。
- `onload` 	浏览器已完成页面加载:
- `onpageshow` 	该事件在用户访问页面时触发
- `onpagehide` 	该事件在用户离开当前网页跳转到另外一个页面时触发
- `onresize` 	窗口或框架被重新调整大小。
- `onscroll` 	当文档被滚动时发生的事件。
- `onunload` 	用户退出页面。 ( `<body>` 和 `<frameset>`)

### 🔵【表单\文本 事件】

- `onchange` 	改变
- `onfocus` 	聚焦:(不支持冒泡)
- `onfocusin` 	聚焦:(影响子元素)
- `onblur`	失焦:(不支持冒泡)
- `onfocusout` 	失焦:(影响子元素)
- `oninput` 	有输入时
- `onreset` 	表单重置时
- `onsearch` 	用户向搜索域输入文本时触发(`<input="search">`)
- `onselect` 	用户选取文本时触发(`<input>`和`<textarea>`)
- `onsubmit`	表单提交时触发

## 🟢 日期\时间
需要先写这个👇
- `date=new Date()`	日期转换为字符串 
---
- `date.getFullYear()`	返回年份(四位数) 年
- `date.getMonth()`	返回月份(0~11) 月
- `date.getDate()`	一个月中的某一天(1~31) 日
- `date.getDay()`	一周中的某一天(0~6) 星期
- `date.getHours()`	返回小时(0~23) 时
- `date.getMinutes()`	返回分钟(0~59) 分
- `date.getSeconds()`	返回秒速(0~59) 秒
- `date.getMilliseconds()`	返回毫秒(0~999) 毫秒
- `date.getTime()`	返回 1970 年 1 月 1 日至今的毫秒数。

## 🟢 检查类型

    typeof [检测基本类型]
    instanceof [检测应用类型 123 instanceof number]

## 🟢 arguments

    arguments.length [参数的长度]
    arguments [转入的参数]
## 🟢 Infinity 无限大

    Infinity
    -Infinity

## 🟢 字符串方法

    toUpperCase()       把一个字符串全部变为大写
    toLowerCase()       把一个字符串全部变为小写
    indexOf()           会搜索指定字符串出现的位置： 没有找到会返回 -1 
    substring()         返回指定索引区间的子串



## 🟢 map

    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael');           // 95

    var m = new Map();          // 空Map
    m.set('Adam', 67);          // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam');              // 是否存在key 'Adam': true
    m.get('Adam');              // 67
    m.delete('Adam');           // 删除key 'Adam'
    m.get('Adam');              // undefined

## 🟢 set

'Set'和'Map'类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。  
要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：  
通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：

    s.add(4);
    s;                  // Set {1, 2, 3, 4}
    s.add(4);
    s;                  // 仍然是 Set {1, 2, 3, 4}
    通过delete(key)方法可以删除元素：

    var s = new Set([1, 2, 3]);
    s;                  // Set {1, 2, 3}
    s.delete(3);
    s;                  // Set {1, 2}





    