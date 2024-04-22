import React from "react";
import HistoryPage from "./HistoryPage";
import MessageBox from "./MessageBox";

const ChatPage = () => {
  return (
    <div className="flex flex-row bg-[#c6c6e7] ">
      <HistoryPage />
      <MessageBox />
    </div>
  );
};

export default ChatPage;
