# 2025-04-15_taller1_transformaciones

# Python
      ## ruta del script : python/Andres_Pentagono.ipynb

### 1ra implementacion
en la 1ra implementacion se realizo un pentagono ![image](https://github.com/user-attachments/assets/b389af28-536b-4865-b270-c2fa8bdb8389)

se impemento con la libreria ' matplotlib.pyplot ' donde se definieron los vertices manualmente en un array '[(0, 1), (0.95, 0.31), (0.59, -0.81), (-0.59, -0.81), (-0.95, 0.31)]'  de la figura y se le añadio un ultimo o primer vertice para cerrar la figura  'plt.plot(*zip(*vertices + [vertices[0]]), marker='o', linestyle='-')'
### 2da implementacion
en la 2da implementacion se genero las trasformaciones de traslacion ,rotacion y escalado con 15 iteraciones donde en cada una aumentaba el nivel de cada trasformacion ![image](https://github.com/user-attachments/assets/44ab96ef-8c53-4228-84f1-b7447a8f049d) Donde a cada vertice se le agrega un 1 'vertices_h = np.hstack([vertices, np.ones((vertices.shape[0], 1))])'
para poderlo multiplicar con la matris homogenea

        [sx * np.cos(theta), -sy * np.sin(theta), tx],
        [sx * np.sin(theta), sy * np.cos(theta), ty],
        [0, 0, 1]
  
y con el producto matricial y se cierra la figura asi como se hizo en la anterior implementacion tambien dentro de la iteracion se indican las variables a aumentar de la matris homogenea

    sx += 1
    sy += 1
    theta += np.radians(10)
    tx += 1
    ty += 1

### 3ra implementacion
los elemntos indicados en la implemntacion anterior se agregan en una funcion que tambien se pone dentro de un bucle para generar la animacion 

    for i in range(15):
        # Aplica la transformación
        vertices_transformados = transformar_vertices(vertices, sx, sy, theta, tx, ty)
    
        # Grafica el pentágono transformado
        plt.plot(vertices_transformados[:, 0], vertices_transformados[:, 1], label=f'Iteración {i+1}')
    
        # Aumenta una unidad para la siguiente iteración
        sx += 1
        sy += 1
        theta += np.radians(10)
        tx += 1
        ty += 1
luego con imageio se crea un gif del bucle y se visualiza
        
        imageio.mimsave("pentagono_transformado.gif", frames, fps=10,loop=0)
        from IPython.display import Image

        Image(filename="pentagono_transformado.gif")
![descarga](https://github.com/user-attachments/assets/8e43ef09-e70c-4952-93bd-cc727c81efb8)


# Procesing
      ## ruta del script : processing/sketch_250418a/sketch_250418a.pde

para la implementacion se desarrollo
se definio la ventana de la animacion

      void setup() {
        size(600, 600, P3D); // Sketch 3D
        noStroke();
      }
en otra funcion  se definio  el fondo y la iluminacion del cubo

      background(20);
      lights(); 
el tiempo y el movimiento y el rango en que  se va a escalar la figura 

      float t = millis() / 1000.0; // Tiempo en segundos
      float wave = sin(t);         // Movimiento oscilante
      float scaleFactor = 1 + 0.3 * wave; // Escala cíclica entre 0.7 y 1.3

la traslacion del objeto , el escalado y su rotacion

      translate(300 + 100 * wave, height / 2, 100 * cos(t));
    

      rotateY(t);
    

      scale(scaleFactor);
    
y se dibuja el objeto despues de definirlo 

      fill(100, 200, 255);
      box(100);


# threejs
      ## ruta del script : threejs/my-r3f-app/src/App.jsx
luego de generar o crear el proyecto en el archivo App.jxs se hizo lo siguiente

se creo las animaciones en funcion al tiempo
      
        useFrame(({ clock }) => {
          const t = clock.getElapsedTime()
      
la traslacion del objeto por una trayectoria circular 

          const radius = 2
          meshRef.current.position.x = radius * Math.cos(t)
          meshRef.current.position.z = radius * Math.sin(t)
      
la rotacion  sobre su propio eje con incremento constante
          meshRef.current.rotation.x += 0.01
          meshRef.current.rotation.y += 0.01
      
y la escalacion suavemente con una función senoidal 

          const scale = 1 + 0.3 * Math.sin(t * 2)
          meshRef.current.scale.set(scale, scale, scale)
        })

luego se rertorna la figura ya definoda 
        return (
          <mesh ref={meshRef}>
            {/* 🎲 Agregar un objeto 3D: cubo o esfera */}
            {type === 'sphere' ? (
              <sphereGeometry args={[0.5, 32, 32]} />
            ) : (
              <boxGeometry args={[1, 1, 1]} />
            )}
            <meshStandardMaterial color="skyblue" />
          </mesh>
        )
      }

luego se llama para poderlo visualizar en el navegador

      function App() {
        return (
          <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
            {/* 💡 Luz ambiental y puntual para iluminar el objeto */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            
            {/* 🎲 Componente que contiene el objeto animado */}
            <AnimatedObject type="Box" />
      
            {/* 🎮 BONUS: OrbitControls para navegar libremente la escena */}
            <OrbitControls />
          </Canvas>
        )
      }
      
      export default App
# Unity
      ## ruta del script : unity/My project/Assets/TutorialInfo/Scripts/MoverObjeto.cs
  
se crea el projecto y dentro de la carpeta assets  dentro del nombre del proyecto dentro de la carpeta scripts se define en ese archivp

se define las variables de rotacion ,traslacion y escalado

          public float rotSpeed = 45f;           // Grados por segundo
          public float moveInterval = 2f;        // Cada cuántos segundos se mueve
          public float moveDistance = 1f;        // Distancia de traslación
          public float scaleAmplitude = 0.3f;    // Amplitud del escalado
      
luego despues de definirlas se procede a llaamra las funciones requeridas para la utilizacion de dichas variables y hacer efectivas sus correspondientes trasformaciones 
      
Rotación constante (eje Y)
              transform.Rotate(Vector3.up * rotSpeed * Time.deltaTime);
      
 Escalado oscilante con Mathf
 
              float scale = 1 + scaleAmplitude * Mathf.Sin(Time.time);
              transform.localScale = new Vector3(scale, scale, scale);
      
Traslación aleatoria por X o Y cada X segundos

              if (Time.time - lastMoveTime > moveInterval)
              {
                  lastMoveTime = Time.time;
      
                  // Aleatoriamente elige entre mover en X o Y
                  int dir = Random.Range(0, 2);
                  Vector3 move = (dir == 0) ? Vector3.right : Vector3.up;
      
                  transform.Translate(move * moveDistance, Space.World);
              }
        
