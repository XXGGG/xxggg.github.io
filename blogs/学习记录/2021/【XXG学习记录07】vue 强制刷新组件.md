---
title: 【XXG学习记录07】vue 强制刷新组件
author: '谢夏戈'
date: 2021-02-13
sidebar: 'auto'
categories:
 - 学习记录
---


## 1.使用this.$forceUpdate强制重新渲染  
如果要在组件内部中进行强制刷新，则可以调用this.$forceUpdate()强制重新渲染组件，从而达到更新目的。  

```html
<template>
<button @click="reload()">刷新当前组件</button>
</template>
```
```js
<script>
export default {
    name: 'comp',
    methods: {
        reload() {
            this.$forceUpdate()
        }
    }
}
</script>
```

## 2.使用v-if指令 this.$nextTick()  

如果是刷新某个子组件，则可以通过v-if指令实现。我们知道，当v-if的值发生变化时，组件都会被重新渲染一遍。因此，利用v-if指令的特性，可以达到强制刷新组件的目的。  
```html
<template>
    <comp v-if="update"></comp>
    <button @click="reload()">刷新comp组件</button>
</template>
```
```js
<script>
import comp from '@/views/comp.vue'
export default {
    name: 'parentComp',
    data() {
        return {
            update: true
        }
    },
    methods: {
        reload() {
            // 移除组件
            this.update = false
            // 在组件移除后，重新渲染组件
            // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
            this.$nextTick(() => {
                this.update = true
            })
        }
    }
}
</script>
```