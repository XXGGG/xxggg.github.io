---
title: 🥝『Vue-router』🥝
---

[【参考文章】](https://www.jspang.com/detailed?id=25)

简介： 由于Vue在开发时对路由支持的不足，后来官方补充了`vue-router`插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作`vue-router`。要学习`vue-router`就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，`vue-router`就是我们WebApp的链接路径管理系统。

有的小伙伴会有疑虑，为什么我们不能像原来一样直接用`<a></a>`标签编写链接哪？因为我们用Vue作的都是单页应用，就相当于只有一个主的index.html页面，所以你写的`<a></a>`标签是不起作用的，你必须使用`vue-router`来进行管理。



## 🟢【安装】

```sh
npm install vue-router --save-dev
```
在vue-cli的配置👇
```js
//src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

Vue.use(VueRouter)

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }
    // {path:'/',name:'Hello',component:Hello} //可以写成一行！好看！
  ]
})
```
> 在vue2.x是用Vue.use(VueRouter)   
在vue3.x用的是 createApp(App).use(router).mount('#app')  
不过那个.mount是挂在 类似于 new Vue({ el:app }) 

---



## 🟢【基础】

在模板里要跳转的链接 肯定是使用
```html
<router-link to="/xxg">Go to xxg</router-link>
```
这样的方式~
```js
//src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
import xxg from '@/components/xxg'

Vue.use(VueRouter)

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }
    // {path:'/',name:'Hello',component:Hello} //可以写成一行！好看！
    {path:'/xxg',name:'xxg',component:xxg}
  ]
})
```
---

## 🟢 嵌套路由（子路由）
在父组件.vue 中 加入一个`router-view`：
```html
<router-view></router-view>
```
然后在路由设置文件里设置这个 父组件的children👇
```js
// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import xxg from '@/components/xxg'

import xxg2 from '@/components/xxg2' //这个这个
import xxg3 from '@/components/xxg3' //这个这个

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // ....
    { path: '/xxg', component: xxg,
      children: [
        {path: '/',component: xxg}, 
        {path: '/xxg2',component: xxg2}, //这个这个
        {path: '/xxg3',component: xxg3}  //这个这个
      ]
    }
  ]
})
```
---



## 🟢 路由组件 -【传参】
### 🔵 1. params（页面刷新会丢失）
【👇设置】
```js
// /src/router/index.js
{
  routes: [
      //...
      {path:'/params', name:'params', component: Params}
  ]
}
```
【👇设置2】
```js
// /src/router/index.js
{
  routes: [
      //...
      {path:'/params/:key', name:'params', component: Params}
  ]
}
```
>**如果在设置中加入这个冒号形式，页面刷新就不会丢失数据，但相应是，他就变得跟url传递参数一样 会把key这个信息暴露在url链接上**  

【👇使用】
```html
<router-link :to="{name:xxg,params:{key:value}}">valueString</router-link>
<!-- 注意这里使用的是name，而不是path -->
```
- `name`：就是我们在路由配置文件中起的name值。
- `params`：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。  

【👇取值】
```html
<div>{{$route.params.key}}</div>
```
```js
this.$route.params.key
```
的方式拿到传递的参数（注意！ 是route，而不是router）
> 用params的方式传过去的参数 如果不用HTML5的那个临时本地存储起来，浏览器一刷新就什么都没了....（他不像url链接传参那样可以把参数映射在链接上）
### 🔵 2. url传参 也叫【动态路由】（页面刷新不会丢失）

【👇设置】- 冒号形式
```js
// /src/router/index.js
{
  routes: [
      {path:'/params/:Id', name:'params', component: Params}
  ]
}
```
【👇使用】- 传！
```html
<router-link to="/params/996">params</router-link> |
```
【👇取值】- 取！
```
//js 👇
this.$route.params.Id

// html 👇
{{$route.params.Id}}
```
>用url链接传参 那么传的信息就会保持在 链接url上 比如这个“params/996”这个996，哪怕浏览器刷新 这个996的信息还在 可以取到值

### 🔵 3. query
使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？
【👇设置】
```js
// /src/router/index.js
{
  routes: [
      //...
      {path:'/params', name:'params', component: Params}
  ]
}
```
【👇使用】
```js
methods：{
  xxx(id) {
      this.$router.push({
        path: '/params', //注意这里使用的是path，而不是name
        query: {
          id: id
        }
      })
  }
```
【👇取值】
```
this.$route.query.id
```

---

## 🟢 $router - $route
>注意看好是`$router` 还是 `$route`  

可以通过 this.$route 访问当前路由：
### 🔵 this.$route.params (捕获传参)
params的英文单词意思是 “参数”
```js
this.$route.params.username
```
### 🔵 this.$router.go
```js
this.$router.go(-1) //后退回 后一个路由
this.$router.go() //前进一个路由
```
### 🔵 this.$router.push
```js
this.$router.push('/') //跳转路由
```

---

## 🟢 动态路由匹配
```js
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
>是不是很像url链接传参捏~ 其实就是一个东西。  

像 /user/foo 和 /user/bar 都将映射到相同的路由。

**`$route.params.id`**

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中。例如：


模式                |	匹配路径 |	$route.params
|:-:                |:-: |:-:
/user/:username     |	/user/evan|	{ username: 'evan' }
/user/:username/post/:post_id	| /user/evan/post/123	| { username: 'evan', post_id: '123' }

---

## 🟢 重定向和别名

### 🔵 重定向 `redirect`
重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```
重定向的目标也可以是一个命名的路由：
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})
```


### 🔵 别名
“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？👇

/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

```js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```

>重定向是 访问a 但是把你重新定向到b去  
而别名是 访问a 就是访问a 只是改个名字 叫b而已。。。

“别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。

>暂时还不知道具体有什么用。

---


## 🟢 路由的过渡动画

想让路由有过渡动画，需要在`<router-view>`标签的外部添加`<transition>`标签，标签还需要一个`name`属性。
```html
<transition name="fade">
  <router-view ></router-view>
