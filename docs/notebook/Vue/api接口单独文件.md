---
title: 🍍『api接口单独文件』🍍
---


如果直接把数据接口文件写到了axios中，这样写如果地址改变或者接口改变，需要进入业务逻辑代码进行修改，维护起来会非常的麻烦。  
所以要把项目中用到的接口都单独拿出来，作一个接口配置文件serviceAPI.config.js。（或者其他名字）。

## 编写接口配置文件👇
```js
const BASEURL = "api接口地址（后端给的）"
const URL = {
    xxg1:BASEURL+'index',
    xxg2:BASEURL+'getGoodsInfo'
}
module.exports = URL
```

编写好后，直接在要使用的文件中用import的形式引入。
```js
import url from '@/serviceAPI.config.js'
```
引入后就可以直接使用了。
```js
axios({
    url: url.xxg1,
    method: 'get',
})
```