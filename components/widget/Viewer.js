import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraPosition from "../handler/CameraPosition";
import SwitchingModel from "../handler/SwitchingModel";
import Background from "../3Dmodels/Background";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Viewer() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-[500px] border-2 border-teal-500 shadow-2xl">
      {loading ? <Loading /> : null}
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2.2} position={[10, 10, 5]} />
        <CameraPosition position={[0, 5, 15]} />
        <Background position={[0, -6, -3]} />
        <SwitchingModel setLoading={setLoading} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
