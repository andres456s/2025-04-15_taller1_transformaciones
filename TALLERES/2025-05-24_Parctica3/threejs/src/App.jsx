import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import './App.css';
import { useMaterialesPBR } from "./materialesPBR"; // Importa el hook correctamente
import { configurarIluminacion } from "./iluminacion"; // Importa la función de iluminación
import { crearObjeto } from "./objetosDecorativos";

import {
  crearArbol,
  crearAnimal,
  crearPlanta,
  crearRoca
} from "./decoracionesAgrupadas";

// --- FUNCIÓN PARA GENERAR EL TERRENO ---
// Esta función crea un array con la información de cada cubo del terreno
function crearMapaTerreno(width, depth, maxHeight) {
  const cubos = []; // Aquí se guardarán todos los cubos a renderizar
  for (let x = 0; x < width; x++) {           // Recorre el ancho del terreno
    for (let z = 0; z < depth; z++) {         // Recorre la profundidad del terreno
      const height = Math.floor(Math.random() * maxHeight) + 1; // Altura aleatoria para (x,z)
      for (let y = 0; y < height; y++) {      // Por cada nivel de altura, crea un cubo
        cubos.push({ x, y, z, nivel: y });    // Guarda la posición (x,y,z) y el "nivel"
      }
    }
  }
  return cubos;
}

// --- DEFINICIÓN DE MATERIALES ---
// Son los colores (o materiales) posibles para los cubos. Puedes añadir más.
const materiales = [
  new THREE.MeshStandardMaterial({ color: 0x4caf50 }), // Verde
  new THREE.MeshStandardMaterial({ color: 0x795548 }), // Café
  new THREE.MeshStandardMaterial({ color: 0x9e9e9e }), // Gris
];

// --- PARÁMETROS DEL TERRENO ---
const width = 35;        // Ancho del terreno
const depth = 35;        // Profundidad del terreno
const maxHeight = 4;     // Altura máxima de los cubos

// --- GENERACIÓN DEL TERRENO ---
// Llama a la función y obtiene todos los cubos a renderizar
const cubosTerreno = crearMapaTerreno(width, depth, maxHeight);

// --- COMPONENTE PRINCIPAL ---
const App = () => {
      const materialesPBR = useMaterialesPBR(); // <-- Aquí cargas los materiales correctamente
      // ...resto del código...
  const desplazamientoX = -18; // Puedes ajustar si quieres mover el terreno en Y
  const desplazamientoY = 0; // eleva todo el terreno 2 unidades
  const desplazamientoZ = -15; // Puedes ajustar si quieres mover el terreno en X

  return (
    <Canvas style={{ width: "70vw", height: "70vh" }} camera={{ position: [35, 30, 5], fov: 40 } }>
      {/* LUZ AMBIENTE PARA ILUMINAR EL ESCENARIO */}
      {/* <ambientLight intensity={0.7} /> */}
      {/* LUZ DIRECCIONAL PARA SOMBRAS Y RELIEVE */}
      {/* <directionalLight position={[10, 20, 10]} intensity={1} /> */}
      {/* RECORRE LOS CUBOS Y LOS RENDERIZA */}
       {configurarIluminacion()}
      {cubosTerreno.map(({ x, y, z, nivel }, i) => (
        <mesh
          key={i}
          position={[
            x + desplazamientoX,
            y + desplazamientoY,
            z + desplazamientoZ
          ]}
        //   material={materiales[nivel % materiales.length]}
        // >
        material={materialesPBR[nivel % materialesPBR.length]}
        >
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ))}
       {/* Ejemplos de objetos decorativos */}
    {crearObjeto("esfera", [0, 5, 0], new THREE.MeshStandardMaterial({ color: "red" }))}
    {crearObjeto("cilindro", [2, 2, 2], new THREE.MeshStandardMaterial({ color: "brown" }))}
    {crearObjeto("cono", [5, 2, 5], new THREE.MeshStandardMaterial({ color: "green" }))}
    {crearObjeto("toro", [8, 2, 8], new THREE.MeshStandardMaterial({ color: "yellow" }))}
  {crearArbol(3, 8, 9)}
{crearArbol(10, 6, 8)}
{crearArbol(6, 7, 8)}
{crearArbol(15, 6, 8)}
{crearAnimal(10, 2, 8)}
{crearPlanta(5, 1, 9)}
{crearAnimal(5, 6, 8)}
{crearRoca(8, 1, 4)}
{crearPlanta(3, 1, 8)}
{crearPlanta(7, 2, 8)}
{crearPlanta(12, 3, 8)}
{crearPlanta(20, 1, 8)}

{crearAnimal(5, 2, 10)}
{crearAnimal(10, 3, 15)}
{crearAnimal(2, 5, 15)}
{crearAnimal(12, 6, 15)}
{crearAnimal(15, 1, 18)}

{crearRoca(4, 1, 8)}
{crearRoca(9, 2, 8)}
{crearRoca(14, 3, 8)}
    </Canvas>
  );
};

export default App;