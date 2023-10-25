import AlertWindow from "@/components/widget/AlertWindow";
import Navbar from "@/components/widget/Navbar";
import Viewer from "@/components/widget/Viewer";
import { currentModelIndex, warningFlag } from "@/recoil/state";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Index() {
  const [chats, setChats] = useState([]);
  const currentModelIdx = useRecoilValue(currentModelIndex);
  const setWarning = useSetRecoilState(warningFlag);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/sensor_data?modelIndex=${currentModelIdx}`,
        );
        const data = await response.json();

        // 병해상황 발생
        if (data.messages.length > 0) {
          const newChat = {
            message: data.messages.join(" "),
            time: data.time,
            warning: data.messages.length >= 3,
          };
          setChats((prevChats) => [...prevChats, newChat]);
          // 병해조건 3개 이상 시 warning 발생
          setWarning(newChat.warning);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentModelIdx]); // 생장간격마다 실행

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-8 flex flex-wrap items-center justify-evenly gap-4">
        <div className="mb-4 w-3/4 md:mb-0 md:w-3/5">
          <Viewer />
        </div>
        <div className="mb-8 w-3/4 md:mb-8 md:w-1/4">
          <AlertWindow chats={chats} />
        </div>
      </div>
    </>
  );
}
