import React from "react";

const Box = () => {
  const data = [
    "Write step by step for research and development ",
    "Explain how BigBang Theory in 100 words",
    "Can you explain the concept of supply and demand?",
    "Explain how to manage money with $2000/month salary",
  ];
  return (
    <div className="mx-5 my-2 bg-white rounded-md">
      <h1 className="text-2xl text-center my-8">Example</h1>
      {data.map((e, index) => {
        return (
          <div
            className="bg-[#C6C6E6] text-white my-1 mx-3 rounded-md py-1 px-2"
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
