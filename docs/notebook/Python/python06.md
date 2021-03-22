---
title: 🐍『Python06 - dict和set』🐍
---

## dict
叫字典，全程dictionary，在其他语言叫map  
键-值（key-value） 有点类似“对象”

```py
d = {'xxg':18,'xxgg':19,'xxggg':20}

print(d['xxg']) # 18
```

> 可以添加新的对象，可以替换对象的值

### 查找键 的值
```py
'xxgggg' in d #如果没有这个键会输出False
```

### get
```py
d.get('xxggg') #如果没有这个键会输出None
d.get('xxggg',-1) #如果没有这个键会输出-1
```

---

## set
set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。

要创建一个set，需要提供一个list作为输入集合：
```py
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
```
>可以把它理解为没有重复的list
```py
>>> s = set([1, 1, 2, 2, 3, 3])
>>> s
{1, 2, 3}
```
>即使你传入的list列表有重复的，通过set过滤后出来还是没有重复的

- set.add(key) 添加元素
- set.remove(key) 删除元素
- set.sort() 排序
- set.replace('a', 'A') A取代a