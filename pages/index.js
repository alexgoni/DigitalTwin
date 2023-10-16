import AlertWindow from "@/components/widget/AlertWindow";
import Navbar from "@/components/widget/Navbar";
import Viewer from "@/components/widget/Viewer";
import { currentModelIndex, warningFlag } from "@/recoil/state";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Index() {
  const [chats, setChats] = useState([]);
  const [currentModelIdx, setCurrentModelIdx] =
    useRecoilState(currentModelIndex);
  const [warning, setWarning] = useRecoilState(warningFlag);

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
