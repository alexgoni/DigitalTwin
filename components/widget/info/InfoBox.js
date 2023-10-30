import Clock from "./Clock";
import Timer from "./Timer";

export default function InfoBox() {
  return (
    <div className="mb-3 flex w-full flex-wrap items-center justify-between rounded-lg bg-teal-100 p-4 text-sm text-green-800 shadow-sm">
      <Timer />
      <Clock />
      <span>작물 : 파프리카</span>
      <div className="flex items-center justify-between">
        <span>작물 상태 : </span>
        <span className="text-lg">😀</span>
      </div>
    </div>
  );
}

// 표정 3단계로 분류해서 랜덤하게
