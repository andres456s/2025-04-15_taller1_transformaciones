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
