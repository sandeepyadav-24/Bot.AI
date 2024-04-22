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
        <div className="w-[710px]">
          <h1 className="my-20 text-center text-4xl">BotAI</h1>
          <div className="flex flex-col lg:flex-row ">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      )}
    </div>
  );
};

export default Render;
