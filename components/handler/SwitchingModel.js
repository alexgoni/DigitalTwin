import Level1 from "../3Dmodels/plant_level/Level1";
import Level2 from "../3Dmodels/plant_level/Level2";
import Level3 from "../3Dmodels/plant_level/Level3";
import Level4 from "../3Dmodels/plant_level/Level4";
import Level5 from "../3Dmodels/plant_level/Level5";
import Level6 from "../3Dmodels/plant_level/Level6";
import Level7 from "../3Dmodels/plant_level/Level7";
import Level8 from "../3Dmodels/plant_level/Level8";
import Level9 from "../3Dmodels/plant_level/Level9";
import Level10 from "../3Dmodels/plant_level/Level10";
import Level11 from "../3Dmodels/plant_level/Level11";
import Level12 from "../3Dmodels/plant_level/Level12";
import Level13 from "../3Dmodels/plant_level/Level13";
import Level14 from "../3Dmodels/plant_level/Level14";
import Level15 from "../3Dmodels/plant_level/Level15";
import Level16 from "../3Dmodels/plant_level/Level16";
import Level17 from "../3Dmodels/plant_level/Level17";
import Level18 from "../3Dmodels/plant_level/Level18";
import Level19 from "../3Dmodels/plant_level/Level19";
import Level20 from "../3Dmodels/plant_level/Level20";
import Level21 from "../3Dmodels/plant_level/Level21";
import Level22 from "../3Dmodels/plant_level/Level22";
import Level23 from "../3Dmodels/plant_level/Level23";
import Level24 from "../3Dmodels/plant_level/Level24";
import Level25 from "../3Dmodels/plant_level/Level25";
import Level26 from "../3Dmodels/plant_level/Level26";
import Level27 from "../3Dmodels/plant_level/Level27";
import Level28 from "../3Dmodels/plant_level/Level28";
import Level29 from "../3Dmodels/plant_level/Level29";
import Level30 from "../3Dmodels/plant_level/Level30";
import { useEffect } from "react";
import { currentModelIndex, growthDuration, warningFlag } from "@/recoil/state";
import { useRecoilState, useRecoilValue } from "recoil";

const ModelContainer = ({ model: ModelComponent, play, ...props }) => {
  return (
    <group {...props}>
      <ModelComponent play={play} />
    </group>
  );
};

export default function SwitchingModel({ setLoading }) {
  const duration = useRecoilValue(growthDuration);
  const warning = useRecoilValue(warningFlag);
  const [currentModelIdx, setCurrentModelIdx] =
    useRecoilState(currentModelIndex);

  const plantLevels = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
    Level9,
    Level10,
    Level11,
    Level12,
    Level13,
    Level14,
    Level15,
    Level16,
    Level17,
    Level18,
    Level19,
    Level20,
    Level21,
    Level22,
    Level23,
    Level24,
    Level25,
    Level26,
    Level27,
    Level28,
    Level29,
    Level30,
  ];

  const modelNum = plantLevels.length;
  const CurrentModel = plantLevels[currentModelIdx];

  // 로드가 완료되면 loading state false로 변경
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!warning) {
        setCurrentModelIdx((prevIndex) => (prevIndex + 1) % modelNum);
      }
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [modelNum, warning]);

  return (
    <ModelContainer
      model={CurrentModel}
      position={[0, -5.5, 0]}
      play={warning}
    />
  );
}
