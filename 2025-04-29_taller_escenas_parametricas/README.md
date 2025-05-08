
# 🧪 Taller: Escenas Paramétricas - Creación de Objetos desde Datos

## 📅 Fecha
`2025-05-02`



## 🎯 Objetivo del Taller

El taller tiene como objetivo enseñar la creación programada de objetos 3D desde datos estructurados, como listas de coordenadas o tablas. Este enfoque permite generar geometrías en tiempo real y exportarlas a formatos estándares de modelos 3D.



## 🧠 Conceptos Aprendidos

Lista de los principales conceptos aplicados en el taller:

- Uso de librerías para visualización y manipulación de datos 3D (`vedo`, `trimesh`, `open3d`).
- Procesamiento de datos estructurados para generar geometrías.
- Exportación de modelos 3D a diferentes formatos estándares (`STL`, `OBJ`, `GLB`).
- Uso de Python en entornos interactivos como Jupyter Notebook o Google Colab.



## 🔧 Herramientas y Entornos

### 💻 Python (Colab o Jupyter Notebook)

**Librerías utilizadas:** 
- `vedo` para visualización interactiva y manipulación de geometrías.
- `trimesh` para operaciones avanzadas en mallas 3D.
- `open3d` para la creación y exportación de modelos.
- `numpy` y `pandas` para procesamiento de datos.

### 🌐 Three.js con React Three Fiber

- Framework para visualización 3D en navegadores web.

### 🎮 Unity (versión LTS)

- Motor de desarrollo para construir aplicaciones interactivas 3D.

---

## 📁 Estructura del Proyecto

```
yyyy-mm-dd_taller_escenas_parametricas/
├── python/
├── unity/
├── threejs/
├── README.md
```

---

## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. **Procesamiento de datos**:
   Lectura de datos estructurados desde un archivo CSV que contiene información sobre posición (`x`, `y`, `z`), forma (`shape`), tamaño (`size`) y color (`color`).

2. **Creación de geometrías**:
   Generación de primitivas 3D (cubo, esfera, cilindro) usando las librerías `vedo`, `trimesh` y `open3d`.

3. **Exportación de modelos**:
   Exportación de las geometrías creadas a diferentes formatos como `STL` y `GLB`.

### 🔹 Código relevante

El siguiente fragmento de código muestra cómo se fusionan y exportan los objetos creados con librerías como `vedo`, `trimesh` y `open3d`:

```python
# Fusionar los objetos de vedo en una sola malla exportable
merged = vedo.merge(vedo_objs)

# Exportar a un archivo válido (STL, OBJ, etc.)
vedo.write(merged, "/content/scene_vedo.stl")  # o .obj, .ply, etc.

# Exportar con trimesh
scene_t = trimesh.util.concatenate(trimesh_objs)
trimesh.exchange.export.export_mesh(scene_t, "/content/scene_trimesh.stl")

# Exportar con Open3D
scene_o = open3d_objs[0]
for mesh in open3d_objs[1:]:
    scene_o += mesh
o3d.io.write_triangle_mesh("/content/scene_open3d.glb", scene_o)
```

---

## 📊 Resultados Visuales

A continuación, se presentan capturas de los modelos generados y exportados:

![Grabación de pantalla](https://github.com/user-attachments/assets/801908f3-56f5-446f-b421-a39f4468eb3e)

---

## 🧩 Prompts Usados

Durante el taller, se utilizaron los siguientes comandos y consultas:

```text
¿Cómo exportar una malla 3D en formato STL con trimesh?
¿Cómo combinar múltiples mallas y exportarlas como un archivo GLB con open3d?
¿Cómo validar un archivo STL o GLB después de exportarlo?
¿Cómo crear una escena básica en Three.js con geometrías dinámicas?
¿Cómo cargar datos desde un archivo JSON o CSV en Three.js?
¿Cómo animar objetos en base a datos estructurados?
```


---

## 💬 Reflexión Final

El taller brindó un entendimiento profundo sobre cómo generar geometrías 3D desde datos estructurados y exportarlas a formatos estándares. Se exploraron herramientas de visualización y manipulación, lo que permitió integrar conceptos de computación visual con herramientas prácticas. El aprendizaje de estas técnicas puede ser aplicado en proyectos de simulación, videojuegos, y visualización científica.

---
