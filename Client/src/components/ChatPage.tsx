import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MessageBox from "./MessageBox";
import { FaBars } from "react-icons/fa";

const ChatPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#0F0F0F] min-h-screen">
      {/* Sidebar (Collapsible on Desktop) */}
      <div
        className={`fixed lg:relative bg-[#212121] border-[#575757] border-r-2 transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "w-64 translate-x-0"
            : "-translate-x-full lg:translate-x-0 lg:w-16"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Burger Icon (Visible on Both Mobile and Desktop) */}
        <div
          className="p-4 cursor-pointer hover:bg-[#2C2C2C]"
          onClick={toggleSidebar}
        >
          <FaBars className="text-white text-2xl" />
        </div>

        {/* Sidebar Content */}
        <div className={`${isSidebarOpen ? "block" : "hidden lg:block"}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header (Visible on Mobile) */}
        <div className="lg:hidden bg-[#212121] text-white text-2xl py-3 px-4 font-semibold flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <FaBars
              className="h-8 w-8 mx-2 cursor-pointer"
              onClick={toggleSidebar}
            />
            <span>Bot.Ai</span>
          </div>
          <div
            className="bg-green-700 font-semibold py-2 px-4 text-lg rounded-lg text-white cursor-pointer hover:bg-green-800"
            onClick={() => {}}
          >
            Logout
          </div>
        </div>

        {/* MessageBox */}
        <MessageBox />
      </div>
    </div>
  );
};

export default ChatPage;
