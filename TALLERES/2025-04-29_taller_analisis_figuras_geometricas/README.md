
# 🧪2025-04-29_taller_analisis_figuras_geometricas


## 📅 Fecha
`2025-05-02` 

---

## 🎯 Objetivo del Taller

Detectar formas simples (círculos, cuadrados, triángulos) en imágenes binarizadas y calcular propiedades geométricas como área, perímetro y centroide. El objetivo es desarrollar habilidades para extraer métricas relevantes de contornos detectados en imágenes procesadas.
---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Segmentación de imágenes
- [ ] Procesamiento de imágenes digitales 

---

## 🔧 Herramientas y Entornos

### 💻 Python (Colab o Jupyter Notebook)

**Herramientas:** `opencv-python`, `numpy`, `matplotlib`


---


## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_analisis_figuras_geometricas/
├── python/
├── README.md
```




## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas

1.primerose craga la imagen ; Binarizar la imagen; se procede a Detectar contornos luego por cada uno se procede a Procesarlo , calculando su centroide y sus respectivas metricas junto a clasificacion de figura ,luego se procede  asu respectiva etiquetacion  y se plansman en la imagen su contorno junto a su centroide 


### 🔹 Código relevante

A continuación, se presenta un fragmento representativo dela implementacion del algoritmo para poder identificar la figuras con sus respectivas metricas:

```python
import cv2
import numpy as np
from google.colab.patches import cv2_imshow

# Cargar imagen y convertir a escala de grises
imagen = cv2.imread('/content/figure.jpeg')

gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)

# Binarizar la imagen
_, binarizada = cv2.threshold(gris, 127, 255, cv2.THRESH_BINARY)
binarizada = cv2.bitwise_not(binarizada)  # Invert the image

# Display the binary image
cv2_imshow(binarizada)

# Detectar contornos
contornos, jerarquia = cv2.findContours(binarizada, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Copiar imagen para mostrar resultados
imagen_con_resultados = imagen.copy()

# Letras para etiquetar
etiquetas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

# Procesar cada contorno
for i, contorno in enumerate(contornos):
    if i >= len(etiquetas):
        break  # Evitar exceder el alfabeto
    letra = etiquetas[i]

    # Calcular centroide
    M = cv2.moments(contorno)
    if M["m00"] != 0:
        cx = int(M["m10"] / M["m00"])
        cy = int(M["m01"] / M["m00"])
    else:
        cx, cy = 0, 0

    # Área y perímetro
    area = cv2.contourArea(contorno)
    perimetro = cv2.arcLength(contorno, True)

    # Aproximar el contorno a un polígono
    epsilon = 0.04 * perimetro
    aproximacion = cv2.approxPolyDP(contorno, epsilon, True)
    vertices = len(aproximacion)

    # Clasificar la figura
    if vertices == 3:
        figura = "Triángulo"
    elif vertices == 4:
        figura = "Cuadrado"  # Podría ser un cuadrado o un rectángulo
    else:
        figura = "circulo"

    # Imprimir métricas en consola
    print(f"Figura {letra}: {figura}, Área = {area:.2f}, Perímetro = {perimetro:.2f}, Centroide = ({cx}, {cy})")

    # Etiquetar con una letra y la figura
    texto = f"{letra}"
    cv2.putText(imagen_con_resultados, texto, (cx - 20, cy + 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 255), 1)

    # Dibujar contorno en verde
    cv2.drawContours(imagen_con_resultados, [contorno], -1, (0, 255, 0), 2)

    # Dibujar centroide en rojo
    cv2.circle(imagen_con_resultados, (cx, cy), 5, (0, 0, 255), -1)

# Mostrar la imagen con etiquetas
cv2_imshow(imagen_con_resultados)

```
Este algoritmo utiliza solo operaciones enteras para determinar los píxeles que mejor aproximan una línea entre dos puntos, lo que lo hace eficiente y adecuado para sistemas con recursos limitados. Al evitar cálculos de punto flotante, se mejora el rendimiento y se facilita su implementación en hardware o entornos con capacidades computacionales restringidas.

---

## 📊 Resultados Visuales


![Grabación-de-pantalla-2025-05-02-233120](https://github.com/user-attachments/assets/37d99607-b7e9-44e6-8a3a-6adfa6cc7d86)



---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

## y para la continuacion del taller se realizo las siguientes consultas a GPT


```
 https://chatgpt.com/share/68116038-b044-8004-98c9-b7a6f51d1afd
```



## 💬 Reflexión Final

El taller reforzó habilidades técnicas en **procesamiento de imágenes y análisis geométrico**, como la segmentación de objetos, detección de contornos y cálculo de propiedades como área, perímetro y centroide.

---


---



