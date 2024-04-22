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
        <div>
          <h1 className="my-32 text-center text-4xl">BotAI</h1>
          <div className="flex flex-row">
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
