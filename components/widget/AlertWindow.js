import { useEffect, useState } from "react";

export default function AlertWindow({ chats }) {
  return (
    <div className="flex flex-col space-y-10">
      <div className="rounded-md border-2 border-gray-700 p-2">
        <h1 className="border-b-2 border-b-gray-500 pb-1 text-center font-bold">
          Alert
        </h1>
        <div className="mt-2 h-[400px] space-y-2 overflow-y-scroll">
          {chats.length === 0 ? (
            <div className="text-center text-sm text-gray-500">
              There is no alert.
            </div>
          ) : (
            <ChatBubble chats={chats} />
          )}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ chats }) {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return chats.map((chat, index) => {
    const formattedDate = currentTime.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    const bubbleClassName = chat.warning
      ? "chat-bubble chat-bubble-error"
      : "chat-bubble";

    return isClient ? (
      <div key={index} className="chat chat-start w-4/5">
        <div className={bubbleClassName}>{chat.message}</div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">{formattedDate}</time>
        </div>
      </div>
    ) : null;
  });
}
