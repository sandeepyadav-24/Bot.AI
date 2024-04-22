import React from "react";
import { useRecoilValue } from "recoil";
import { SearchDataState } from "../Atom/SearchData";

const TextMessage = () => {
  // Get the value of SearchDataState atom
  const text = useRecoilValue(SearchDataState);

  // Map over the text array and return JSX elements
  const renderedText = text.map((e, index) => (
    <div key={index} className="bg-[#212121] text-white my-10 p-3 rounded-xl ">
      {e}
    </div>
  ));

  // Return the JSX containing the mapped elements
  return <>{renderedText}</>;
};

export default TextMessage;
