import React from "react";
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import { useAuth0 } from "@auth0/auth0-react";

const Divider = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (user) {
    return <ChatPage />;
  } else {
    return <HomePage />;
  }
};

export default Divider;
