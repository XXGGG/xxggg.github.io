<img src="https://gitee.com/XXGGG/Xcloud/raw/main/Typora/image-20210623220838528.png" alt="image-20210623220838528" style="zoom: 25%;" /><img src="https://gitee.com/XXGGG/Xcloud/raw/main/Typora/image-20210623220911024.png" alt="image-20210623220911024" style="zoom: 25%;" />

## 比例空间

图中 蓝色的比例 始终是 4 : 3

实现这样的比例空间

## 方案一

用js 判断 高的三倍 是否大于 宽的四倍

因为是要4 : 3 所以就要**4** * 3  = **3** * 4   所以判断的方法就是一方乘以3 一方乘以4

然后在vue里设置一个方法来比较

```vue
methods:{
    zsy(){
      let W = window.innerWidth
      let H = window.innerHeight
      if( W*3 > H*4){
        this.width = "133.33vh";
        this.height = "100vh";
      }
      if( W*3 < H*4){
        this.width = "100vw";
        this.height = "75vw"
      }
    }
  }
```

在生命周期里调用👇 

```vue
mounted(){
    this.zsy();
    //一定要有这个！！！
    const that = this
	//onresize 当页面大小该表的时候会触发 这个钩子
    window.onresize = ()=>{
    	that.zsy()
    }
}
```

而在html里 这样设置👇

```html
<div class="flex">
  <div class="box" :style="`width:${width};height:${height}`"></div>
</div>
```

当然 记得在外边的div上设置flex布局 让他居中。



这样 比例空间就出来了。