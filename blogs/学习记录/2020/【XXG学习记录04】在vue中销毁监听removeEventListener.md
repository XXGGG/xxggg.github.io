---
title: 【XXG学习记录04】在vue中销毁监听removeEventListener
author: '谢夏戈'
date: 2020-10-20
sidebar: 'auto'
categories:
 - 学习记录
---
 

## 前言🐷
在回顾之前作品demo时发现，我在监听鼠标的时候，即使退出了“当前页面”也没有消除监听。  
发现原因是我退出了“当前页面”后，还在控制台看到了“console.log”的输出

后面使用了vue中的`destroyed`生命周期函数来在“这个页面组件销毁时”  
配合`window.removeEventListener('mousemove',this.move)`来销毁监听。
 
**但是没用**   

## 解决方法
问题其实出现在👇  
我在主组件APP.vue中使用了keep-alive
```
<keep-alive>
    <router-view></router-view>
</keep-alive>
```
keep-alive 导致页面缓存了，没有触发组件销毁`destroyed`   
>组件被缓存，退回首页的时候自然就没有被销毁了，所以我们利用回首页路由转变👇

手动触发`destroy`   
👇就是当路由发现变化时，调用`destroy`
```js
beforeRouteLeave(to, from, next) {
    this.$destroy();
    next();
},
destroyed() {
    window.removeEventListener('mousemove',this.move)
    console.log('销毁成功')
}
```

--- 

还有一个原因:我在监听和销毁时 所指定的那个方法。    
比如👇
```
window.addEventListener('mousemove',(e)=>this.move(e)) //这个是增加监听 '鼠标'
和
window.removeEventListener('mousemove',(e)=>this.move(e)) //这个是销毁监听 '鼠标'
```
这样是不行的，因为他们指定的不算是同一个方法，也就是说，我们不能使用`this.move(e)`这样传参的方式！(虽然我们监听的目的是为了传参数e)

根据试验，可以使用下面这样的方式👇  
```
window.addEventListener('mousemove',this.move)
和
window.removeEventListener('mousemove',this.move)
```
也就是说，在`methods`中的`move(e)`直接就可以拿到参数`e`了  👇
```
methods:{
    move(e){
        console.log(e)
    }
},
```
**而且也不要使用匿名函数。**

这样就可以销毁监听了。

## 总结👇
1.  用路由跳转的监听方式来探测组件被关闭，然后调用相应的“销毁监听方法”（由于我使用了keep-alive）【如果没有使用，是会直接调用vue的生命周期函数的】

2. 在销毁监听时，不要直接传参也不要使用匿名函数。监听后得到数据会直接作用在后面的方法中。



## 参考文章

[参考文章1](https://cloud.tencent.com/developer/ask/147772)  
[参考文章2](https://www.cnblogs.com/spqin/p/13186950.html)