
# 🧪 2025-04-29_taller_convoluciones_personalizadas

## 📅 Fecha
`2025-05-02` 

---

## 🎯 Objetivo del Taller

Diseñar e implementar filtros personalizados en imágenes para modificar bordes, difuminar o realzar detalles. Este taller busca profundizar en el concepto de convolución y su impacto visual en el procesamiento de imágenes.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Umbralización
- [ ] Procesamiento de imágenes
- [ ] Operaciones con OpenCV / NumPy

---

## 🔧 Herramientas y Entornos

### 💻 Python (Colab o Jupyter Notebook)

**Herramientas:** `opencv-python`, `numpy`, `matplotlib`


---




## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_convoluciones_personalizadas/
├── python/
├── README.md
```





## 🧪 Implementación

Explica el proceso:

primero se le aplica una convolucion a la imagen original y se observa su cambio ,luego en la otra selada se le aplican las siguientes convoluciones y se observa la diferencia del resultado de cada una  y finalmemnte se aplica un slider para que canbi el desenfoque en base a la dimencion del kernel  

### 🔹 Etapas realizadas
- [ ] se carga la imagen
- [ ] Se define la funciones de convolucion 
- [ ] Se define los kernels
- [ ] Se aplica la convolucion
- [ ] Se muestran los realizados
  


### 🔹 Código relevante

A continuación, se presenta un fragmento representativo del slider que prueba diferentes valores del kernel

```python

# @title
import cv2
import numpy as np
import matplotlib.pyplot as plt
from ipywidgets import interact, IntSlider

image = cv2.imread('/content/flour.jpeg', cv2.IMREAD_GRAYSCALE)

def interactive_blur(ksize):
    if ksize % 2 == 0:
        ksize += 1
    blur_kernel = np.ones((ksize, ksize), np.float32) / (ksize * ksize)
    result = cv2.filter2D(image, -1, blur_kernel)

    plt.figure(figsize=(6, 6))
    plt.imshow(result, cmap='gray')
    plt.title(f'Desenfoque con kernel {ksize}x{ksize}')
    plt.axis('off')
    plt.show()

interact(interactive_blur, ksize=IntSlider(min=1, max=21, step=2, value=3));

```
Este algoritmo implementa un filtro de desenfoque utilizando un kernel de tamaño variable, con la capacidad de asegurar que el tamaño del kernel siempre sea impar (lo cual es esencial para muchos algoritmos de filtrado). Aplica el filtro a una imagen y luego visualiza el resultado en una ventana utilizando matplotlib.

---

## 📊 Resultados Visuales

![Grabación-de-pantalla-2025-05-03-113940](https://github.com/user-attachments/assets/aa7e1df6-204e-4f5b-9800-a5ad0530a0c6)


---

## 🧩 Prompts Usados


## y para la continuacion del taller se realizo las siguientes consultas  a GPT


```
https://chatgpt.com/share/68118871-d808-8004-a4a6-709cae37f0a7
```



## 💬 Reflexión Final


Se aprendio acerca de las convoluciones en el procesamiento de imágenes y cómo se pueden personalizar para crear efectos visuales específicos, como detección de bordes, suavizado o resaltado de detalles.

---


---



