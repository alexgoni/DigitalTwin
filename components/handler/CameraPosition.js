import { useThree } from "@react-three/fiber";

export default function CameraPosition({ position }) {
  const [x, y, z] = position;
  const { camera } = useThree();
  camera.position.set(x, y, z);
}
