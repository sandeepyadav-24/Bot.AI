import React from "react";
import { useRecoilValue } from "recoil";
import { HistoryState } from "../Atom/History";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const historyStateValue = useRecoilValue(HistoryState);
  const { user, isAuthenticated, isLoading } = useAuth0();
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
    <div className="lg:w-1/4 h-screen  bg-[#212121] border-[#575757] border-r-2 ">
      <h1 className="text-2xl text-white text-center my-4">Recent Searches</h1>
      <div className="overflow-y-auto h-[600px] border-b-[1px] ">
        {historyStateValue.map((e, index) => {
          return (
            <div
              className="mx-2 flex flex-row   hover:bg-[#2C2C2C] text-[#AAAAAA] my-2 py-1 px-3 rounded-lg "
              key={index}
              onClick={() => copyClipboard(e)}
            >
              <div className="bg-black rounded-full w-20 h-20 "></div>
              <div className="w-60 mx-3">{e}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mx-2 rounded-lg mt-7">
        <div
          className="w-20 h-20 rounded-full bg-white px-5 py-7 font-serif"
          onClick={() => {}}
        >
          Photo
        </div>
        <div className="mx-3 py-4 text-white text-sm">
          <Link to={"/check"}>
            <h1> {user && user.name ? user.name : "Sandy"}</h1>
          </Link>

          <h1>{user && user.email ? user.email : "sandy@123"}</h1>
          <h1>{user && user.profile ? user.profile : "user"}</h1>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
