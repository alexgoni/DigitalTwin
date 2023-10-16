import AlertWindow from "@/components/widget/AlertWindow";
import Navbar from "@/components/widget/Navbar";
import Viewer from "@/components/widget/Viewer";
import { useState } from "react";

export default function Index() {
  const [chats, setChats] = useState([]);

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-8 flex flex-wrap items-center justify-evenly gap-4">
        <div className="w-3/5">
          <Viewer />
        </div>
        <div className="w-1/4">
          <AlertWindow chats={chats} />
        </div>
      </div>
    </>
  );
}
