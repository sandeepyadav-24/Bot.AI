{
  /**import React from "react";
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
    <div className="space-y-4 mx-10 lg:mx-16">
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
                <FaSave className="text-xl" />
              </button>
            )}
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
import { ImSpinner8 } from "react-icons/im";

const TextMessage = () => {
  const text = useRecoilValue(SearchDataState);
  const setSavedAnswers = useSetRecoilState(SavedAnswersState);

  const saveAnswer = (answer) => {
    setSavedAnswers((prev) => [...prev, answer]);
  };

  return (
    <div className="space-y-4 mx-10 lg:mx-16">
      {text.map((e, index) => (
        <div
          key={index}
          className={`flex ${e.isUser ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-xl relative ${
              e.isUser
                ? "bg-[#8774E1] text-white" // User message
                : "bg-[#212121] text-white" // Bot message
            }`}
          >
            {e.text}
            {!e.isUser && !e.isLoading && (
              <button
                className="ml-2 text-sm text-[#AAAAAA] hover:text-white absolute -right-8 top-1/2 transform -translate-y-1/2"
                onClick={() => saveAnswer(e.text)}
              >
                <FaSave className="text-xl" />
              </button>
            )}
          </div>
        </div>
      ))}
      {/* Loading Spinner */}
      {text.some((e) => e.isLoading) && (
        <div className="flex justify-start">
          <div className="max-w-[80%] p-3 rounded-xl bg-[#212121] text-white">
            <ImSpinner8 className="animate-spin text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextMessage;
