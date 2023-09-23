# 基础篇

## Mysql概述

### 数据库相关概念

1. 数据库 database DB
2. 数据库管理系统 Database Management System(DBMS)
    - 操作和管理数据库的大型软件
    - 主流管理系统
        - Oracle(收费还贵贵der)
        - Mysql(开源免费，oracle后期提供了收费版)
        - Microsoft SQL Server(收费)
        - postgreSQL(开源免费中小型)
3. SQL Structured Query Language(SQL)
    - 操作关系型数据库的编程语言，定义了一套操作关系型数据库的统一标准

### Mysql数据库

1. 版本
    - 社区版 (mysql community server)
        - 免费 mysql不提供技术支持
    - 商业版本（mysql enterprise edition）
        - 收费 免费体验三十天 官方提供技术支持
2. 启动与停止
    - windows+R 输入services.msc 右击
    - net start (mysql80)/net stop (mysql80)
3. 客户端连接
    - 方式一 mysql提供的客户端命令行
    - 方式二 系统自带的命令行工具执行指令mysql -h链接的ip地址-p连接端口-u链接用户名-p连接密码
4. 数据模型
    - 关系型数据库（RDBMS
    - 非关系型

## SQL

1. SQL通用语法
    1.SQL语句可一旦行或多行书写 以分号结尾
    2.SQL语句可以使用空格 缩进来增强语句的可读性
    3.MYSQL数据库的Sql语句不区分大小写，关键字建议使用大写
    4.注释
        -单行注释 --或#（MYSQL特有）
        -多行注释/**/
2. SQL分类
    1. DDL（Data Definition Language)
        - 数据库定义语言 用来定义数据库对象（数据库，表，字段
        - 查询
            - 查询所有数据库    SHOUW DATABASES;
            - 查询当前数据库    SELECT dATABASE();
        - 创建
            - CREATE DATABASE [IF NOT EXISTS]数据库名[DEFAULTCHARSET字符集][COLLATE 排序规则]]
        - 删除
            - DROP DATABASR
        - 使用
            - USE()

    2. DML（Data Manipulation Language)
        - 数据操作语言 用于对数据库表种的数据进行增删改
    3. DQL（Data query Language)
        - 数据查询语言，用来查询数据库中表的记录
    4. DCL（Data Control Language)
        - 数据控制语言，用来创建数据库用户，控制数据库的访问权限

## 函数

## 约束

## 多表查询

## 事物
