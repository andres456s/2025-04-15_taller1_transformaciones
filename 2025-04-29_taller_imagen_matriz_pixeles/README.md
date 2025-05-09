
# 🧪 Taller: De Pixeles a Coordenadas - Explorando la Imagen como Matriz

## 📅 Fecha
`2025-04-29`



## 🎯 Objetivo del Taller

Este taller tiene como objetivo explorar la representación de imágenes como matrices de píxeles y cómo estas representaciones pueden ser utilizadas para realizar transformaciones y extracciones de información. Aprenderás a trabajar con imágenes en Python, procesarlas y transformarlas en datos útiles para aplicaciones como visualización, análisis, y gráficos computacionales.



## 🧠 Conceptos Aprendidos

En este taller se abordaron los siguientes conceptos clave:

- Representación de imágenes como matrices bidimensionales y tridimensionales.
- Manipulación de píxeles para transformar imágenes.
- Extracción de información geométrica y espacial a partir de datos de píxeles.
- Uso de librerías de procesamiento de imágenes en Python.



## 🔧 Herramientas y Entornos

### 💻 Python (Jupyter Notebook)

**Librerías utilizadas:**
- `numpy`: Para manipulación y cálculo con matrices.
- `matplotlib`: Para visualización de imágenes y matrices.
- `Pillow`: Para cargar y modificar imágenes.

---

## 📁 Estructura del Proyecto

```
2025-04-29_taller_imagen_matriz_pixeles/
├── Taller_De_Pixels_a_Coordenadas_Explorando_la_Imagen_como_Matriz.ipynb
```

---

## 🧪 Implementación

### 🔹 Etapas realizadas

1. **Carga de imágenes**:
   Uso de la librería `Pillow` para cargar imágenes y convertirlas a matrices de píxeles.

2. **Transformación de imágenes**:
   Aplicación de operaciones matemáticas sobre matrices para modificar la imagen, como rotaciones, escalados, y cambios de color.

3. **Extracción de información**:
   Conversión de píxeles en datos geométricos, como coordenadas, para su uso en análisis o visualización.

### 🔹 Código relevante

A continuación, un fragmento de código representativo del taller:

```python
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

# Cargar la imagen
image = Image.open('ruta_a_la_imagen.jpg')

# Convertir la imagen a escala de grises
gray_image = image.convert('L')

# Transformar la imagen en una matriz de píxeles
pixel_matrix = np.array(gray_image)

# Mostrar la matriz como imagen
plt.imshow(pixel_matrix, cmap='gray')
plt.title("Imagen como Matriz")
plt.colorbar()
plt.show()
```

**Descripción del código**:
- Este fragmento carga una imagen, la convierte a escala de grises, y la representa como una matriz de píxeles. Finalmente, la visualiza utilizando `matplotlib`.



## 📊 Resultados Visuales

Durante el taller, se generaron visualizaciones que muestran:


![Grabación-de-pantalla-2025-05-08-214222](https://github.com/user-attachments/assets/9fc9f484-8d84-4fb6-8d6f-8a43ce7141ae)



## 🧩 Prompts Usados

Durante el desarrollo del taller, se utilizaron las siguientes consultas:

1. "¿Cómo convertir una imagen a una matriz de píxeles en Python?"
2. "¿Cómo visualizar una matriz como una imagen usando matplotlib?"
3. "¿Cómo extraer coordenadas de píxeles en una imagen?"
4. "¿Cómo realizar operaciones matemáticas en la matriz de píxeles?"

---

## 💬 Reflexión Final

Este taller permitió comprender cómo las imágenes digitales son representaciones matemáticas que pueden ser manipuladas y transformadas para extraer información útil. Además, se exploraron herramientas esenciales en Python para trabajar con imágenes y matrices, abriendo posibilidades para aplicaciones en análisis de datos, visión computacional y gráficos interactivos.

