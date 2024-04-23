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
    <div className="mx-2 my-2 bg-[#212121] w-[227px] rounded-md">
      <h1 className="text-2xl text-[#9BA3AF] text-center my-8">
        {props.headline}
      </h1>
      {props.data.map((e, index) => {
        return (
          <div
            className="bg-[#0F0F0F] text-white my-2 mx-3 rounded-md py-1 px-2"
            key={index}
            onClick={() => copyClipboard(e)}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Box;
