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
        <div className="w-[721px] h-[600px] mb-5   bg-[#0F0F0F] mx-40 rounded-md p-5 border-white border-b-[1px]">
          <h1 className="my-8 text-center text-4xl text-[#9BA3AF] font-bold">
            Bot.AI
          </h1>
          <div className="flex flex-col lg:flex-row ">
            <Box
              headline={"Example"}
              data={[
                "Write step by step for research and development ",
                "Explain how BigBang Theory in 100 words",
                "Can you explain the concept of supply and demand?",
                "Explain how to manage money with $2000/month salary",
              ]}
            />
            <Box
              headline={"Capabilities"}
              data={[
                "Provide information and answer questions",
                "Assist with creative writing tasks",
                "General knowledge and facts",
                "Grammar and language correction",
                "Contextual recommendations",
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Render;

{
  /**<Box
              headline={"Limitation"}
              data={[
                "Lack of common sense and reasoning",
                "Potential for biased or inappropriate responses",
                "May Ocassionally produce harmful instructions or biased content",
                "Limited knowledge of world and events after 2021 ",
              ]}
            /> */
}
