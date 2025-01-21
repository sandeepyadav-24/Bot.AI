import React from "react";
import TextMessage from "./TextMessage";

const GeminiBox = () => {
  return (
    <div className="w-full lg:w-[721px] h-[600px] mb-5 bg-[#0F0F0F] mx-auto lg:mx-40 rounded-md p-5 border-white border-b-[1px] overflow-y-auto">
      <TextMessage />
    </div>
  );
};

export default GeminiBox;
