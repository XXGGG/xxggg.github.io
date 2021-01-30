---
title: 🍍『Vue中图片引入问题』🍍
---

## 🟢require
比如图片放在`src/assets/images`里  
👇
```html
<img :src="img" width="100%" />
```
```js
data() {
    return {
        img: require('../../assets/images/location.png')
    }
},
```