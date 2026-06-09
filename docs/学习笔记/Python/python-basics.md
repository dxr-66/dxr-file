# Python 基础

> 学习日期：2026-06-09 | 状态：✅ 已完成

---

## 数据类型

Python 内置数据类型包括：

```python
# 数值类型
integer_num = 42
float_num = 3.14
complex_num = 1 + 2j

# 序列类型
my_list = [1, 2, 3]       # 列表 - 可变
my_tuple = (1, 2, 3)      # 元组 - 不可变
my_str = "hello"          # 字符串 - 不可变

# 映射类型
my_dict = {"key": "value"}  # 字典

# 集合类型
my_set = {1, 2, 3}          # 集合 - 去重
```

---

## 列表推导式

!!! example "列表推导式示例"
    ```python
    # 基本用法
    squares = [x**2 for x in range(10)]
    # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

    # 带条件过滤
    even_squares = [x**2 for x in range(10) if x % 2 == 0]
    # [0, 4, 16, 36, 64]

    # 字典推导式
    word_len = {w: len(w) for w in ["hello", "world", "python"]}
    # {'hello': 5, 'world': 5, 'python': 6}
    ```

---

## 文件操作

```python
# 推荐使用 with 语句自动管理资源
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

# 写入文件
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, World!")
```

!!! warning "注意"
    始终指定 `encoding="utf-8"`，避免编码问题。

---

## 参考来源

- Python 官方文档：https://docs.python.org/zh-cn/3/