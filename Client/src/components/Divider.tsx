import React from "react";
import ChatPage from "./ChatPage";
import HomePage from "./HomePage";

const Divider = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <ChatPage />;
  } else {
    return <HomePage />;
  }
};

export default Divider;
