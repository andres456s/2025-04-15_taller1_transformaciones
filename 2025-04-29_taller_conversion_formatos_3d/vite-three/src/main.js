import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

// Escena, cámara y render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(0, 20, 0);
scene.add(light);

// Controles
const controls = new OrbitControls(camera, renderer.domElement);

// Loaders
const gltfLoader = new GLTFLoader();
const objLoader = new OBJLoader();
const stlLoader = new STLLoader();

let currentModel = null;

// Función para limpiar el modelo anterior
function clearModel() {
  if (currentModel) {
    scene.remove(currentModel);
    currentModel.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    currentModel = null;
  }
}

// Función para cargar el modelo seleccionado
function loadModel(type) {
  clearModel();

  const path = {
    gltf: '/models/submarine1.glb',
    obj: '/models/falcon-16 OBJ.obj',
    stl: '/models/Cubone_v1.stl',
  }[type];

  if (type === 'gltf') {
    gltfLoader.load(path, gltf => {
      currentModel = gltf.scene;
      scene.add(currentModel);
    });
  } else if (type === 'obj') {
    objLoader.load(path, obj => {
      currentModel = obj;
      scene.add(currentModel);
    });
  } else if (type === 'stl') {
    stlLoader.load(path, geometry => {
      const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
      const mesh = new THREE.Mesh(geometry, material);
      currentModel = mesh;
      scene.add(currentModel);
    });
  }
}

// Selector de modelo
const selector = document.getElementById('modelSelector');
selector.addEventListener('change', () => {
  loadModel(selector.value);
});

// Cargar el primero por defecto
loadModel('gltf');

// Animación
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
