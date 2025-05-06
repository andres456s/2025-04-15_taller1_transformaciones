
---

# 🧪2025-04-29_taller_jerarquias_transformaciones

## 📅 Fecha  
`2025-05-06`  

---

## 🎯 Objetivo del Taller  

Explorar y aplicar jerarquías y transformaciones en el contexto de gráficos computacionales. Este taller busca comprender cómo las transformaciones geométricas (traslación, rotación, escalado) se combinan y aplican en estructuras jerárquicas para modelar y animar objetos complejos en 2D y 3D.  

---

## 🧠 Conceptos Aprendidos  

Lista los principales conceptos aplicados:  

- [x] Representación de transformaciones geométricas mediante matrices.  
- [x] Aplicación de transformaciones en sistemas jerárquicos.  
- [x] Uso de transformaciones acumulativas para animaciones complejas.  
- [x] Integración de transformaciones en gráficos interactivos.  
- [x] Visualización y manipulación de jerarquías en entornos gráficos.  

---

## 🔧 Herramientas y Entornos  

### 🎮 Unity  

**Carpeta del proyecto:** `My project (1)`  
**Herramientas:** `Unity Engine`, `C#`  

- Crear jerarquías de objetos en una escena interactiva.  
- Aplicar transformaciones individuales y acumulativas a objetos jerárquicos.  
- Animar modelos 3D utilizando transformaciones dinámicas.  

### 🌐 Vite (React y Three.js)  

**Carpeta del proyecto:** `mi-proyecto-3d`  
**Herramientas:** `Vite`, `React`, `Three.js`  

- Crear jerarquías de objetos en una escena interactiva.  
- Aplicar transformaciones individuales y acumulativas a objetos jerárquicos.  
- Animar modelos 3D utilizando transformaciones dinámicas.  
- Configurar un entorno rápido de desarrollo con Vite.  

---

## 📁 Estructura del Proyecto  

```
2025-04-29_taller_jerarquias_transformaciones/

├── My project (1)/ #unity
├── mi-proyecto-3d/ # treeJs
```

---

## 🧪 Implementación  

### Unity  

- **Estructuras jerárquicas:** Creación de relaciones padre-hijo entre objetos en una escena.  
- **Transformaciones dinámicas:** Animación de objetos mediante transformaciones acumulativas.  
- **Interactividad:** Configuración de cámaras y controles para explorar las jerarquías en tiempo real.  

### Vite (React y Three.js)  

- **Estructuras jerárquicas:** Creación de relaciones padre-hijo entre objetos en una escena 3D.  
- **Transformaciones dinámicas:** Animación de objetos mediante transformaciones acumulativas.  
- **Interactividad:** Controles para manipular y explorar las jerarquías en tiempo real.  
- **Optimización:** Uso de Vite para un entorno de desarrollo rápido y eficiente.  

---

### 🔹 Código relevante  

#### Unity  

El código de Unity se encuentra en la carpeta `My project (1)` y se centra en la implementación de jerarquías y transformaciones dinámicas.

#### Vite (React y Three.js)  

El siguiente fragmento de código está basado en `src/Escena.jsx` y define una escena interactiva con jerarquías y transformaciones dinámicas:  

```javascript
// src/Escena.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

export default function Escena3D() {
  const grupo = useRef();

  // Sliders para rotación y posición del grupo principal
  const { rotY, posX } = useControls({
    rotY: { value: 0, min: -Math.PI, max: Math.PI, label: "Rotación Y (padre)" },
    posX: { value: 0, min: -5, max: 5, label: "Traslación X (padre)" },
  });

  // Animación en cada frame
  useFrame(() => {
    if (grupo.current) {
      grupo.current.rotation.y = rotY;
      grupo.current.position.x = posX;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />

      {/* Nodo padre */}
      <group ref={grupo}>
        {/* Hijo 1 */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Hijo 2 */}
        <mesh position={[1.5, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>

        {/* Nieto: grupo anidado */}
        <group position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <mesh position={[0, 0.5, 0]}>
            <coneGeometry args={[0.3, 1]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </group>
      </group>
    </>
  );
}
```

**Descripción del código:**  
Este código utiliza `@react-three/fiber` para renderizar una escena 3D interactiva con jerarquías. Se definen controles dinámicos para manipular la rotación y traslación del grupo principal, lo que permite observar cómo las transformaciones afectan a los objetos anidados (hijos y nietos).  

---

## 📊 Resultados Visuales  

Se desarrollaron visualizaciones que muestran:  

1. **Transformaciones geométricas individuales:** Ejemplo de cómo la traslación, rotación y escalado afectan un objeto.  
2. **Transformaciones jerárquicas:** Aplicación acumulativa de transformaciones en un sistema de objetos padre-hijo.  
3. **Animaciones:** Uso de transformaciones dinámicas para animar objetos en escenas interactivas creadas con Unity y Vite (React y Three.js).  

---

## 🧩 Prompts Usados  

```text
# ¿Cómo configurar un proyecto con Vite, React y Three.js?
# ¿Cómo implementar jerarquías y transformaciones en Three.js?
# ¿Cómo controlar y explorar escenas 3D con React Three Fiber?
# ¿Cómo aplicar transformaciones jerárquicas en Unity?
```

---

## 💬 Reflexión Final  

Este taller permitió explorar cómo las transformaciones geométricas y las jerarquías son fundamentales en gráficos computacionales. Al utilizar herramientas modernas como Unity, Vite, React y Three.js, se logró una comprensión profunda de los conceptos y su aplicación práctica en visualizaciones interactivas y animaciones jerárquicas.  

--- 
