import React from "react";
import * as THREE from "three";

export function crearObjeto(tipo, posicion, material) {
  switch (tipo) {
    case "esfera":
      return (
        <mesh position={posicion} material={material}>
          <sphereGeometry args={[0.5, 16, 16]} />
        </mesh>
      );
    case "cilindro":
      return (
        <mesh position={posicion} material={material}>
          <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
        </mesh>
      );
    case "cono":
      return (
        <mesh position={posicion} material={material}>
          <coneGeometry args={[0.5, 1.5, 16]} />
        </mesh>
      );
    case "toro":
      return (
        <mesh position={posicion} material={material}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
        </mesh>
      );
    default:
      return null;
  }
}