# Python 进阶

> 学习日期：2026-06-09 | 状态：🔄 学习中

---

## 装饰器

!!! example "装饰器基础"
    ```python
    import functools
    import time

    def timer(func):
        """计时装饰器：测量函数执行时间"""
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            start = time.perf_counter()
            result = func(*args, **kwargs)
            elapsed = time.perf_counter() - start
            print(f"{func.__name__} 执行耗时: {elapsed:.4f}s")
            return result
        return wrapper

    @timer
    def slow_function():
        time.sleep(1)
        return "done"

    slow_function()  # slow_function 执行耗时: 1.00xxs
    ```

---

## 生成器

```python
def fibonacci(limit):
    """斐波那契数列生成器"""
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# 惰性求值，节省内存
for num in fibonacci(100):
    print(num, end=" ")
# 0 1 1 2 3 5 8 13 21 34 55 89
```

!!! tip "生成器优势"
    - 惰性求值，按需生成
    - 节省内存，适合处理大数据
    - 可用 `yield from` 委托给子生成器

---

## 上下文管理器

```python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    """自定义上下文管理器"""
    print(f"获取资源: {name}")
    try:
        yield name
    finally:
        print(f"释放资源: {name}")

with managed_resource("database"):
    print("使用资源中...")
# 获取资源: database
# 使用资源中...
# 释放资源: database
```

---

## 参考来源

- Fluent Python（流畅的 Python）