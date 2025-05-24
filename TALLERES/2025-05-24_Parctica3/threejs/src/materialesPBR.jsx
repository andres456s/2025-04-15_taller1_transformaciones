import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function useMaterialesPBR() {
  // Pasto
  const grassColor = useLoader(THREE.TextureLoader, "/textures/grass/Grass001_1K-JPG_Color.jpg");
  const grassNormal = useLoader(THREE.TextureLoader, "/textures/grass/Grass001_1K-JPG_NormalDX.jpg");
  const grassRough = useLoader(THREE.TextureLoader, "/textures/grass/Grass001_1K-JPG_Roughness.jpg");
  [grassColor, grassNormal, grassRough].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(10, 10);
  });

  // Roca
  const rockColor = useLoader(THREE.TextureLoader, "/textures/rock/Ground085_1K-JPG_Color.jpg");
  const rockNormal = useLoader(THREE.TextureLoader, "/textures/rock/Ground085_1K-JPG_NormalDX.jpg");
  const rockRough = useLoader(THREE.TextureLoader, "/textures/rock/Ground085_1K-JPG_Roughness.jpg");
  [rockColor, rockNormal, rockRough].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
  });

  // Madera
  const woodColor = useLoader(THREE.TextureLoader, "/textures/wood/Bark014_1K-JPG_Color.jpg");
  const woodNormal = useLoader(THREE.TextureLoader, "/textures/wood/Bark014_1K-JPG_NormalDX.jpg");
  const woodRough = useLoader(THREE.TextureLoader, "/textures/wood/Bark014_1K-JPG_Roughness.jpg");
  [woodColor, woodNormal, woodRough].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
  });

  return [
    new THREE.MeshStandardMaterial({
      map: grassColor,
      normalMap: grassNormal,
      roughnessMap: grassRough,
    }),
    new THREE.MeshStandardMaterial({
      map: rockColor,
      normalMap: rockNormal,
      roughnessMap: rockRough,
    }),
    new THREE.MeshStandardMaterial({
      map: woodColor,
      normalMap: woodNormal,
      roughnessMap: woodRough,
    }),
  ];
}