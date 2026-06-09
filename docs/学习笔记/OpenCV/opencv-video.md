# OpenCV 视频处理

> 学习日期：2026-06-09 | 状态：🔄 学习中

---

## 视频捕获

```python
import cv2

cap = cv2.VideoCapture(0)  # 0 为默认摄像头

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    cv2.imshow("Video", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

---

## 视频保存

!!! example "保存处理后的视频"
    ```python
    import cv2

    cap = cv2.VideoCapture("input.mp4")
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter("output.mp4", fourcc, fps, (width, height))

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # 对每帧进行处理
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        processed = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)

        out.write(processed)
        cv2.imshow("Processed", processed)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    out.release()
    cv2.destroyAllWindows()
    ```

---

## 参考来源

- OpenCV VideoCapture 文档