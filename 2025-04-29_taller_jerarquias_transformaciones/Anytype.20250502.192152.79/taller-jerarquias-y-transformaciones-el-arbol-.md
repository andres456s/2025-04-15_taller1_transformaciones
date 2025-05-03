# Taller - Jerarquías y Transformaciones: El Árbol del Movimiento   
### 1. 🌐 Three.js con React Three Fiber   
   
- Breve explicación de cada implementación.    
   
1ro se creo el projecto con sus debidas librerias y frameworks ; tambien en el archivo de escenarios se definieron los slider para su respectiva rotacion y traslacion ,la animacion en los frames   
- **GIFs animados** que muestren la visualización final en pantalla.   
![Grabación-de-pantalla-2025-05-02-190116.gif](files\grabacion-de-pantalla-2025-05-02-190116.gif)    
- Código relevante o enlaces al repositorio si no es posible cargarlo directamente.   
   
ademas se creo las respectivas jerarquias como lo indica el taller   
```

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
```
- ✅ **Descripción general de los prompts usados** (si aplica).   
   
se utiliso un promp de esta estructura    
```
como Crear una estructura padre-hijo usando <group> y varios objetos (<mesh>)para aplicar transformaciones al nodo padre (rotación y traslación) y observar el comportamiento de los hijos y Usar dat.GUI o leva para controlar la rotación y traslación en tiempo real con sliders.
```
###    
### 2. 🎮 Unity (versión LTS)   
- Breve explicación de cada implementación.   
    Se implemento los objetos como se indico respetando su jerarquia , y ademas los necesarios para la resolucion de los otros requerimientos    
    ![image.png](files\image.png)    
   
también se tuvo que desarrollar codigo donde se definio la funcion de cada slider boton y label sobre las figuras   
- **GIFs animados** que muestren la visualización final en pantalla.   
![Grabación-de-pantalla-2025-05-02-184924.gif](files\grabacion-de-pantalla-2025-05-02-184924.gif)    
- ✅ **Descripción general de los prompts usados** (si aplica).   
- Código relevante o enlaces al repositorio si no es posible cargarlo directamente.   
   
```
no rota cuando muevo el slider y solo parece una figura no aparece el hijo

LE PUEDO AUMENTAR LA VELOCIDAD DE MOVIMIENTO?

COMO Mostrar los valores actuales de posición, rotación y escala en la interfaz o consola.

los botones se los agrego al tree o al canvas o a que 

```
 En general se le pedía ayuda acerca de comportamientos erróneos del proyecto    
   