</transition>
```
组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：👇
1. fade-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
2. fade-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
3. fade-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
4. fade-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。  
👇👇举个栗子👇👇
```css
.fade-enter {
  opacity:0;
}
.fade-enter-active{
  transition:opacity .5s;
}

.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
## 🟢 捕获所有路由或 404 Not found 路由
```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```
路由 { path: '*' } 通常用于客户端 404 错误 👇
```js
{
  path:'*',
  component:Error
  //然后再写一个Error.vue的页面 也就是404页面
}
```

当使用一个通配符时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过通配符被匹配的部分：
```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```
---

## 🟢 router.push

`this.$router.push`
| 声明式	| 编程式 |
| :-: | :-: |
| ` <router-link :to="...">`	| `router.push(...)` |

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```
>简单点说就是 如果你要使用 params来传送参数 就要使用name！！！

---

## 🟢 router.go(n)
```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

---

## 🟢 命名视图（单页面多路由）
```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：
```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```
> 这个还是很少用的。

## 🟢 HTML5 History 模式

默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
>在vue3.0以后 ->  `history: createWebHistory(process.env.BASE_URL)`,

当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id ，也好看！

不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面


### 🔵 警告
给个警告，因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。
```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }
  ]
})
```
---
## 路由的钩子👇

```js
{
      path:'/params',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```
1. to:路由将要跳转的路径信息，信息是包含在对像里边的。
2. from:路径跳转前的路径信息，也是一个对象的形式。
3. next:路由的控制参数，常用的有next(true)和next(false)。

>在配置文件中的钩子函数，只有一个钩子-beforeEnter，如果我们写在模板中就可以有两个钩子函数可以使用：

- beforeRouteEnter：在路由进入前的钩子函数。
- beforeRouteLeave：在路由离开前的钩子函数。

```js
export default {
  name: 'params',
  data () {
    return {}
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
```
