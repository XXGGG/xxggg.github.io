---
title: 🐍『Python01 - 基础』🐍
---

> 根据[廖雪峰老师的教程](https://www.liaoxuefeng.com/wiki/1016959663602400)所做的笔记👇

## 安装
> 安装Python后，电脑会得到Python解释器

1. 安装3.x版本以上：[https://www.python.org/](https://www.python.org/)  

2. 配置path环境变量：在安装时把`Add Python 3.8 to PATH`勾上

3. 安装完后，进入命令提示符敲 `python`，进入Python交互环境

## 第一个程序
>就不在命令行里敲代码了  
>直接使用 `Visual Studio Code` 来敲代码
```py
# python01.py
print('hello, world')
```
然后右键`在终端运行py文件`或者在文件的文件夹打开终端输入`python python01.py`

这样他就会输出`hello,world`，所以print就是打印出来的意思 

## 语法
Python的语法比较简单，采用缩进方式  
```py
a = 100
if a >= 0:
    print(a)
else:
    print(-a)
```

## 其他

### input() 输入
能把输入的值 带入birth这个变量,返回的是"字符串"类型
```py
birth = input('birth:')
``` 

### int() 数字化
```py
num = "123" # 这里的123是字符串
NewNum = int(num) #用int把他变成数字类型

#如果是"abc"这样的字符串，是没办法转换成数字的  会报错
```

### range() 生成整数序列
```py
>>>list(range(5))
[0,1,2,3,4]
``` 

### random 随机数
```py
import random 
x = random.randint(0,2) #随机生成0到2之间的 一个整数
```