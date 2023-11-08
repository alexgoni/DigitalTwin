import { growthDuration, modelLoadingState, warningFlag } from "@/recoil/state";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRecoilValue } from "recoil";

export default function Timer() {
  const durationInSecond = useRecoilValue(growthDuration) / 1000;
  const loading = useRecoilValue(modelLoadingState);
  const warning = useRecoilValue(warningFlag);

  return (
    <CountdownCircleTimer
      isPlaying={!loading && !warning}
      size={25}
      strokeWidth={2}
      duration={durationInSecond}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        return { shouldRepeat: true };
      }}
    >
      {({ remainingTime }) => <div className="text-xs">{remainingTime}</div>}
    </CountdownCircleTimer>
  );
}
