import React from "react";

import SearchBox from "./SearchBox";
import Render from "./Render";

const MessageBox = () => {
  return (
    <div className="w-3/4 mx-5 ">
      <Render />
      <SearchBox />
    </div>
  );
};

export default MessageBox;
