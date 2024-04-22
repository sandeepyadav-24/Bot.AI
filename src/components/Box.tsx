import React from "react";

const Box = (props) => {
  const data = [
    "Write step by step for research and development ",
    "Explain how BigBang Theory in 100 words",
    "Can you explain the concept of supply and demand?",
    "Explain how to manage money with $2000/month salary",
  ];
  return (
    <div className="mx-2 my-2 bg-[#212121] rounded-md">
      <h1 className="text-2xl text-[#9BA3AF] text-center my-8">
        {props.headline}
      </h1>
      {data.map((e, index) => {
        return (
          <div
            className="bg-[#0F0F0F] text-white my-2 mx-3 rounded-md py-1 px-2"
            key={index}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Box;
