import authentication from "@/components/handler/Authentication";
import AlertWindow from "@/components/widget/AlertWindow";
import InfoBox from "@/components/widget/info/InfoBox";
import Navbar from "@/components/widget/Navbar";
import Viewer from "@/components/widget/Viewer";
import { currentModelIndex, growthDuration, warningFlag } from "@/recoil/state";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function Index() {
  const [chats, setChats] = useState([]);
  const currentModelIdx = useRecoilValue(currentModelIndex);
  const [warning, setWarning] = useRecoilState(warningFlag);
  const setDuration = useSetRecoilState(growthDuration);

  const router = useRouter();

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

  useEffect(() => {
    (async () => {
      const isLoggedIn = await authentication();
      if (!isLoggedIn) router.push("/user/login");
    })();
  }, []);

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setDuration(userInfo.duration * 1000);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentModelIdx]); // 생장간격마다 실행

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-8 flex flex-wrap items-center justify-evenly gap-4">
        <div className="mb-4 w-3/4 md:mb-0 md:w-3/5">
          <InfoBox />
          <Viewer />
        </div>
        <div className="mb-8 w-3/4 md:mb-8 md:w-1/4">
          <AlertWindow chats={chats} />
        </div>
      </div>
    </>
  );
}
