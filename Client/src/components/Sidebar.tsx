{
  /**import React from "react";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  const historyStateValue = useRecoilValue(HistoryState);
  const { user, logout } = useAuth0();

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
    <div className="p-4 h-screen flex flex-col">
      {/* Recent Searches Section *}
      <div className="flex-1 overflow-y-auto">
        <h1
          className={`text-2xl text-white text-center mb-4 ${
            !isSidebarOpen && "lg:hidden"
          }`}
        >
          Recent Searches
        </h1>
        <div className="overflow-y-auto h-[calc(100vh-300px)]">
          {historyStateValue.map((e, index) => (
            <div
              className="flex flex-row items-center hover:bg-[#2C2C2C] text-[#AAAAAA] my-2 py-1 px-3 rounded-lg cursor-pointer"
              key={index}
              onClick={() => copyClipboard(e)}
            >
              <div className="bg-black rounded-full w-8 h-8"></div>
              <div className={`ml-2 truncate ${!isSidebarOpen && "lg:hidden"}`}>
                {e}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile, Settings, and Logout Section /}
      <div className="mt-4 border-t border-[#575757] pt-4">
        {/* User Profile /}
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-white w-10 h-10 overflow-hidden">
            <img
              src={user?.picture || "Picture"}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`ml-2 text-white text-sm ${
              !isSidebarOpen && "lg:hidden"
            }`}
          >
            <h1>{user?.name || "Sandy"}</h1>
            <h1>{user?.email || "sandy@123"}</h1>
          </div>
        </div>

        {/* Settings and Logout Buttons /}
        <div className="space-y-2">
          <div className="flex items-center p-2 hover:bg-[#2C2C2C] rounded-lg cursor-pointer">
            <FaCog className="text-white text-xl" />
            <span
              className={`ml-2 text-white ${!isSidebarOpen && "lg:hidden"}`}
            >
              Settings
            </span>
          </div>
          <div
            className="flex items-center p-2 hover:bg-[#2C2C2C] rounded-lg cursor-pointer"
            onClick={() => {}}
          >
            <FaSignOutAlt className="text-white text-xl" />
            <span
              className={`ml-2 text-white ${!isSidebarOpen && "lg:hidden"}`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; */
}

import React from "react";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";
import { SavedAnswersState } from "../Atom/SavedAnswer";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCog, FaSignOutAlt, FaSave } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  const historyStateValue = useRecoilValue(HistoryState);
  const savedAnswers = useRecoilValue(SavedAnswersState);
  const { user, logout } = useAuth0();

  return (
    <div className="p-4 h-screen flex flex-col">
      {/* Recent Searches Section */}
      <div className="flex-1 overflow-y-auto">
        <h1
          className={`text-2xl text-white text-center mb-4 ${
            !isSidebarOpen && "lg:hidden"
          }`}
        >
          Recent Searches
        </h1>
        <div className="overflow-y-auto h-[calc(50vh-150px)]">
          {historyStateValue.map((e, index) => (
            <div
              className="flex flex-row items-center hover:bg-[#2C2C2C] text-[#AAAAAA] my-2 py-1 px-3 rounded-lg cursor-pointer"
              key={index}
            >
              <div className="bg-black rounded-full w-8 h-8"></div>
              <div className={`ml-2 truncate ${!isSidebarOpen && "lg:hidden"}`}>
                {e}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Answers Section */}
      <div className="flex-1 overflow-y-auto">
        <h1
          className={`text-2xl text-white text-center mb-4 ${
            !isSidebarOpen && "lg:hidden"
          }`}
        >
          Saved Answers
        </h1>
        <div className="overflow-y-auto h-[calc(50vh-150px)]">
          {savedAnswers.map((e, index) => (
            <div
              className="flex flex-row items-center hover:bg-[#2C2C2C] text-[#AAAAAA] my-2 py-1 px-3 rounded-lg cursor-pointer"
              key={index}
            >
              <div className="bg-black rounded-full w-8 h-8"></div>
              <div className={`ml-2 truncate ${!isSidebarOpen && "lg:hidden"}`}>
                {e}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile, Settings, and Logout Section */}
      <div className="mt-4 border-t border-[#575757] pt-4">
        {/* User Profile */}
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-white w-10 h-10 overflow-hidden">
            <img
              src={user?.picture || "Picture"}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`ml-2 text-white text-sm ${
              !isSidebarOpen && "lg:hidden"
            }`}
          >
            <h1>{user?.name || "Sandy"}</h1>
            <h1>{user?.email || "sandy@123"}</h1>
          </div>
        </div>

        {/* Settings and Logout Buttons */}
        <div className="space-y-2">
          <div className="flex items-center p-2 hover:bg-[#2C2C2C] rounded-lg cursor-pointer">
            <FaCog className="text-white text-xl" />
            <span
              className={`ml-2 text-white ${!isSidebarOpen && "lg:hidden"}`}
            >
              Settings
            </span>
          </div>
          <div
            className="flex items-center p-2 hover:bg-[#2C2C2C] rounded-lg cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            <FaSignOutAlt className="text-white text-xl" />
            <span
              className={`ml-2 text-white ${!isSidebarOpen && "lg:hidden"}`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
