import React from "react";
import { FaRobot } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#212121] text-white text-2xl py-3 px-8 font-semibold flex flex-row">
      <FaRobot className="h-8 w-8 mx-2" />
      Bot.Ai
    </div>
  );
};

export default Header;
