import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraPosition from "../handler/CameraPosition";
import SwitchingModel from "../handler/SwitchingModel";
import Background from "../3Dmodels/Background";
import Loading from "./Loading";
import { modelLoadingState } from "@/recoil/state";
import { useRecoilValue } from "recoil";

export default function Viewer() {
  const loading = useRecoilValue(modelLoadingState);

  return (
    <div className="h-[450px] border-2 border-gray-700 shadow-2xl">
      {loading ? <Loading /> : null}
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2.2} position={[10, 10, 5]} />
        <CameraPosition position={[0, 5, 15]} />
        <Background position={[0, -6, -3]} />
        <SwitchingModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
