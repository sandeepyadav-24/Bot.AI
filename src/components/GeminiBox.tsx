import React from "react";
import TextMessage from "./TextMessage";

const GeminiBox = () => {
  return (
    <div className="w-[721px] h-[700px] mb-5 overflow-y-auto  bg-[#0F0F0F] mx-40 rounded-md p-5 border-white border-b-[1px]">
      <TextMessage />
    </div>
  );
};

export default GeminiBox;
