{
  /**import React from "react";
import { useRecoilValue } from "recoil";
import { SearchDataState } from "../Atom/SearchData";

const TextMessage = () => {
  const text = useRecoilValue(SearchDataState);

  return (
    <div className="space-y-4">
      {text.map((e, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-xl ${
              index % 2 === 0
                ? "bg-[#8774E1] text-white" // User message
                : "bg-[#212121] text-white" // Bot message
            }`}
          >
            {e}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextMessage; */
}

{
  /**import React from "react";
import { useRecoilValue } from "recoil";
import { SearchDataState } from "../Atom/SearchData";

const TextMessage = () => {
  const text = useRecoilValue(SearchDataState);

  return (
    <div className="space-y-4">
      {text.map((e, index) => (
        <div
          key={index}
          className={`flex ${e.isUser ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-xl ${
              e.isUser
                ? "bg-[#8774E1] text-white" // User message
                : "bg-[#212121] text-white" // Bot message
            }`}
          >
            {e.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextMessage; */
}

import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SearchDataState } from "../Atom/SearchData";
import { SavedAnswersState } from "../Atom/SavedAnswer";
import { FaSave } from "react-icons/fa";

const TextMessage = () => {
  const text = useRecoilValue(SearchDataState);
  const setSavedAnswers = useSetRecoilState(SavedAnswersState);

  const saveAnswer = (answer) => {
    setSavedAnswers((prev) => [...prev, answer]);
  };

  return (
    <div className="space-y-4">
      {text.map((e, index) => (
        <div
          key={index}
          className={`flex ${e.isUser ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-xl ${
              e.isUser
                ? "bg-[#8774E1] text-white" // User message
                : "bg-[#212121] text-white" // Bot message
            }`}
          >
            {e.text}
            {!e.isUser && (
              <button
                className="ml-2 text-sm text-[#AAAAAA] hover:text-white"
                onClick={() => saveAnswer(e.text)}
              >
                <FaSave />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextMessage;
