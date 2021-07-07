---
title: 🥝『Axios』🥝
---

## 🟢 Axios    

Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。  
Github开源地址： [https://github.com/axios/axios](https://github.com/axios/axios)

---

### 🔵 安装方法

#### 【vue2.x 和 vue3.x的安装】
```sh
npm install axios -S
```

### 🔵 配置
在main.js文件中👇
#### 【vue2.x的配置】
```js
import axios from 'axios'
//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;
```

#### 【vue3.x的配置】
```js
import axios from 'axios'
//把 `axios` 加到 `Vue` 的原型中
app.config.globalProperties.$axios=axios
```
这样，axios就可以全局调用了 

**可以设置一个处理请求的js文件，用来处理请求前后的处理（比如什么超时呀，地址那些，拦截器 等等......**

---

## 🟢 GET 方法
```js
this.axios.get('api 接口地址')
.then(res => {  //ES6的箭头写法
  console.log(res)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```
### 🔵 GET 方法传递参数格式如下：
就是在后面加个问号❓然后什么 = 什么
```js
this.axios.get('/user?ID=12345')
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
```
也可以通过 params 设置参数：
```js
this.axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
```
---

## 🟢 POST 方法

```js
this.axios.post('api接口地址')
.then(res => {  //ES6的箭头写法
  console.log(res)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```
### 🔵 POST 方法传递参数格式如下：
```js
this.axios.post('/user', {
  firstName: 'Fred',        // 参数 firstName
  lastName: 'Flintstone'    // 参数 lastName
})
.then(res => {  //ES6的箭头写法
  console.log(res)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```

---

## 🟢 并发请求
```js
function xxg1() {
  return axios.get('/user/12345');
}

function xxg2() {
  return axios.get('/user/12345/permissions');
}
axios.all([xxg1(), xxg2()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```
---

## 🟢 axios的API
```js
axios({
  url: 'http://rap2api.taobao.org/app/mock/121145',
  method: 'post',
  data: {
    name: 'xxg'
  }
}).then(res => {
  console.log('请求结果：', res);
});
```
## 🟢 拦截器

在请求或响应被 then 或 catch 处理前拦截它们（拦截器可以做什么：在请求或者响应时拦截下来进行处理）

拦截器分为请求拦截器和响应拦截器

- 请求拦截器（interceptors.requst）是指可以拦截每次或指定HTTP请求，并可修改配置项。

- 响应拦截器（interceptors.response）可以在每次HTTP请求后拦截住每次或指定HTTP请求，并可修改返回结果项。

>拦截器留到【全局配置】在说👇👇👇   

---
## 🟢 【vue2.x】跨域与代理 
在vue本地开发时请求总是发生跨域 解决方案：配置代理 config 下的index.js文件  

### 🔵 第一步👇
```js
// 【main.js】
import Vue from 'vue'
import App from './App.vue'
// step1：引入 axios
import Axios from 'axios'

Vue.config.productionTip = false

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios

// step3：使每次请求都会带一个 /api 前缀 
Axios.defaults.baseURL = '/api' 

new Vue({
  render: h => h(App),
}).$mount('#app')
```
- Axios.defaults.baseURL = '/api'   

最重要是这一步就是把axios的默认-基础url路径前缀改成/api

### 🔵 第二步 修改配置文件（修改后要重启服务）
vue-cli3.0 通过 vue.config.js 文件 修改配置（若没有，则直接在项目路径下新建即可）。
```js
// 【vue.config.js】
module.exports = {
    devServer: {
        proxy: {
            '/api': { 
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'https://www.baidu.com/',
                // 允许跨域
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                ws: true,
                pathRewrite: {// 路径重写，
                    '^/api': ''// 替换target中的请求地址
                               //也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api/XXXXX即可。
                }
            }
        }
    }
}
```
其实这里是设置也是比较模糊的，因为不明白其中这样设置的原理。

**【经查询】**   
- `changeOrigin: true`  在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
- `pathRewrite`   路径重写 
- `'^/api': ''`   替换target中的请求地址,也就是说以后你在请求`http://api.douban.com/v2/XXXXX`这个地址的时候直接写成`/api/XXXXX`即可。

### 🔵 第三步 使用axios
然后就跨域使用axios来跨域了👇
```html
<!-- 【App.vue】 -->
<template>
    <div>
        <button @click="testAxios">TestAxios</button>
    </div>
</template>

<script>
    export default {
        methods: {
            testAxios() {
                // 由于 main.js 里全局定义的 axios,此处直接使用 $axios 即可。
                // 由于 main.js 里定义了每个请求前缀，此处的 / 即为 /api/， 
                // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
                this.$axios.get('/').then(response => {
                    if (response.data) {
                        console.log(response.data)
                    }
                }).catch(err => {
                    alert('请求失败')
                })
            }
        }
    }
</script>

<style>

</style>
```

### 🔵 关于【生成环境】-【开发环境】
所谓【生成环境】就是线上，一般【生成环境】的默认服务器地址要和测试的【开发环境】加以区分

1. 创建配置文件 `api.config.js`
```js
const isPro = Object.is(process.env.NODE_ENV, 'production')
 
console.log(isPro);
 
module.exports = {
  baseUrl: isPro ? 'https://www.***/index.php/Official（线上地址）' : 'api/'
}
//这里很明显跨域看到这个baseUrl 就是在判断 isPro 是 true 还是 false。
//也就是上面的变量是否有！ 有就用线上的地址。 
//没有的话就用 api 在【开发环境】
```

2. 引入mian.js
```js
//...
import apiConfig from '../config/api.config'
//...
axios.defaults.baseURL = apiConfig.baseUrl;// 配置接口地址
//...
```

---
## 🟢 全局封装
对于封装来说，其实就是在封装文件里，添加一些 请求头、拦截器、等设置，这样就不用到处写一大推代码了    
那么就要设置一个文件夹-文件 来放这个封装的js文件（可以是utils/request.js ，也可以axios/index.js） 都可以。稍微规范一点就可以了

有两种封装方式：第一种是只封装 配置的东西， 而第二种是 封装埋 api 👇   
### 🔵 第一种方式👇
```js
import axios from  'axios'

// 创建axios实例
const xxg = axios.create({
    baseURL: 'http://localhost:8080',//baseURL会在发送请求的时候拼接在url参数前面
    timeout: 5000                    //请求超时的时间
})

//请求拦截（所有的网络请求都会先走这个方法）
xxg.interceptors.request.use(
    function(config){
        // 在这里可以添加token👇
        // config.headers.token = "token"
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
)
//响应拦截
xxg.interceptors.response.use(
    function(response){
        return response;
    },
    function(err) {
        return Promise.reject(err);
    }
)
//下面是封装两种请求 就是之前没封装之前 不会有拦截器，除非在调用请求的时候设置，
//现在为了方便 直接在这个文件统一一下 ，只要是请求就 先拦截一下 做一下处理
export function get(url, params){
    return xxg.get(url,{
        params
    });
}
export function post(url, data){
    return xxg.post(url,data);
}
```
> 这种方式呢，就是在请求的 调用一下这两个封装好的方法。

### 🔵 第二种
axios/axios.js👇  
```js
// 请求配置文件，axios的配置都在这里进行
// 1.引入文件
import axios from 'axios'  //引入axios库
import qs from 'qs'  //node中自带的qs模块（数据科是转换）

// 2.全局默认配置
let baseURL

//判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') { //开发环境
    baseURL = '/api'
    //意思是 如果 当前环境 = 开发环境 那么基础url 设置为api
}else{                                       //编译环境
    if(process.env.type === 'test') {       //测试环境
        baseURL = 'http://localhost:8080'   
    }else{                                  //正式环境
        baseURL = 'http://localhost:8080'  
    }
}        
/*创建一个实例，如下：👇*/
const Axios = axios.create({
	baseURL:baseURL , 		      // 后台服务地址
	timeout: 60000, 		      // 请求超时时间1分钟
	responseType: "json",
	withCredentials: false    // 是否允许带cookie这些
});

// 3. 拦截器
/*如果不是用创建实例的方式配置，那么下面的Axios都要换成axios,也就是文件开头你用import引入axios时定义的变量*/
Axios.interceptors.request.use((config) => {
  //发送请求前进行拦截
  //  可在此处配置请求头信息
  // config.headers["appkey"] ="...";
  // config.headers["token"] ="...";
  if (config.method == "post") {
  /*数据转换: axios post方式默认是json格式提交数据，如果使用application/x-www-form-urlencoded数据格式提交，要用qs.stringify()进行转换,个人建议不在拦截器中全局配置，因为不够灵活，还有一点是，如果
  设置了重新请求的配置，那么重新请求时，请求体中的config里面的传参就会被再次进行qs.stringify()转
  换，会使得参数丢失，造成请求失败。*/
    config.data = qs.stringify(config.data)
  }
  return config;
  },(error) =>{
    return Promise.reject(error)
})

// 响应拦截器
Axio.interceptors.response.use((res) =>{
    if(res.status == 200){                       // 对响应数据做些事
        return Promise.resolve(res)
    }
    return res;
  }, (error) => {
    //alert("网络异常!") 404等问题可以在这里处理
    return Promise.reject(error)
})
export default Axios
```

axios/index.js 👇
```js
// 接口函数封装，方便外部调用接口
import Axios from "./axios"  // 导入配置好的axios文件

// 封装axios请求函数，并用export导出
export function getItemList(datas) {
  return Axios({
    url: "/api/getItemList",
    method: "post",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
    },
    data: datas
  })
}
export function getItem(datas) {
  return Axios({
    url: "/api/getItem",
    method: "post",
    headers: {
        'Content-Type': 'application/json' //设置请求头请求格式为json
    },
    data: datas
  })
}
export function getItemInfo(datas) {
  return Axios({
    url: "/api/getItemInfo"+datas,
    method: "get",
  })
}
```
>👆 这种就是把所有的api请求方法都放在这里，然后需要用到在拿过去。这是一个promise,在用的时候要用异步来请求，等待他请求完成。
个人还是喜欢第一种，虽然都差不多。。

简单说就是 在请求的时候 不用打url地址 直接用aysnc 和 await配合来请求   
其实第二种方式也挺好，就是把请求数据的api地址都整理在一个文件里，找起来也不难...


**跨域的问题了解了，全局配置的方法也有了，但是配置里应该写些什么呢，比如请求头要写些什么，token登录这些要这么写~**



