import React from "react";

export function configurarIluminacion() {
  return (
    <>
      {/* Luz ambiental para iluminar todo el escenario */}
      <ambientLight intensity={0.7} />
      {/* Luz direccional para simular el sol */}
      <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
      {/* Opcional: Luz puntual para experimentar */}
      {/* <pointLight position={[0, 20, 0]} intensity={0.5} color="white" /> */}
      {/* Opcional: Luz spot para experimentar */}
      {/* <spotLight position={[15, 30, 10]} intensity={0.3} angle={0.3} penumbra={0.5} /> */}
    </>
  );
}