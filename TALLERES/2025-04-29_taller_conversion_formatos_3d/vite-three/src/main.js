import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

// Escena, cámara y render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
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

// Función para centrar el modelo en la escena
function centerModel(model) {
  const box = new THREE.Box3().setFromObject(model); // Crear un bounding box del modelo
  const center = box.getCenter(new THREE.Vector3()); // Obtener el centro del modelo
  const size = box.getSize(new THREE.Vector3()); // Obtener el tamaño del modelo

  // Ajustar la posición del modelo para que esté centrado
  model.position.x -= center.x;
  model.position.y -= center.y;
  model.position.z -= center.z;

  // Opcional: Ajustar la cámara para que encaje con el modelo
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180); // Convertir FOV a radianes
  const cameraZ = Math.abs(maxDim / Math.sin(fov / 2)); // Calcular la distancia de la cámara
  camera.position.z = cameraZ;
  camera.lookAt(0, 0, 0); // Asegurarse de que la cámara apunte al centro
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
      centerModel(currentModel); // Centrar el modelo
      scene.add(currentModel);
    });
  } else if (type === 'obj') {
    objLoader.load(path, obj => {
      currentModel = obj;
      centerModel(currentModel); // Centrar el modelo
      scene.add(currentModel);
    });
  } else if (type === 'stl') {
    stlLoader.load(path, geometry => {
      const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
      const mesh = new THREE.Mesh(geometry, material);
      currentModel = mesh;
      centerModel(currentModel); // Centrar el modelo
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