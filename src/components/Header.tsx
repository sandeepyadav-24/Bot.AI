import React from "react";
import { FaRobot } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="bg-[#212121]  justify-between text-white text-2xl py-3 px-8 font-semibold flex flex-row">
      <div className="flex flex-row">
        <FaRobot className="h-8 w-8 mx-2" />
        Bot.Ai
      </div>
      <div
        className="bg-green-700 font-semibold py-2 px-4 text-lg rounded-lg text-white"
        onClick={() => loginWithRedirect()}
      >
        Logout
      </div>
    </div>
  );
};

export default Header;
