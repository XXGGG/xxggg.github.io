---
title: 🐬『MySQL』🐬
---


## 🟢安装

[MySQL下载地址](https://dev.mysql.com/downloads/mysql/)  
[菜鸟安装指导](https://www.runoob.com/mysql/mysql-install.html)

## 🟢登录
u是用户名 默认：root
```sh
mysql -u root -p
```
输入密码
```sh
Enter password:
```


## 🟢 常用指令
### 🔵 查看多少个数据库
```sh
show databases
```
### 🔵 选择数据库
```sh
use databases
```
### 🔵 查看数据表
```sh
show tables
```
---
### 🔵 创建数据库
```sh
create DATABASE xxg;
```
### 🔵 删除数据库
```sh
drop DATABASE xxg;
```
---
其他可以看『SQL语句』....


## 🟢 最重要的【数据类型】
|类型|用途|
|:-:|:-:|
|TINYINT|小整数值|
|SMALLINT|大整数值|
|MEDIUMINT|大整数值|
|INT或INTEGER|大整数值|
|BIGINT|极大整数值|
|---|---|
|FLOAT|单精度、浮点数值|
|DOUBLE|双精度、浮点数值|
|---|---|
|DECIMAL|小数值|
---
|类型|用途|
|:-:|:-:|
|DATE|日期值|
|TIME|时间值或持续时间|
|YEAR|年份值|
|DATETIME|混合日期和时间值|
|TIMESTAMP|混合日期和时间值，时间戳|
---
|类型|用途|
|:-:|:-:|
|CHAR|定长字符串|
|VARCHAR|变长字符串|
|---|---|
|TINYBLOB|不超过 255 个字符的二进制字符串|
|BLOB|二进制形式的长文本数据|
|MEDIUMBLOB|二进制形式的中等长度文本数据|
|LONGBLOB|二进制形式的极大文本数据|
|---|---|
|TINYTEXT|短文本字符串|
|TEXT|长文本数据|
|MEDIUMTEXT|中等长度文本数据|
|LONGTEXT|极大文本数据|

---

## 🟢 主要指令
### 🔵 创建 表
```sh
CREATE TABLE IF NOT EXISTS `tbl`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `title` VARCHAR(100) NOT NULL,
   `author` VARCHAR(40) NOT NULL,
   `date` DATE,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
- 如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为NULL ，就会报错。
- AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1。
- PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
- ENGINE 设置存储引擎，CHARSET 设置编码。

---
其他可以看『SQL语句』....




## 🟢 其他指令
### 🔵 查看数据表 的构成信息
显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
```sh
SHOW COLUMNS FROM tablesName;
```
### 🔵 查看数据表 索引信息
显示数据表的详细索引信息，包括PRIMARY KEY（主键）。
```sh
SHOW INDEX FROM tablesName;
```
### 🔵 查看数据表 .....
该命令将输出Mysql数据库管理系统的性能及统计信息。
```sh
SHOW TABLE STATUS FROM tablesName;
```
其他可以看『SQL语句』....



