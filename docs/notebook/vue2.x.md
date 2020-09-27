# 🍉Vue2.x🍉

关于vue2.x 的一些小知识，不会记得很全。

```property```  :属性、性质、财产、(可以理解为在js里定义的值)       
```Attribute```  :属性、特质、(可以理解为在html标签的属性)    

# 🟢【基础】👇
直接看👉 [官方文档](https://cn.vuejs.org/v2/guide/instance.html)

---

## 🟢 父子传值：父 -> 子 （常用）
在子👇
```js
props:['todo']  // "prop"，类似于一个自定义 attribute。
```
在父👇
```js
 <todo-item
    v-bind:todo="item"
></todo-item>
```

---

## 🔵  Vue暴露的实例与方法 （关于api）
除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。例如：
```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```
[API参考](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property)

>一个vue项目制new Vue一次，通常是在main.js里，这次实例化的Vue对象是根组件，其他的子组件都是通过配置文件的方式一层一层的叠加上的，通过vue组件配置进行叠加的子组件，其实是vue的一种省略机制，它避免了你每次都去实例化子组件。   
vue-cli生成的项目脚手架里，通过webpack配置很好的处理了这些问题，每个单文件组件 *。vue js输出的就是一份配置，就足够了，最终他们都会汇总到app.vue，app.vue再在main.js里实例化，也就是说这套脚手架里面只有一个实例化对象。

**new Vue在vue2.x的vue-cli中出现在main.js 但是vue3.0中木有**
**在vue-cli中要用this.$data 这样来得到vue的api**


## 🟢 生命周期钩子（常用）
👇就是这些 特定时候触发的钩子 整个网页生成、更新、销毁...的时候  
```created``` ```mounted```  ```updated``` 等等......

生命周期钩子的 this 上下文指向调用它的 Vue 实例。

::: danger  
不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。  
:::

![](../../.vuepress/public/img/note/vue-hook.png)


---


## 🟡 动态参数 (2.6.0 新增的)
::: tip
2.6.0 新增
:::
```html
<a v-bind:[attributeName]="url"> ... </a>
```
如果你的 Vue 实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href

## 🟡 修饰符
```html
<form v-on:submit.prevent="onSubmit">...</form>
```
修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()


---


## 🟢 计算属性（常用）
```js
computed: {
    // 计算属性的 getter
    xxg: function () {
      // `this` 指向 vm 实例
      return this.message
    }
  }
```
这里我们声明了一个计算属性 reversedMessage。我们提供的函数将用作 property vm.reversedMessage 的 getter 函数：
```js
console.log(vm.reversedMessage) // => 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // => 'eybdooG'
```

### 1、计算属性缓存 vs 方法
**计算属性是基于它们的响应式依赖进行缓存的**
如果你不希望有缓存，请用方法来替代


### 2、计算属性 vs 侦听属性
Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。  

>👇 下面这个例子不错，抄过来！，是vue官方文档的
```html
<div id="demo">{{ fullName }}</div>
```
```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```
上面代码是命令式且重复的。将它与计算属性的版本进行比较👇
```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```
好得多了，不是吗？ o(￣▽￣)ｄ

### 🟡 3、计算属性的 setter （少用）
计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
>但是这个很少用到

## 🔵 侦听器（watch 常用）
```js
watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
```
除了 watch 选项之外，您还可以使用命令式的 vm.$watch API。

>原文中的知识  👇
[知识](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)  
// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
// 请参考：https://lodash.com/docs#debounce


---


## 🟢 Class与Style的动态绑定（常用）

### 🟢 对象语法
>直接上例子吧
```html
<div v-bind:class="{ active: isActive }"></div>
```
```js
data: {
  isActive: true,
}
```
👆上面是基本的，下面是联合 “计算” - computed
```html
<div v-bind:class="classObject"></div>
```
```js
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

>[1] truthy 不是 true，详见 MDN 的解释。truthy是真值，意思就是有值。

### ❗ 自动添加前缀 （！！！）
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS property 时，如 transform，Vue.js 会自动侦测并添加相应的前缀。


### 🟡 多重值（少用）
```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex

---

## 🟢 条件渲染 🟢
```v-if``` ```v-else-if``` ```v-else``` 这些

### 在 ```<template>``` 元素上使用 ```v-if``` 条件渲染分组

```<template>``` 元素当做不可见的包裹元素，并在上面使用 ```v-if```。最终的渲染结果将不包含 ```<template>```元素。
```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### 用 key 管理可复用的元素
>这里不算特别重要的内容，但还是复制过来 - 网址 哈哈
[网址](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)


### 🟢 ```v-show``` 🟢
v-if  是 -> 是否有这个标签  
v-show 是 -> 是否显示 （虽然这个东西很早就清楚了）  
v-show 不支持 ```<template>``` 元素  


### 🟢 ```v-if``` 与 ```v-for``` 一起使用

::: 
不推荐同时使用 v-if 和 v-for
:::
>但我还是会用 嘟嘟嘴🐷 偶尔~

---


## 🟢 列表渲染 🟢
👉 ```v-for```  
👉 ```item in items```   
你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

### 🟢 在 ```v-for``` 里使用对象
会遍历出：值  

当然 可以带上key键 比如：
```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```
还可以带上👆index 索引 o(￣▽￣)ｄ


### 🟢 数组更新检测

#### 变更方法
Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
- ```push()```
- ```pop()```
- ```shift()```
- ```unshift()```
- ```splice()```
- ```sort()```
- ```reverse()```

#### 替换数组
变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 ```filter()```、```concat()``` 和 ```slice()```。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：


## 🟢 显示过滤/排序后的结果
>举个例子 我想把 ```[3,8,4,1]``` 按顺序来排列
但是不想变更原来的这组数据，那就用“计算属性”！👇
```js
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```
在“计算属性”不适用的情况下 在methos里用一个方法

---

## 🟢 事件处理 🟢
```v-on```简写 - ```@```  

其他的就不记了

### 👇`$event`  `event` 是原生 DOM 事件
有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 ```$event``` 把它传入方法：
```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```
```js
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 🔵 事件修饰符 (少用)
在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。


- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

#### 🔵  once - 点击事件将只会触发一次 
```html
<a v-on:click.once="doThis"></a>
```
#### 🔵 passive
Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。
```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```
这个 .passive 修饰符尤其能够提升移动端的性能。


:::
不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
:::


---


### 🔵 按键修饰符
在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 ```v-on``` 在监听键盘事件时添加按键修饰符：
```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```
你可以直接将 ```KeyboardEvent.key``` 暴露的任意有效按键名转换为 ```kebab-case``` 来作为修饰符。
```html
<input v-on:keyup.page-down="onPageDown">
在上述示例中，处理函数只会在 $event.key 等于 PageDown 时被调用。
```

### 🔵 按键码别名：(这些修饰符都蛮少用的)
```html
<input v-on:keyup.enter="submit">
```
- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

### 🔵 系统修饰键 (这些修饰符都蛮少用的)
可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- .ctrl
- .alt
- .shift
- .meta

:::
请注意修饰键与常规按键不同，在和 ```keyup``` 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ```ctrl``` 的情况下释放其它按键，才能触发 ```keyup.ctrl```。而单单释放 ```ctrl``` 也不会触发事件。如果你想要这样的行为，请为 ```ctrl``` 换用 ```keyCode```：```keyup.17```。
:::

### 🔵 .exact 修饰符 (这些修饰符都蛮少用的)
.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

### 🔵 鼠标按钮修饰符 (这些修饰符都蛮少用的)
> 有了事件修饰符，键盘修饰符，那就肯定有鼠标修饰符啦！！！

- .left
- .right
- .middle

### 为什么在 HTML 中监听事件？
>虽然这个不是重点，但是我觉得他说的很对，所以copy过来，因为js里就真的只要处理逻辑就好了，而不用的管理这个按键是怎么触发发生的。  
触发的条件交给html的属性，js完完全全写业务逻辑代码 o(￣▽￣)ｄ

👇原话：👇    
你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。

2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。

3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。


----
-----

## 🟢 表单输入绑定 🟢
```v-model``` 
【基础】 - 略......

###  🟢 复选框
多个复选框，绑定到同一个数组：
```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
```
```js
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```
选中的就会在 checkedNames中多一个value值出来。

### 🟢 单选
```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```
```js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

### 🟢 选择框
#### 单选选择框
```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```
```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

:::
如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。
:::

### 🟢 值绑定
#### 复选框
```html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"   //选择中
  false-value="no"   //没有选中
>
```
#### 单选
```html
<input type="radio" v-model="pick" v-bind:value="a">
```

### 🔵 修饰符 (！！！)

#### `.lazy`
在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```
>意思是 在改变的时候更新，而不是在输入的时候更新
改变有很多方式，但是输入就只有键盘输入等...

#### `.number`
如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
```html
<input v-model.number="age" type="number">
```
这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值

#### `.trim`
如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
```html
<input v-model.trim="msg">
```


--- 

## 🐷 组件基础 🐷 

略略略...

### data 必须是一个函数

```js
data: function () {
  return {
    count: 0
  }
}
```
>[网址](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)



## 🟢 监听子组件事件
>在子组件的触发 -> 在父组件感知到，然后运用方法 哈哈 o(￣▽￣)ｄ

在父组件中：👇设置一个按钮 只不过这个按钮的触发器在 子组件里
```html
<blog-post v-on:enlarge-text="postFontSize += 0.1"></blog-post>
```

**```$emit```** 👈 就是这个！！  
**在子组件中按这个按钮就可以在触发父组件的事件！！**
```html
<button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>
```

👇
还可以带值
```html
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>
```
然后当在父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值：
```html
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```
>简单的说，父组件的$event 是可以接受子组件$event


或者，如果这个事件处理函数是一个方法：
```html
<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>
```
那么这个值将会作为第一个参数传入这个方法：  
>就是可以省略不写，他会自动传到方法里的第一个参数
```js
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

## 🔵 在组件上使用 v-model

>详细请参考官方文档：[网址](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

```html
<custom-input v-model="searchText"></custom-input>
```


---


## 🔵 通过插槽分发内容

```<slot></slot>```


## 动态组件
```html
<component v-bind:is="currentTabComponent"></component>
```

```currentTabComponent``` 
- 已注册组件的名字，或
- 一个组件的选项对象

>我觉得这个非常重要，因为我们在写动态组件的时候，要不就是写出了很多个组件，然后再用v-if 来判断它按下了哪个相关的组件，让它的v-if是true， 而这里直接就一个组件，然后用is的方式来让人家选择 选好后就只要替换掉currentTabComponent这个变量就行了。
👇 比如：
```html
<xxg_1 v-if='lala = one'></xxg_1>
<xxg_2 v-if='lala = two'></xxg_2>
<xxg_3 v-if='lala = three'></xxg_3>
```
所以其实还是
```html
<component v-bind:is="lala_xxg"></component>
//然后让lala_xxg = xxg_1 或是xxg_2 或是xxg_3
```


## 🐷 解析 DOM 模板时的注意事项
有些 HTML 元素，诸如``` <ul>、<ol>、<table> 和 <select>，```对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 ```<li>、<tr> 和 <option>，```只能出现在其它某些特定的元素内部。

这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：
```html
<table>
  <blog-post-row></blog-post-row>
</table>
```
这个自定义组件 ```<blog-post-row> ```会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 ```is``` attribute 给了我们一个变通的办法：

需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：

- 字符串 ```(例如：template: '...')```
- 单文件组件 ```(.vue)```
- ```<script type="text/x-template">```

>比如我们在vue-cli创建的项目里 的.vue里面就不会出现这种情况 不用使用is...

哦 那没事了！

## 🐷 【完】- 〖基础的完〗 🐷

好，那这就是关于Vue官方文档的一点点小总结 是基础的小总结，
是基础的总结  基础的【完】

---

# 🍣【深入了解组件】🍚

## 🟢 组件注册

### 全局注册
组件是全局注册的。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中。

```js
Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })
```
```html 
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```
>就像我们的vue-cli项目里的单文件组件，都加载在#app里，当然 ```new Vue``` 是出现在入口文件main.js里的

在所有子组件中也是如此，也就是说这三个组件在各自内部也都可以相互使用。

### 🟢 局部注册
全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。  
👆 这句话很重要

**注意局部注册的组件在其子组件中不可用。例如，如果你希望 ComponentA 在 ComponentB 中可用，则你需要这样写：👇**  
```js
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```
>就是我们在vue-cli项目中经常看到组件引用另一个组件要做的事情。👆
```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
```
>ES6的写法👆

---

## 🔵 模块系统

### 在模块系统中局部注册
如果你还在阅读，说明你使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，我们推荐创建一个 components 目录，并将每个组件放置在其各自的文件中。

然后你需要在局部注册之前导入每个你想使用的组件。例如，在一个假设的 ComponentB.js 或 ComponentB.vue 文件中：
```js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```
现在 ComponentA 和 ComponentC 都可以在 ComponentB 的模板中使用了。

>这就是vue-cli项目采用了webpack模板里并且使用了es6后模块化开发的效果，引入了各个组件（components）。

> 用 `import` 跟 `export` 是ES6的东西，Babel是用来把es6的东西转换成es5的 es6有很多语法糖，但还暂时有一些浏览器不算完全支持，所以还是需要转换的！！ （暂时！！）未来可能不用，也有可能未来要es7转换成es6的呢 🤭

## 🟡 基础组件的自动化全局注册
如果你恰好使用了 webpack (或在内部使用了 webpack 的 Vue CLI 3+)，那么就可以使用 require.context 只全局注册这些非常通用的基础组件。这里有一份可以让你在应用入口文件 (比如 src/main.js) 中全局导入基础组件的示例代码：

```js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
```
>没有用过，有点难理解，但是可以明白，这个就是用来注册一些基本组件的，不是注册大组件的，是全局来注册一些小组件的


---
---

## 🔵 Prop
>prop是出现在子组件中用来接收父组件传递过来的属性attribute的

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名:
```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```
```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```
使用字符串模板，那么这个限制就不存在了。


### 🔵 Prop类型
每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：
```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

### 🔵 传递静态或动态 Prop

```html
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>
```
>其他也一样 静态的也带上` : `就好了


### 传入一个对象的所有 property
```js
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```
```html
<blog-post v-bind="post"></blog-post>
```
>简单的说就是前面要 传单个的 就把 它的变量名字用 👉`v-bind:变量名 = "什么什么"`  
而如果要传送一个对象过去就 直接 `v-bind="对象名"`   
相当于简写吧~🤭

### 🔵 单向数据流

父 -> 子 单向

1. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值  
>意思就是 在“子组件”不要去改传过来prop里的值，在data里用一个变量来保存它

2. 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

```js
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```
>这个意思是 你用这个值来做事情就好了，不要改变它。想因为它的变化来做事情，可以用计算属性，这样一旦这个数变了，计算属性就会重新计算，来帮你做事。    
（就是不希望你直接的改变props里的值 就是这么简单！ 引用就好）

### 🔵 Prop验证
为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：
```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```
当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

:::
注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
:::
- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

### 🔴 非 Prop 的 Attribute
>🔴没怎么懂  

[网址](https://cn.vuejs.org/v2/guide/components-props.html#%E9%9D%9E-Prop-%E7%9A%84-Attribute)

>🔴先不搞懂

---
---
## 自定义事件
始终使用 kebab-case 的事件名。（横杠-）


### 🔵 将原生事件绑定到组件
你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符：
```html
<base-input v-on:focus.native="onFocus"></base-input>
```
---
Vue 提供了一个 $listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如：
```js
{
  focus: function (event) { /* ... */ }
  input: function (value) { /* ... */ },
}
```
>有点没怎么懂[网址](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)


### `.sync` 修饰符

----
----

## 🔵 插槽

:::
在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在文档中的 attribute。
:::

`<slot>` `</slot>`

简单的说 它的用法就是这样👇
先在 “子组件” 中 写好一个模板 里面某个地方加上 `<slot>` `</slot>` 这个东西

那么 到时候 在 “父组件”调用这个模块的时候 就可以在这个模块中加东西！（字也可以）（图片也可以）（什么代码片段都可以）（其他组件也可以）

比如： （子组件）👇
```html
<a :href="url">
  <slot></slot>
</a>
```
然后：（在父组件）👇
```html
<xxg-xxg url="xxggg.gitee.io">
  谢夏戈的博客   //👈模板中间
</xxg-xxg>
```
最终渲染👇
```html
<a href="xxggg.gitee.io">
  谢夏戈的博客
</a>
```
>也就是说它会把 模板中间的东西 带到 `<solt>` 这个地方


### 编译作用域
略......

### 🔵 后备内容
有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染


```html
<button type="submit">
  <slot>Submit</slot>
</button>
```

默认的 就是在`<slot>` 标签中间加上默认的信息就可以了！！

当然 如果插值有东西  那就会顶替掉默认的

### 🔴 具名插槽
自 2.6.0 起有所更新。已废弃的使用 slot attribute 的语法。

## 🔴 算了 插槽这一pa 先过 ❌
后面补[网址](https://cn.vuejs.org/v2/guide/components-slots.html)


## 🔵 动态组件 & 异步组件

### 🔵 在动态组件上使用 keep-alive

我们之前曾经在一个多标签的界面中使用 is attribute 来切换不同的组件：
```html
<component v-bind:is="currentTabComponent"></component>
```
当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。
```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```
:::
注意这个 `<keep-alive>` 要求被切换到的组件都有自己的名字，不论是通过组件的 name 选项还是局部/全局注册。
:::

### 🔴 异步组件 ❌
### 🔴 处理加载状态 ❌
## 🔴 处理边界情况 ❌

### 🟡 访问根实例 $root

在每个 new Vue 实例的子组件中，其根实例可以通过 $root property 进行访问。例如，在这个根实例中：  
```js
// Vue 根实例
new Vue({
  data: {
    foo: 1
  },
  computed: {
    bar: function () { /* ... */ }
  },
  methods: {
    baz: function () { /* ... */ }
  }
})
```
所有的子组件都可以将这个实例作为一个全局 store 来访问或使用。
```js
// 获取根组件的数据
this.$root.foo

// 写入根组件的数据
this.$root.foo = 2

// 访问根组件的计算属性
this.$root.bar

// 调用根组件的方法
this.$root.baz()
```


### 🟡 访问父级组件实例
和 `$root` 类似，`$parent` property 可以用来从一个子组件访问父组件的实例。它提供了一种机会，可以在后期随时触达父级组件，以替代将数据以 prop 的方式传入子组件的方式。




### 🔵 访问子组件实例或子元素
尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 ref 这个 attribute 为子组件赋予一个 ID 引用。例如：
```html
<base-input ref="usernameInput"></base-input>
```
```js
this.$refs.usernameInput
```
:::
$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。
:::


---
---

# 🍔【过渡&动画】🌭

## 🔵 进入/离开 & 列表过渡👇

### 🔵 单元素/组件的过渡

Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点

```html
<div id="demo">
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```
```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```
1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. `v-enter-to`：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。

4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. `v-leave-to`：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

> `v-` 是默认的，如果有`<标签>`的name 那就要用 name的 name-enter 这样的方式


### 🟡 自定义过渡的类名

- enter-class
- enter-active-class
- enter-to-class (2.1.8+)
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)

>这个可以结合动画库  
比如👇 
```html
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

<div id="example-3">
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello</p>
  </transition>
</div>
```

### 🟡 显性的过渡持续时间
在这种情况下你可以用 `<transition>` 组件上的 duration prop 定制一个显性的过渡持续时间 (以毫秒计)：
```html
<transition :duration="1000">...</transition>
```
你也可以定制进入和移出的持续时间：
```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```



### 🟡 JavaScript 钩子
可以在 attribute 中声明 JavaScript 钩子
```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```
```js
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```
这些钩子函数可以结合 CSS transitions/animations 使用，也可以单独使用。

:::
当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
:::

## 🟡 更多动画效果 
[网址](https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%9D%E5%A7%8B%E6%B8%B2%E6%9F%93%E7%9A%84%E8%BF%87%E6%B8%A1)

在demo里练习一哈


# 【可复用性&组合】 ❌

## 混入❌
## 自定义指令❌
## 渲染函数&JSX❌
## 插件
插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

1. 添加全局方法或者 property。如：vue-custom-element

2. 添加全局资源：指令/过滤器/过渡等。如 vue-touch

3. 通过全局混入来添加一些组件选项。如 vue-router

4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

>第四个就是添加到原型上 “prototype” （虽然我还不懂什么是原型）
在axios插件的使用上就是把axios添加到原型上Vue.prototype.$axios = axios 
但是在vue3.0以上 没有暴露Vue 而是createApp

>而在element-ui里 全局使用插件则是用Vue.use(ElementUI);


### 使用插件
通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```
```js
Vue.use(MyPlugin, { someOption: true })
```

### 开发插件
Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：  




## 🔵 过滤器
```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

`filters` 过滤器
```js
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```
或者在创建 Vue 实例之前全局定义过滤器：（这个没怎么用过）
```js
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```
>设置一个全局的过滤器，这个Vue就是全局，然后有一个Vue.filter的过滤器，给这个过滤器起一个名字capitalize，然后设置一个方法。













# 【工具】
>概念
## 单文件组件 🐷
export default 和 module.exports :  
都属于导出模块

但是有点区别 exports 是module模块的一个属性 exports变量是指向module.exports，加载模块实际是加载该模块的module.exports 一般为require导入

export default命令，为模块指定默认输出,默认导出一个整体接口 一般为import导入

>其实官方文档已经说得很好了！ 比如下面这段话 👇
v/
### 怎么看待关注点分离？🐷
一个重要的事情值得注意，**关注点分离不等于文件类型分离**。在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。

---


## 🔴 单元测试

🔴 不知道什么单元测试 暂时看不懂

## 🔴 TypeScript 支持

## 生产环境部署
[网址](https://cn.vuejs.org/v2/guide/deployment.html)


# 🔵【规模化】
> 🔵 一个是路由，用vue-router就好了 后面可以慢慢理解

> 🔵 一个是状态管理 也是官方推荐是 vuex 

> 🔴一个是服务器渲染 - SSR Nuxt.js














