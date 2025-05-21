// App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 30 },
  { id: 3, value: 60 },
  { id: 4, value: 90 },
  { id: 5, value: 20 },
];

function Box({ position, scale, color, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene() {
  const { baseScale, rotationSpeed, minColor, maxColor } = useControls({
    baseScale: { value: 1, min: 0.1, max: 3, step: 0.1 },
    rotationSpeed: { value: 0.01, min: 0.001, max: 0.1 },
    minColor: "#00ff00",
    maxColor: "#ff0000",
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {data.map((item, index) => {
        // Parametrización
        const height = (item.value / 100) * baseScale + 0.5;
        const color = item.value > 50 ? maxColor : minColor;
        const x = index * 2 - data.length;
        const rotation = [0, item.value * 0.01, 0];

        return (
          <Box
            key={item.id}
            position={[x, height / 2, 0]}
            scale={[1, height, 1]}
            color={color}
            rotation={rotation}
          />
        );
      })}
    </>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
