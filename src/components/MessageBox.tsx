import React from "react";

import SearchBox from "./SearchBox";
import Render from "./Render";

const MessageBox = () => {
  return (
    <div className="w-4/5 mx-5 my-5">
      <Render />
      <SearchBox />
    </div>
  );
};

export default MessageBox;
