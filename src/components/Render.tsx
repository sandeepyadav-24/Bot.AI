import React from "react";
import Box from "./Box";
import GeminiBox from "./GeminiBox";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";

const Render = () => {
  const history = useRecoilValue(HistoryState);
  const bool = history.length - 1;
  console.log(history);
  console.log(bool);

  return (
    <div>
      {bool ? (
        <GeminiBox />
      ) : (
        <div className="w-[721px] h-[700px] mb-5   bg-[#0F0F0F] mx-40 rounded-md p-5 border-white border-b-[1px]">
          <h1 className="my-20 text-center text-4xl text-[#9BA3AF] font-bold">
            Bot.AI
          </h1>
          <div className="flex flex-col lg:flex-row ">
            <Box headline={"Example"} />
            <Box headline={"Capabilities"} />
            <Box headline={"Limitation"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Render;
