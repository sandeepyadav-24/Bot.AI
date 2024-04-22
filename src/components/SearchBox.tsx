import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { HistoryState } from "../Atom/History";

const SearchBox = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useRecoilState(HistoryState);

  const clickHandler = () => {
    setMessage([...message, name]);
  };
  return (
    <div className="px-5 bg-white py-2 flex flex-row justify-between rounded-md mx-5 my-10">
      <input
        type="text"
        className="w-[970px] px-3 py-1"
        placeholder="Send a new message"
        onChange={(e) => setName(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        onClick={clickHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
