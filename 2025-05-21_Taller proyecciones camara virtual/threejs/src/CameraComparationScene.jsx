import React, { useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, Sphere, Edges, PerspectiveCamera, OrthographicCamera, OrbitControls } from "@react-three/drei";
import './App.css';

// Componente para mostrar información de la cámara
function CameraInfo({ cameraType, params }) {
    return (
        <div style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 20,
            background: "rgba(20,20,20,0.7)",
            color: "white",
            padding: 16,
            borderRadius: 10,
            fontFamily: "monospace",
            fontSize: 16,
            minWidth: 240
        }}>
            <b>Tipo de cámara:</b> {cameraType} <br />
            {cameraType === "Perspectiva" ? (
                <>
                    <b>fov:</b> {params.fov}<br />
                    <b>aspect:</b> {params.aspect?.toFixed(2)}<br />
                    <b>near:</b> {params.near}<br />
                    <b>far:</b> {params.far}<br />
                </>
            ) : (
                <>
                    <b>left:</b> {params.left}<br />
                    <b>right:</b> {params.right}<br />
                    <b>top:</b> {params.top}<br />
                    <b>bottom:</b> {params.bottom}<br />
                    <b>near:</b> {params.near}<br />
                    <b>far:</b> {params.far}<br />
                </>
            )}
        </div>
    );
}

// Varias figuras a diferentes distancias
function DistributedObjects() {
    return (
        <>
            {/* Cubos */}
            <group>
                <Box position={[-2, 0, -4]}>
                    <meshStandardMaterial color="hotpink" />
                    <Edges scale={1.01} threshold={15} color="black" />
                </Box>
                <Box position={[2, 0, -7]}>
                    <meshStandardMaterial color="deepskyblue" />
                    <Edges scale={1.01} threshold={15} color="black" />
                </Box>
                <Box position={[0, 0, -10]}>
                    <meshStandardMaterial color="limegreen" />
                    <Edges scale={1.01} threshold={15} color="black" />
                </Box>
            </group>
            {/* Esferas */}
            <group>
                <Sphere position={[-4, 0, -6]} args={[0.7, 32, 32]}>
                    <meshStandardMaterial color="orange" />
                </Sphere>
                <Sphere position={[4, 0, -12]} args={[0.9, 32, 32]}>
                    <meshStandardMaterial color="purple" />
                </Sphere>
            </group>
            {/* Suelo */}
            <mesh rotation-x={-Math.PI/2} position={[0, -1, -7]}>
                <planeGeometry args={[24, 20]} />
                <meshStandardMaterial color="#f6f6f6" />
            </mesh>
        </>
    );
}

// Cámara con parámetros dinámicos y referencia para obtener datos
const CameraSwitcher = React.forwardRef(function CameraSwitcher({ usePerspective }, ref) {
    const aspect = window.innerWidth / window.innerHeight;
    const orthoParams = {
        left: -aspect * 3,
        right: aspect * 3,
        top: 3,
        bottom: -3,
        near: 0.1,
        far: 50
    };
    return usePerspective ? (
        <PerspectiveCamera ref={ref} makeDefault position={[0, 4, 8]} fov={60} near={0.1} far={50} />
    ) : (
        <OrthographicCamera ref={ref} makeDefault position={[0, 4, 8]} {...orthoParams} />
    );
});

export default function App() {
    const [usePerspective, setUsePerspective] = useState(true);
    const cameraRef = useRef();
    // Parámetros a mostrar
    const [cameraParams, setCameraParams] = useState({});

    // Actualiza los parámetros de la cámara en cada frame
    const CameraParamsUpdater = () => {
        const { camera } = useThree();
        React.useEffect(() => {
            if (camera) {
                setCameraParams(
                    usePerspective
                        ? {
                            fov: camera.fov,
                            aspect: camera.aspect,
                            near: camera.near,
                            far: camera.far
                          }
                        : {
                            left: camera.left,
                            right: camera.right,
                            top: camera.top,
                            bottom: camera.bottom,
                            near: camera.near,
                            far: camera.far
                          }
                );
            }
        }, [camera, usePerspective]);
        return null;
    };

    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
            {/* Botón de modo de cámara */}
            <button
                onClick={() => setUsePerspective(v => !v)}
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    zIndex: 10,
                    padding: 12,
                    fontSize: 16,
                    background: "#fff",
                    borderRadius: 8,
                    border: "1px solid #bbb",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    cursor: "pointer"
                }}
            >
                Cambiar a {usePerspective ? "Ortográfica" : "Perspectiva"}
            </button>
            {/* Info de la cámara */}
            <CameraInfo
                cameraType={usePerspective ? "Perspectiva" : "Ortográfica"}
                params={cameraParams}
            />
            <Canvas shadows style={{ width: '100vw', height: '100vh' }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <DistributedObjects />
                <CameraSwitcher ref={cameraRef} usePerspective={usePerspective} />
                <OrbitControls />
                <CameraParamsUpdater />
            </Canvas>
        </div>
    );
}