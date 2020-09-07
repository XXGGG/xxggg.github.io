# 🍉Vue-router🍉

这个就是vue官方的路由，一般我配合着vue-cli来用。当然也可以在安装vue-cli的时候直接安装埋。

下面就来总结一下一些比较有用的知识吧。 

## 🟢【安装】

```sh
npm install vue-router
```
在vue-cli的配置
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
>嘟嘟嘴 在vue2.x是用Vue.use(VueRouter) 在3.0用的是 createApp(App).use(router).mount('#app')
不过那个.mount是挂在 类似于 new Vue({ el:app }) 那种感觉 主要是我不知道createApp暴露出来的这个是啥 😑

对于这个引入可以单独引入在router文件夹的index.js 然后再把这个js文件引入到main.js文件里   
vue3.0 暴露了很多函数出来，以后理解

---

## 🟢【基础】

在模板里要跳转的链接 肯定是使用
```html
<router-link to="/bar">Go to Bar</router-link>
``` 
这样的方式~
```js
import Home from '@/pages/Veronica/Home'

const router = new VueRouter({
    { path: '/', component: Home },
})

const app = new Vue({
  router
}).$mount('#app')
```
不过这个可以把这个写在router/index.js 然后暴露出去 给main👇
```js
import Home from '@/pages/Veronica/Home'

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
  ]
})
```
export default 就是暴露出去 给main.js

---
## 🟢 $router - $route
>注意看好是`$router` 还是 `$route`  

可以通过 this.$route 访问当前路由：
### 🟢 this.$route.params (捕获传参)
```js
this.$route.params.username
```
### 🟢 this.$router.go
```js
this.$router.go(-1)
```
### 🟢 this.$router.push
```js
this.$router.push('/')
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
像 /user/foo 和 /user/bar 都将映射到相同的路由。

**`$route.params.id`**

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中。例如：


模式                |	匹配路径 |	$route.params
|:-:                |:-: |:-:
/user/:username     |	/user/evan|	{ username: 'evan' }
/user/:username/post/:post_id	| /user/evan/post/123	| { username: 'evan', post_id: '123' }

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` (如果 URL 中有查询参数)、`$route.hash` 等等。你可以查看 API 文档 的详细说明。



## 🔵 响应路由参数的变化
由于动态路由，组件复用 - 生命周期不会重启 -> 所以要检测变化用 watch 监听
```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

或者使用 2.2 中引入的 beforeRouteUpdate 导航守卫：（没用过）
```js
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```


## 🔵 捕获所有路由或 404 Not found 路由
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
路由 { path: '*' } 通常用于客户端 404 错误

当使用一个通配符时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过通配符被匹配的部分：
```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```



## 🔵 嵌套路由
要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：
```html
<router-view></router-view>
```
children -  孩子们👇
```js
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

---
## 🔵 编程式的导航
### router.push(location, onComplete?, onAbort?)

`this.$router.push`
| 声明式	| 编程式 |
| :-: | :-: |
| ` <router-link :to="...">`	| `router.push(...)` |

👇
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

### 🔵 router.go(n)
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

## 🔵 命名路由
```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```
```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```
```js
router.push({ name: 'user', params: { userId: 123 }})
```
>所以以后就顺便给路由取名字 养成习惯。


## 🟡 命名视图

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
话说我们不是能在主页里面去加载其他模块么，怎么还要在路由着设置不同的模块，不过可能是不同的选择罢了吧......


## 🟡 重定向和别名

### 重定向 `redirect`
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


### 别名
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

## 🔵 路由组件传参


## 🔵 HTML5 History 模式

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

# ❌【进阶】

## ❌ 导航守卫



















