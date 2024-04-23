import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { HistoryState } from "../Atom/History";
import { SearchDataState } from "../Atom/SearchData";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoMdSend } from "react-icons/io";

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

      const prompt = `generate a response in points like chatbot for   ${name} question `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // Split response into individual points
      const points = text;
      setMessage([...message, ...points]);
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
      <div
        className="flex items-center justify-center rounded-full bg-[#212121] ml-3 w-[70px] h-[50px] hover:bg-[#8774E1] "
        onClick={clickHandler}
      >
        <IoMdSend className="text-2xl text-[#8774E1] hover:text-white" />
      </div>
    </div>
  );
};

export default SearchBox;
