# Python 代码片段

> 实用 Python 代码片段收藏

---

## 1. 文件批量重命名

```python
import os
from pathlib import Path

def batch_rename(directory: str, pattern: str, replacement: str):
    """批量重命名文件"""
    path = Path(directory)
    for file in path.glob(pattern):
        new_name = file.name.replace(pattern.split("*")[-1], replacement)
        file.rename(file.parent / new_name)

# 示例：将所有 .txt 文件重命名为 .md
batch_rename("./docs", "*.txt", ".md")
```

**标签**：`文件操作` `pathlib`

---

## 2. JSON 配置文件读写

```python
import json
from pathlib import Path

def load_config(path: str) -> dict:
    """加载 JSON 配置文件"""
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_config(path: str, config: dict):
    """保存 JSON 配置文件"""
    with open(path, "w", encoding="utf-8") as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
```

**标签**：`JSON` `配置`

---

## 3. 带重试的 HTTP 请求

```python
import requests
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=10))
def fetch_url(url: str, timeout: int = 10) -> requests.Response:
    """带重试机制的 HTTP GET 请求"""
    response = requests.get(url, timeout=timeout)
    response.raise_for_status()
    return response
```

**依赖**：`requests` `tenacity`

**标签**：`HTTP` `重试`