import { currentModelIndex, warningFlag } from "@/recoil/state";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Clock from "./Clock";
import Timer from "./Timer";

export default function InfoBox() {
  const [plantName, setPlantName] = useState("");
  const warning = useRecoilValue(warningFlag);
  const currentLevel = useRecoilValue(currentModelIndex);

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setPlantName(userInfo.plant);
    }
  }, []);

  return (
    <div className="mb-3 flex w-full flex-wrap items-center justify-between rounded-lg bg-teal-100 p-4 text-sm text-green-800 shadow-sm">
      <Timer />
      <Clock />
      <span>작물 : {plantName}</span>
      <span>현재 단계 : {`${currentLevel + 1} Lv`}</span>
      <div className="flex items-center justify-between">
        <span>작물 상태 : </span>
        <span className="text-lg">{warning ? <>😫</> : <>😀</>}</span>
      </div>
    </div>
  );
}

// TODO: 표정 3단계로 분류해서 랜덤하게
