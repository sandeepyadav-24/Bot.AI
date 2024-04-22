import React from "react";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";

const HistoryPage = () => {
  const historyStateValue = useRecoilValue(HistoryState);
  return (
    <div className="lg:w-1/4 h-screen  bg-[#212121] border-[#575757] border-r-2 ">
      <h1 className="text-2xl text-white text-center my-4">History</h1>
      {historyStateValue.map((e, index) => {
        return (
          <div
            className="mx-5 bg-indigo-500 text-white my-2 py-1 px-3 rounded-md "
            key={index}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default HistoryPage;
