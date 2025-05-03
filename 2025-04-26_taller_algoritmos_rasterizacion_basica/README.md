
# 🧪2025-04-26_taller_algoritmos_rasterizacion_basica

## 📅 Fecha
`2025-05-02` 

---

## 🎯 Objetivo del Taller

Comprender e implementar los algoritmos clásicos de rasterización para líneas, círculos y triángulos, entendiendo cómo se construyen imágenes píxel a píxel en una pantalla. El objetivo es desarrollar una base sólida sobre cómo se generan primitivas gráficas sin usar librerías de alto nivel.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Simetría en gráficos
- [ ] Algoritmo DDA
- [ ] Algoritmo de Bresenham

---

## 🔧 Herramientas y Entornos

### 💻 Entorno: Python (Jupyter Notebook o Colab)

**Herramientas:**
- `Pillow` (para crear imágenes)
- `numpy` (opcional para operaciones matriciales)
- `matplotlib.pyplot` (para mostrar resultados)

---


## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_algoritmos_rasterizacion_basica/
├── python/
│   └── rasterizacion_algoritmos.ipynb
├── resultados/
│   ├── linea.png
│   ├── circulo.png
│   ├── triangulo.png
├── README.md
```



## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas

1.Algoritmo de Bresenham para líneas: Dibuja líneas entre dos puntos utilizando solo operaciones enteras, lo que lo hace eficiente y preciso.
2.Algoritmo de Bresenham para círculos: Dibuja círculos aprovechando la simetría y evitando cálculos de raíces cuadradas.
3.Algoritmo de DDA (Digital Differential Analyzer): Calcula puntos intermedios entre dos extremos de una línea mediante incrementos fraccionarios.

### 🔹 Código relevante

A continuación, se presenta un fragmento representativo del algoritmo de Bresenham para líneas, uno de los principales enfoques tratados en el taller:

```python
def bresenham_line(x0, y0, x1, y1):
    dx = abs(x1 - x0)
    dy = abs(y1 - y0)
    x, y = x0, y0
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx - dy

    while True:
        plot(x, y)  # Función que dibuja el píxel en (x, y)
        if x == x1 and y == y1:
            break
        e2 = 2 * err
        if e2 > -dy:
            err -= dy
            x += sx
        if e2 < dx:
            err += dx
            y += sy

```
Este algoritmo utiliza solo operaciones enteras para determinar los píxeles que mejor aproximan una línea entre dos puntos, lo que lo hace eficiente y adecuado para sistemas con recursos limitados. Al evitar cálculos de punto flotante, se mejora el rendimiento y se facilita su implementación en hardware o entornos con capacidades computacionales restringidas.

---

## 📊 Resultados Visuales

![Grabación-de-pantalla-2025-05-02-221124](https://github.com/user-attachments/assets/480a4fc7-7f5c-48d4-bf5f-99e5e9a348bf)



---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
# esta deficnicion no se puede   dejar en una funcion ? from PIL import Image, ImageDraw import matplotlib.pyplot as plt
width, height = 200, 200 image = Image.new('RGB', (width, height), 'white') pixels = image.load()
```
## y para la continuacion del taller se realizo las siguientes consultas
## y esto a GPT


```
https://chatgpt.com/share/6810ebba-d210-8004-86c0-08425f3f50d2
```



## 💬 Reflexión Final

Una de las partes más complejas e interesantes del taller fue la implementación del algoritmo de Bresenham para líneas. Este algoritmo destaca por su eficiencia al utilizar únicamente operaciones enteras para determinar los píxeles que mejor aproximan una línea entre dos puntos. 

---


---



