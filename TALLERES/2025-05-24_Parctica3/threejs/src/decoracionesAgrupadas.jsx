import React from "react";
import * as THREE from "three";

export function crearArbol(x, y, z) {
  return (
    <group position={[x, y, z]}>
      {/* Tronco */}
      <mesh position={[0, 0.75, 0]} material={new THREE.MeshStandardMaterial({ color: "#8d5524" })}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 12]} />
      </mesh>
      {/* Copa */}
      <mesh position={[0, 1.7, 0]} material={new THREE.MeshStandardMaterial({ color: "#2e7d32" })}>
        <sphereGeometry args={[0.7, 16, 16]} />
      </mesh>
    </group>
  );
}

export function crearAnimal(x, y, z) {
  return (
    <group position={[x, y, z]}>
      {/* Cuerpo */}
      <mesh position={[0, 0.3, 0]} material={new THREE.MeshStandardMaterial({ color: "#bdb76b" })}>
        <sphereGeometry args={[0.3, 12, 12]} />
      </mesh>
      {/* Cabeza */}
      <mesh position={[0, 0.65, 0.25]} material={new THREE.MeshStandardMaterial({ color: "#bdb76b" })}>
        <sphereGeometry args={[0.18, 12, 12]} />
      </mesh>
      {/* Ojos */}
      <mesh position={[-0.06, 0.7, 0.38]} material={new THREE.MeshStandardMaterial({ color: "black" })}>
        <sphereGeometry args={[0.03, 8, 8]} />
      </mesh>
      <mesh position={[0.06, 0.7, 0.38]} material={new THREE.MeshStandardMaterial({ color: "black" })}>
        <sphereGeometry args={[0.03, 8, 8]} />
      </mesh>
    </group>
  );
}

export function crearPlanta(x, y, z) {
  return (
    <group position={[x, y, z]}>
      <mesh position={[0, 0.15, 0]} material={new THREE.MeshStandardMaterial({ color: "#388e3c" })}>
        <coneGeometry args={[0.12, 0.3, 8]} />
      </mesh>
      <mesh position={[0.1, 0.08, 0]} material={new THREE.MeshStandardMaterial({ color: "#43a047" })}>
        <sphereGeometry args={[0.08, 8, 8]} />
      </mesh>
    </group>
  );
}

export function crearRoca(x, y, z) {
  return (
    <group position={[x, y, z]}>
      <mesh material={new THREE.MeshStandardMaterial({ color: "#888888" })}>
        <sphereGeometry args={[0.18, 8, 8]} />
      </mesh>
      <mesh position={[0.12, 0.05, 0]} material={new THREE.MeshStandardMaterial({ color: "#aaaaaa" })}>
        <sphereGeometry args={[0.09, 8, 8]} />
      </mesh>
    </group>
  );
}