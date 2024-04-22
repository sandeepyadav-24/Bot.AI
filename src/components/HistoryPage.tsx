import React from "react";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";

const HistoryPage = () => {
  const historyStateValue = useRecoilValue(HistoryState);
  return (
    <div className="lg:w-1/5 h-[776px] mx-2 bg-white rounded-lg my-5">
      <h1 className="text-2xl text-center my-4">History</h1>
      {historyStateValue.map((e, index) => {
        return (
          <div
            className="mx-5 bg-[#C6C6E6] text-white my-2 py-1 px-3 rounded-md"
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
