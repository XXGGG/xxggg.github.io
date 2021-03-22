---
title: 🐬『Python-MySQL』🐬
---


## 说明

[参考文章：https://www.runoob.com/python3/python3-mysql.html](https://www.runoob.com/python3/python3-mysql.html)  


不同的数据库你需要下载不同的DB API模块，例如你需要访问Oracle数据库和Mysql数据，你需要下载Oracle和MySQL数据库模块。

- 引入 API 模块。
- 获取与数据库的连接。
- 执行SQL语句和存储过程。
- 关闭数据库连接。

### 什么是 PyMySQL？
PyMySQL 是在 Python3.x 版本中用于连接 MySQL 服务器的一个库，Python2中则使用mysqldb。

PyMySQL 遵循 Python 数据库 API v2.0 规范，并包含了 pure-Python MySQL 客户端库。

## 安装PyMySQL驱动
```py
pip3 install PyMySQL
```


## 用python 连接MySQL 
```py
import pymysql

#打开数据库连接
host = "localhost"
user = "root"
password = "123456"
database = "ithome"
db = pymysql.connect(host,user,password,database)

# 使用cursor()方法创建一个游标对象 cursor
cursor = db.cursor()

sql = '''

'''
# 执行sql语句
cursor.execute(sql)

#关闭数据库连接
db.close()
```

## 插入数据
```py
import pymysql

#打开数据库连接
host = "localhost"
user = "root"
password = "123456"
database = "ithome"
db = pymysql.connect(host,user,password,database)

# 使用cursor()方法创建一个游标对象 cursor
cursor = db.cursor()

sql = '''
    INSERT INTO news(link,imgsrc,title,time,news_time,news)
    VALUES ('xx', 'Mohan', 20, 'M', 2000)
'''
# 执行sql语句
try:
   # 执行sql语句
   cursor.execute(sql)
   # 提交到数据库执行
   db.commit()
except:
   # 如果发生错误则回滚
   db.rollback()

#关闭数据库连接
db.close()
```



