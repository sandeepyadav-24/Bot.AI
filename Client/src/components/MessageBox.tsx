import React from "react";
import SearchBox from "./SearchBox";
import GeminiBox from "./GeminiBox";

const MessageBox = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Render (Chat Content) */}
      <div className="flex-1 overflow-y-auto p-4">
        <GeminiBox />
      </div>

      {/* SearchBox (Input Area) */}
      <div className="p-4 bg-[#0F0F0F]">
        <SearchBox />
      </div>
    </div>
  );
};

export default MessageBox;
