import React from "react";

const Box = (props) => {
  const copyClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
        alert("Failed to copy to clipboard!");
      });
  };

  return (
    <div className="w-full bg-[#212121] rounded-md p-4 mb-4">
      <h1 className="text-2xl text-[#9BA3AF] text-center my-4">
        {props.headline}
      </h1>
      <div className="space-y-2">
        {props.data.map((e, index) => (
          <div
            className="bg-[#0F0F0F] text-white rounded-md py-2 px-3 cursor-pointer hover:bg-[#2C2C2C] transition-colors duration-200"
            key={index}
            onClick={() => copyClipboard(e)}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
