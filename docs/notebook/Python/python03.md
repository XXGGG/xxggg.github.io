---
title: 🐍『Python03 - 数组』🐍
---


## list - 列表
Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。

```py
list = [1,2,3]

len(list) #长度是3,跟前端的js不一样 javascript是list.leng()
```
其他差不多

### 追加到末尾append
```py
list.append(4) #list=[1,2,3,4]
```

### 插入到指定位置insert
```py
list.insert(0, 0) #第一个零是位置 第二个是插入什么东西
```

### 删除末尾pop
```py
list.pop() #list= [1,2,3] 4 被删除了
```

### 删除指定位置
```py
list.pop(0) #list= [2,3] 第0位置的1被删除了
```

### 换元素
```py
list[1] = 10 #list= [2,10] 第1位置的3换成了10
```

>list可以嵌套 可以有不同的基础类型


----

## tuple -元组
另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改，比如同样是列出同学的名字

现在，classmates这个tuple不能变了，它也没有append()，insert()这样的方法。其他获取元素的方法和list是一样的，你可以正常地使用classmates[0]，classmates[-1]，但不能赋值成另外的元素。  

不可变的tuple有什么意义？因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

>元组用() 列表用[]
```py
tuple = ('Michael', 'Bob', 'Tracy')
```

