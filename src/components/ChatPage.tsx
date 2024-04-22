import React from "react";
import HistoryPage from "./HistoryPage";
import MessageBox from "./MessageBox";

const ChatPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#0F0F0F] ">
      <HistoryPage />
      <MessageBox />
    </div>
  );
};

export default ChatPage;
