import React from "react";

import SearchBox from "./SearchBox";
import Render from "./Render";
import Header from "./Header";

const MessageBox = () => {
  return (
    <div className="w-3/4  ">
      <Header />
      <Render />
      <SearchBox />
    </div>
  );
};

export default MessageBox;
