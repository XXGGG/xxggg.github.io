# 🍓JavaScript 小笔记🍓

理解，常用，用于查阅。 （常用，但是经常忘记）用到才会查

## 检查类型

    typeof [检测基本类型]
    instanceof [检测应用类型 123 instanceof number]

##  arguments

    arguments.length [参数的长度]
    arguments [转入的参数]
## Infinity 无限大

    Infinity
    -Infinity

## 字符串方法

    toUpperCase()       把一个字符串全部变为大写
    toLowerCase()       把一个字符串全部变为小写
    indexOf()           会搜索指定字符串出现的位置： 没有找到会返回 -1 
    substring()         返回指定索引区间的子串

## 数组方法

    slice()             它截取Array的部分元素

    push()              向Array的末尾添加若干元素，
    pop()               则把Array的最后一个元素删除掉

    unshift()           往Array的头部添加若干元素，
    shift()             方法则把Array的第一个元素删掉返回第一个数组的元素

    sort()              对当前Array进行排序，修改当前Array的元素位置 按照默认顺序排序：
    reverse()           把整个Array的元素给掉个个，也就是反转：
    splice()            方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素

    concat()            方法把当前的Array和另一个Array连接起来，并返回一个新的Array

    join()              方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

## map

    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael');           // 95

    var m = new Map();          // 空Map
    m.set('Adam', 67);          // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam');              // 是否存在key 'Adam': true
    m.get('Adam');              // 67
    m.delete('Adam');           // 删除key 'Adam'
    m.get('Adam');              // undefined

## set

'Set'和'Map'类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。  
要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：  
通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：

    s.add(4);
    s;                  // Set {1, 2, 3, 4}
    s.add(4);
    s;                  // 仍然是 Set {1, 2, 3, 4}
    通过delete(key)方法可以删除元素：

    var s = new Set([1, 2, 3]);
    s;                  // Set {1, 2, 3}
    s.delete(3);
    s;                  // Set {1, 2}


