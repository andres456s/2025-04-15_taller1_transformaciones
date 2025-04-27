import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedObject({ type = 'box' }) {
  const meshRef = useRef()

  // 🔄 Animaciones en cada frame usando useFrame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // 🔁 Trasladar el objeto por una trayectoria circular (x, z)
    const radius = 2
    meshRef.current.position.x = radius * Math.cos(t)
    meshRef.current.position.z = radius * Math.sin(t)

    // 🔁 Rotarlo sobre su propio eje con incremento constante
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01

    // 🔁 Escalarlo suavemente con una función senoidal (Math.sin del tiempo)
    const scale = 1 + 0.3 * Math.sin(t * 2)
    meshRef.current.scale.set(scale, scale, scale)
  })

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
