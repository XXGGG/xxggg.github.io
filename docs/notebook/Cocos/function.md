---
title:  👾Cocos 方法👾
---



## 修改鼠标样式的方法

>[参考文章](https://www.jianshu.com/p/5a1a74c8826f)  

设置一个【脚本ts】挂载到【根节点Canvas】上
```ts
//bg.ts
onLoad () {
    //意思是在Canvas根节点上（实际就是全局
    //当鼠标移动的时候实现mouseStart这个方法..
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseStart, this);
}
mouseStart(){
    //这些是写死的，就是为了得到
    //鼠标.style的curor
    cc.game.canvas.style.cursor = "url(assets/others/native/83/83fa09f0-7ba0-4374-b47f-4f108da1d440.png),auto";
}
```
然而图片的路径 要使用一些别的方法来获得，不能使用`assets/Texture/xxx.png`，至于路径找到的方法，可以先把这张图片拖进随便一个地方，然后用浏览器运行游戏后按F12在资源里找路径。(这是目前知道的方法)




## 修改背景图片











## 点击后出配音、音效

```ts
@property(cc.AudioClip)
audio: cc.AudioClip = null;
// 设置完后去 主面板把音频文件 挂载上去
onLoad(){
    this.node.on('mousedown', 'move', this);
}

move(evt:cc.Event.EventMouse){

    // --- 其他走路的代码 ---

    if(this.audio != null){
        cc.audioEngine.play(this.audio, false ,1)
    }
}
```