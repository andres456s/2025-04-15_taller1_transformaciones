
# 🧪2025-04-29_taller_segmentacion_formas


## 📅 Fecha
`2025-05-02` 

---

## 🎯 Objetivo del Taller

Aplicar técnicas básicas de segmentación en imágenes mediante umbralización y detección de formas simples. El objetivo es comprender cómo identificar regiones de interés en imágenes mediante procesos de binarización y análisis morfológico.
---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Cálculo del centroide usando momentos 
- [ ] Visualización y etiquetado de formas en la imagen
- [ ] Análisis de formas y segmentación básica

---

## 🔧 Herramientas y Entornos

### 💻 Python (Colab o Jupyter Notebook)

**Herramientas:** `opencv-python`, `numpy`, `matplotlib`


---


## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_segmentacion_formas/
├── python/
├── README.md
```




## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas

1.seprocesa la imagen pasandolo a escala de grises
2. se le realiza la segmentacion binaria
3.se detectan los contornos y se le dibujan
4.se muestran las metricas
5.se visualizan los resultados
6.se aplica la misma funciona pero a una foto tomada desde la camara web

### 🔹 Código relevante

A continuación, se presenta un fragmento representativo dela implementacion del algoritmo para poder identificar la figuras con sus respectivas metricas:

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt

def process_image(img):
    # 1. Convertir a escala de grises si no lo está
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) if len(img.shape) == 3 else img

    # 2. Segmentación binaria - Umbral fijo
    _, thresh_fixed = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

    # 3. Segmentación binaria - Umbral adaptativo
    thresh_adapt = cv2.adaptiveThreshold(
        gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C,
        cv2.THRESH_BINARY_INV, 11, 3
    )

    # 4. Detectar contornos
    contours, _ = cv2.findContours(thresh_adapt, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # 5. Dibujar contornos sobre la imagen original
    img_contours = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)
    cv2.drawContours(img_contours, contours, -1, (0, 255, 0), 2)

    areas = []
    perimeters = []

    for cnt in contours:
        # 6. Centro de masa
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            cv2.circle(img_contours, (cx, cy), 4, (0, 0, 255), -1)

        # 7. Bounding box
        x, y, w, h = cv2.boundingRect(cnt)
        cv2.rectangle(img_contours, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # 8. Métricas
        area = cv2.contourArea(cnt)
        perimeter = cv2.arcLength(cnt, True)
        areas.append(area)
        perimeters.append(perimeter)

    # Mostrar métricas
    print("Número de formas detectadas:", len(contours))
    if areas:
        print("Área promedio: {:.2f}".format(np.mean(areas)))
        print("Perímetro promedio: {:.2f}".format(np.mean(perimeters)))

    # Visualizar resultados
    plt.figure(figsize=(12, 6))
    plt.subplot(1, 3, 1)
    plt.title("Umbral Fijo")
    plt.imshow(thresh_fixed, cmap="gray")
    plt.axis("off")

    plt.subplot(1, 3, 2)
    plt.title("Umbral Adaptativo")
    plt.imshow(thresh_adapt, cmap="gray")
    plt.axis("off")

    plt.subplot(1, 3, 3)
    plt.title("Contornos y Métricas")
    plt.imshow(cv2.cvtColor(img_contours, cv2.COLOR_BGR2RGB))
    plt.axis("off")

    plt.tight_layout()
    plt.show()

```
Este algoritmo utiliza es el encargado en preprocesar la imagen y hacer sus respectivos calaculos

---

## 📊 Resultados Visuales


![Grabación-de-pantalla-2025-05-03-002242](https://github.com/user-attachments/assets/f290e913-c010-4c3d-948b-9d0dbff613eb)


---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

## y para la continuacion del taller se realizo las siguientes consultas a GPT


```
 [https://chatgpt.com/share/68116038-b044-8004-98c9-b7a6f51d1afd](https://chatgpt.com/share/6811db0a-07cc-8004-8f2a-1f5052deb172)
```



## 💬 Reflexión Final

El taller se aprendio  de técnicas esenciales de binarización y segmentación de imágenes , enfocadas en la identificación 
---


---



