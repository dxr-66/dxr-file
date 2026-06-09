# Flask 基础

> 学习日期：2026-06-09 | 状态：🔄 学习中

---

## 最小应用

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
```

---

## 路由与请求

!!! example "路由示例"
    ```python
    from flask import Flask, request, jsonify

    app = Flask(__name__)

    @app.route("/api/users", methods=["GET", "POST"])
    def users():
        if request.method == "POST":
            data = request.get_json()
            return jsonify({"id": 1, **data}), 201
        return jsonify([{"id": 1, "name": "张三"}])

    @app.route("/user/<int:user_id>")
    def get_user(user_id):
        return jsonify({"id": user_id, "name": "用户"})
    ```

---

## 模板渲染

```python
from flask import render_template

@app.route("/profile/<name>")
def profile(name):
    return render_template("profile.html", name=name)
```

---

## 参考来源

- Flask 官方文档：https://flask.palletsprojects.com/zh-cn/