
# 🧪2025-04-29_ Taller_Segmentación Semántica Multimodal: Qué hay en la Imagen


## 📅 Fecha
`2025-05-02` 

---

## 🎯 Objetivo del Taller

Aplicar segmentación semántica para identificar y extraer regiones específicas dentro de una imagen, como personas, árboles o vehículos. Se utilizarán modelos avanzados como SAM (Segment Anything Model) o DeepLab, permitiendo al estudiante obtener máscaras y usarlas para análisis, recorte o visualización de componentes.
  ---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Modelos multimodales
- [ ] Segment Anything Model (SAM)
- [ ] DeepLabV3 con ResNet-101

---

## 🔧 Herramientas y Entornos

Entorno: Python (Google Colab o local)
Herramientas/librerías:

segment-anything (SAM) o torchvision con DeepLabV3
OpenCV, matplotlib, Pillow, numpy
supervision, transformers, torch, huggingface_hub


---


## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_segmentacion_semantica_sam_deeplab/
├── colab_notebooks/
├── imagenes_entrada/
├── mascaras_salida/
├── resultados/
├── README.md
```




## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas

1.se intala el modelo
2. Se cragar la imagen de prueba y elmodelo SAM
3. Seleccionar punto o caja para segmentar y obtener máscara
4. Visualizar resultados y guardar máscaras


### 🔹 Código relevante

A continuación, se presenta un fragmento representativo dela implementacion del algoritmo para poder cragar la imagen juntoal modelo SAM :

```python
# Import necessary libraries
import torch
import cv2
import numpy as np
import matplotlib.pyplot as plt
from segment_anything import SamPredictor
from PIL import Image

# Asegurarse de que la GPU está disponible
if torch.cuda.is_available():
    device = "cuda"
else:
    device = "cpu"
print(f"Usando {device}")

# Paso 1: Cargar imagen y modelo SAM
image = cv2.imread("/content/fauce.jpeg")
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convertir a RGB

# Cargar el modelo
sam = sam_model_registry["vit_h"](checkpoint="sam_vit_h.pth").to(device)
predictor = SamPredictor(sam)
predictor.set_image(image)

print("Modelo cargado y predictor listo.")
```
Este modelo utiliza es el encargado en preprocesar la imagen cabe resaltar que se debio editar el colab para poder ejecutarlo con su GPU para que permitiera la utilizacion de la libreria que utiliza nvidia

---

## 📊 Resultados Visuales


![Grabación-de-pantalla-2025-05-03-005949](https://github.com/user-attachments/assets/97c3baff-248a-46f5-a5f6-0a48c1ca3149)

se puede observar que el modelo identifica los objetos en la imagen
---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

## y para la continuacion del taller se realizo las siguientes consultas a GPT


```
https://chatgpt.com/share/681192e8-9ad8-8004-8226-0b9ae2a21f1f
```



## 💬 Reflexión Final

Este taller me permitió aprender y reforzar varios conceptos clave sobre segmentación semántica multimodal , especialmente utilizando modelos avanzados como Segment Anything Model (SAM) y DeepLabV3 
---


---


