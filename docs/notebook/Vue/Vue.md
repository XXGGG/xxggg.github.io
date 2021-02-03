---
title: 🍍『Vue』🍍
---

## 🟢 『父 传 子』
父组件可以通过属性的方式   
: 或 v-bing: 的方式 绑定到属性 :属性名="参数"
👇
```js
//父组件a.vue
<xxggg :test='bgImg' />
```
```js
//子组件接收👇 
data(){
    return {
        //...
    }
} 
props:{
    bgImg:{
        type:String
    }
},
```
收取后只能**用**,不能去修改父组件传递过来的参数  
如果要修改要先 **克隆\复制**一份给另一个变量 然后改变变量

## 🟢 『子 传 父』
```js
//子组件
this.$emit('触发名',参数（可选）);
//比如👇
this.$emit('close_set_btn');
```
```js
//父组件接收👇
<xxggg :test='bgImg' @close_set="close_set_btn()"/>

//...👇
data(){
    return {
        //...
    }
} 
methods{
    close_set_btn(){
        //... console.log("lalala")
    }
}
```
