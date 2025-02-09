{
  /**import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { HistoryState } from "../Atom/History";
import { SearchDataState } from "../Atom/SearchData";
import { IoMdSend } from "react-icons/io";

interface Message {
  text: string;
  isUser: boolean;
}

const SearchBox = () => {
  const [name, setName] = useState<string>("");
  const [history, setHistory] = useRecoilState(HistoryState);
  const [message, setMessage] = useRecoilState<Message[]>(SearchDataState);

  const clickHandler = async () => {
    if (!name.trim()) return; // Don't send empty queries

    // Add user query to history
    setHistory([...history, name]);

    // Send query to backend for AI processing
    try {
      const response = await fetch("http://localhost:5174/api/ai/groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: name }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();

      // Add AI response to messages
      setMessage([...message, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error("Error generating response:", error);
    }

    // Clear input field
    setName("");
  };

  return (
    <div className="flex flex-row justify-between ">
      <input
        type="text"
        className="w-full px-3 py-2 bg-[#212121] text-[#A2ACB4] rounded-2xl focus:outline-none"
        placeholder="Send a new message"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && clickHandler()}
      />
      <div
        className="flex items-center justify-center rounded-full bg-[#212121] ml-3 w-[50px] h-[50px] hover:bg-[#8774E1] cursor-pointer"
        onClick={clickHandler}
      >
        <IoMdSend className="text-2xl text-[#8774E1] hover:text-white" />
      </div>
    </div>
  );
};

export default SearchBox;
 */
}

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { HistoryState } from "../Atom/History";
import { SearchDataState } from "../Atom/SearchData";
import { IoMdSend } from "react-icons/io";

// Update the Message interface to include isLoading
interface Message {
  text: string;
  isUser: boolean;
  isLoading?: boolean; // Add isLoading as an optional property
}

const SearchBox = () => {
  const [name, setName] = useState<string>("");
  const [history, setHistory] = useRecoilState(HistoryState);
  const [message, setMessage] = useRecoilState<Message[]>(SearchDataState);

  const clickHandler = async () => {
    if (!name.trim()) return; // Don't send empty queries

    // Add user query to messages with loading state
    setMessage([
      ...message,
      { text: name, isUser: true },
      { text: "", isUser: false, isLoading: true }, // Add loading state
    ]);

    // Clear input field
    setName("");

    // Send query to backend for AI processing
    try {
      const response = await fetch(
        "https://bot-ai-5umt.onrender.com/api/ai/groq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: name }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();

      // Replace loading message with AI response
      setMessage((prev) => [
        ...prev.slice(0, -1), // Remove loading message
        { text: data.response, isUser: false },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessage((prev) => [
        ...prev.slice(0, -1), // Remove loading message
        {
          text: "Failed to generate response. Please try again.",
          isUser: false,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <input
        type="text"
        className="w-full px-3 py-2 bg-[#212121] text-[#A2ACB4] rounded-2xl focus:outline-none"
        placeholder="Send a new message"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && clickHandler()}
      />
      <div
        className="flex items-center justify-center rounded-full bg-[#212121] ml-3 w-[50px] h-[50px] hover:bg-[#8774E1] cursor-pointer"
        onClick={clickHandler}
      >
        <IoMdSend className="text-2xl text-[#8774E1] hover:text-white" />
      </div>
    </div>
  );
};

export default SearchBox;
