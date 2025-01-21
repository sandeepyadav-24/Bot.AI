import React from "react";
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import { useAuth0 } from "@auth0/auth0-react";

const Divider = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <ChatPage />;
  } else {
    return <HomePage />;
  }
};

export default Divider;
