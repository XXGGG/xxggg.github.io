---
title: 🐬『SQL语句』🐬
---


## 🟢 SQL常用语句

### 🔵【use】选择数据库
```sh
use databaseName
# databaseName：数据库的名字
```

### 🔵【SELECT】查看表
```sh
SELECT * FROM tablesName
# * 代表查看全部  tablesName：表的名字

SELECT name,age FROM tablesName
# 比如这里就代表查看这个表的 name 跟 age
```
> 温馨提示：SELECT 这样的关键字 大小写都可以，不一定要大写！！

### 🔵【DISTINCT】筛选出(独特的值)❗
```sh
SELECT DISTINCT country FROM tablesName
# 有点类似于python里的set 他的key不会重复
#比如{a,a,b,c,c,c} - > 出来会是{a,b,c}
```

### 🔵【WHERE】筛选表中指定的信息
```sh
SELECT * FROM tablesName WHERE country='CN'
#筛选country为cn 的所有内容
SELECT * FROM tablesName WHERE name='xxg'
#筛选name为xxg 的所有内容
```

### 🔵【WHERE】筛选表中指定的信息
```sh
SELECT * FROM tablesName WHERE country='CN'
#筛选country为cn 的所有内容
SELECT * FROM tablesName WHERE name='xxg'
#筛选name为xxg 的所有内容
SELECT * FROM tablesName WHERE id=1
#数字不要带引号，文本带引号
```
| 运算符 | 描述 |
| --- | --- |
| <> | 不等于 |
| BETWEEN | 在某个范围 |
| LIKE | 搜索某个模式 |
| IN | 指定针对某个列的多个可能值 |

### 🔵【AND】【OR】与、或
AND 需要满足两个条件
```sh
SELECT * FROM tablesName WHERE age>18 AND x>0
```
OR 满足其中一个条件就可以了
```sh
SELECT * FROM tablesName WHERE age>18 OR x>0
```

### 🔵【ORDER BY】排序
比如根据age（年龄）排序   
默认：升序
```sh
SELECT *
FROM tablesName
ORDER BY age;
#这样写也是可以的，比较好看
```
降序 DESC
```sh
SELECT *
FROM tablesName
ORDER BY age DESC;
# 在后面加个DESC 就是降序
```

### 🔵【INSERT INTO】插入
>【增删改查】当中的【增】  

第一种形式无需指定要插入数据的列名，只需提供被插入的值即可：
```sh
INSERT INTO tablesName
VALUES (value1,value2,value3,...);
```
第二种形式需要指定列名及被插入的值：
```sh
INSERT INTO tablesName (column1,column2,column3,...)
VALUES (value1,value2,value3,...);
```

### 🔵【UPDATE】更新
>【增删改查】当中的【改】  

```sh
UPDATE tablesName
SET column1=value1,age=18,...
WHERE name=xxg;
```
改的时候一定要加上WHERE指定哪条，要不然就全改了...


### 🔵【DELETE】删除
>【增删改查】当中的【删】  

```sh
DELETE FROM tablesName
WHERE name=xxg;
#或者
DELETE FROM tablesName
WHERE id=1;
```

删除所有数据
```sh
DELETE FROM table_name;
或
DELETE * FROM table_name;
```
>注释：在删除记录时要格外小心！因为您不能重来！



