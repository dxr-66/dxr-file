# OpenCV 代码片段

> 实用 OpenCV 图像处理代码片段收藏

---

## 1. 图像对比度增强

```python
import cv2
import numpy as np

def enhance_contrast(image: np.ndarray, clip_limit: float = 2.0) -> np.ndarray:
    """使用 CLAHE 增强图像对比度"""
    lab = cv2.cvtColor(image, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=(8, 8))
    l = clahe.apply(l)
    enhanced = cv2.merge([l, a, b])
    return cv2.cvtColor(enhanced, cv2.COLOR_LAB2BGR)
```

**标签**：`对比度` `CLAHE`

---

## 2. 批量图像格式转换

```python
import cv2
from pathlib import Path

def convert_images(input_dir: str, output_dir: str, target_format: str = "png"):
    """批量转换图像格式"""
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    for img_path in Path(input_dir).glob("*"):
        if img_path.suffix.lower() in [".jpg", ".jpeg", ".bmp", ".tiff"]:
            img = cv2.imread(str(img_path))
            output_path = Path(output_dir) / f"{img_path.stem}.{target_format}"
            cv2.imwrite(str(output_path), img)
```

**标签**：`格式转换` `批量处理`

---

## 3. 鼠标交互绘制矩形 ROI

```python
import cv2
import numpy as np

class ROISelector:
    def __init__(self, image):
        self.image = image.copy()
        self.original = image.copy()
        self.start = None
        self.end = None
        self.drawing = False

    def mouse_callback(self, event, x, y, flags, param):
        if event == cv2.EVENT_LBUTTONDOWN:
            self.start = (x, y)
            self.drawing = True
        elif event == cv2.EVENT_MOUSEMOVE and self.drawing:
            self.image = self.original.copy()
            cv2.rectangle(self.image, self.start, (x, y), (0, 255, 0), 2)
        elif event == cv2.EVENT_LBUTTONUP:
            self.drawing = False
            self.end = (x, y)

    def select(self, window_name="Select ROI"):
        cv2.namedWindow(window_name)
        cv2.setMouseCallback(window_name, self.mouse_callback)
        while True:
            cv2.imshow(window_name, self.image)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        cv2.destroyAllWindows()
        return self.start, self.end
```

**标签**：`ROI` `鼠标交互`