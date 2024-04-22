import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { HistoryState } from "../Atom/History";
import { SearchDataState } from "../Atom/SearchData";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SearchBox = () => {
  const [name, setName] = useState("");
  const [history, setHistory] = useRecoilState(HistoryState);
  const [message, setMessage] = useRecoilState(SearchDataState);

  const clickHandler = () => {
    setHistory([...history, name]);

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBIve9PzQXYddoXgwSPp3Y8X_KcgSBXS0M"
    );

    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = name;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setMessage([...message, text]);
    }

    run();
  };
  return (
    <div className="  flex flex-row justify-between mx-40  ">
      <input
        type="text"
        className="w-[970px] px-3 py-1 bg-[#212121] text-[#A2ACB4] rounded-2xl"
        placeholder="Send a new message"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="rounded-full p-3 bg-[#212121] mx-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-[#8774E1]"
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
        ;
      </div>
    </div>
  );
};

export default SearchBox;
