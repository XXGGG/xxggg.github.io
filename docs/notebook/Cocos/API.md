---
title:  👾Cocos API👾
---



- this 当前组件
- this.node 当前节点
- this.noed.x 节点的x坐标


## 🪄 事件
### 🖱️ 鼠标
- mousedown - 鼠标点击
- mouseup
- mousemove

### ⌨️ 键盘
- keyup
- keydown


#### 键盘方向键盘
- cc.macro.KEY.up 上
- cc.macro.KEY.down 下
- cc.macro.KEY.left 左
- cc.macro.KEY.right 右
- cc.macro.KEY.space 空格键
示范👇
```ts
if(e.keyCode == cc.macro.KEY.left){
    this.direction = cc.v2(-1,0)
}
//如果键盘代码 是 向左
//那么设定一个方向值
// 接着去update 更新 坐标值👇
update(dt){
    let pos:cc.vec2 = this.node.getPosition();
    pos.x += this.speed * this.direction.x
    pos.y += this.speed * this.direction.y
    this.node.setPosition(pos);
}
```
### 👆 触摸事件
- touchstart
- touchend
- touchcancel
### 示范👇
点击这个节点，执行moveLeft方法
```ts
onLoad(){
    this.node.on('mousedown', this.move, this)
}
```



## 关于TypeScript 的类型

### 基础类型
- number 数字
- string 字符串
- boolean 布尔
---
### 引用类型
- cc.AudioClip 音频资源
- cc.SpriteFrame 图片帧资源
- cc.Label 字符类型
- cc.Node 节点类型

---
- cc.Event.EventMouse 事件类型.鼠标事件
- cc.Event.EventKeyboard 事件类型.键盘事件



## 关于property
property 就是属性装饰器  
在脚本程序里使用 @property 后，在其下面就可以定义一个节点的属性。   
基本类型可以不指明。👇  
```ts
@property
text: string = 'hello';

@proprety(cc.Label)
label: cc.Label = null
```



## API

#### 当前节点
`this.node :cc.Node`
#### 父节点
`this.node.parent`
#### 子节点(集合)
`this.node.children :ccNode[]`
#### 全局查找
`target = cc.find("Canvas/...")`
#### 查找子节点
`target = cc.find("Canvas/...",someNode)`

### 示范👇
找到这个组件，然后设置它的位置。
```ts
move(){
    let xxg : cc.Node = cc.find("Canvas/图片名字");
    xxg.setPosition(0,-200);
}
```



## 【方法】设置各种属性

**注意！node是变量，不是写死的**    
[https://docs.cocos.com/creator/api/zh/classes/Node.html?h=node](https://docs.cocos.com/creator/api/zh/classes/Node.html?h=node)  
- node.setPosition(0,-200) 移动位置



## 【方法】API获取组件

访问组件本身的属性
```js
let label = node.getComponent(cc.Label)
```
访问组件本身的脚本文件 可以调用里面的方法
```js
let script = node.getComponent("your script")
script.方法();
```



## 坐标

### 三维 v3 坐标
```
cc.v3(100,100,0);
```



## 【缓动系统】

- cc.tween(节点).to(时间,{方法},{easing:运动速率规律}).start();  
easing文档: [https://docs.cocos.com/creator/api/zh/classes/Easing.html?h=easing](https://docs.cocos.com/creator/api/zh/classes/Easing.html?h=easing)

```ts
cc.tween(node).to(1,{ position:cc.v3(250,-120,0)}).start();
```



## 帧动画

帧动画在`update`里做程序，每帧率16毫秒左右。
```ts
update(dt){
    this.node.x += 5; 每帧移动5
}
```
### 设置帧率
最好挂载在Canvas节点下，
- cc.game.setFrameRate(30);


### 计时器API
cc.Component  
##### 启动定时器👇
- comp.schedule(回调函数，每次时间间隔，重复多少次，多少秒后还启动)  
##### 停止计时器👇
- comp.unschedule(回调函数)


## 切换场景
- cc.director.loadScene('场景名字')


## 跳转链接
- window.open('http://www.baidu.com');


## 动态加载
待加载资源必须放在resource目录下
- cc.resources.load()