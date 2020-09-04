# 🍉Vue - axios🍉

## Axios    

Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。  
Github开源地址： [https://github.com/axios/axios](https://github.com/axios/axios)

---

### 安装方法

    $ npm install axios -S

### 配置

用vue-cli的话(vue2.x的情况下)  
在main.js文件中

```js
import axios from 'axios'
//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;
```

这样，axios就可以全局调用了 

**可以设置一个处理请求的js文件，用来处理请求前后的处理（比如什么超时呀，地址那些，拦截器 等等......**



---

## GET 方法
```js
this.axios.get('api 接口地址')
.then(res => {  //ES6的箭头写法
  console.log(ers)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```
### GET 方法传递参数格式如下：
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

## POST 方法

```js
this.axios.post('api接口地址')
.then(res => {  //ES6的箭头写法
  console.log(ers)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```
### POST 方法传递参数格式如下：
```js
this.axios.post('/user', {
  firstName: 'Fred',        // 参数 firstName
  lastName: 'Flintstone'    // 参数 lastName
})
.then(res => {  //ES6的箭头写法
  console.log(ers)
})
.catch(error => { // 请求失败处理
  console.log(error);
});
```

---

## 全局封装
对于封装来说，其实就是在封装文件里，添加一些 请求头、拦截器、等设置，这样就不用到处写一大推代码了    
那么就要设置一个文件夹-文件 来放这个封装的js文件（可以是utils/request.js ，也可以axios/index.js) 都可以。稍微规范一点就可以了

有两种封装方式：第一种是只封装 配置的东西， 而第二种是 封装埋 api 👇   
### 第一种方式👇
创建 utilis/request.js
```js
import axios from  'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',//baseURL会在发送请求的时候拼接在url参数前面
    timeout: 5000                    //请求超时的时间
})

//请求拦截
//所有的网络请求都会先走这个方法
instance.interceptors.request.use(
    function(config){
        // 在这里可以添加token
        // config.headers.token = "token"
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
)
//响应拦截
instance.interceptors.response.use(
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
    return instance.get(url,{
        params
    });
}
export function post(url, data){
    return instance.post(url,data);
}
```
> 这种方式呢，就是在请求的 调用一下这两个封装好的方法。

### 第二种
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
/*创建一个实例，如下：👇
*/
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

## 配置文件
在vue-cli脚手架3.0以上 没有webpack的配置文件webpack

所以vue-cli就在根目录上创建`vue.config.js` Vue会自动去加载这个文件👇
```js
module.exports = {

    // 开发服务 - 跨域请求 - 代理
    devServer: {
      proxy: {
        '/api' : {
          target : 'http://localhost:8080',
           // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          ws : true,
          changeOrigin: true,
          pathRewrite: {
            '^/api' : '/pubulic/json'
            // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
          }
        }
      }
    }
}
```


---
## 执行多个并发请求
实例
```js
function xxg1() {
  return axios.get('/user/12345');
}
 
function xxg2() {
  return axios.get('/user/12345/permissions');
}
this.axios.all([xxg1(), xxg2()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```
### 处理并发请求的助手函数：
```js
axios.all(iterable)
axios.spread(callback)
```







