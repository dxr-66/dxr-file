# OpenCV 基础

> 学习日期：2026-06-09 | 状态：✅ 已完成

---

## 图像读取与显示

```python
import cv2

# 读取图像
img = cv2.imread("image.jpg")

# 显示图像
cv2.imshow("Image", img)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 保存图像
cv2.imwrite("output.jpg", img)
```

---

## 基本图像操作

!!! example "图像处理示例"
    ```python
    import cv2
    import numpy as np

    img = cv2.imread("image.jpg")

    # 转灰度图
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 调整大小
    resized = cv2.resize(img, (640, 480))

    # 高斯模糊
    blurred = cv2.GaussianBlur(img, (5, 5), 0)

    # 边缘检测
    edges = cv2.Canny(gray, 100, 200)
    ```

---

## 参考来源

- OpenCV 官方文档：https://docs.opencv.org/