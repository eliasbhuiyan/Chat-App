import React from "react";
import { CiSearch } from "react-icons/ci";
import ChatItems from "../components/ChatItems";

const Chatting = () => {
  return (
    <div className="m-auto h-[80vh] shadow-2xl my-10 max-w-7xl flex">
      <div className="h-full overflow-y-auto p-6 w-2/5 shadow-2xl">
        <h1 className="font-semibold text-xl text-primary">Chat</h1>
        <div className="flex items-center p-2 border rounded-xl mt-2 mb-4">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="px-2 outline-none"
          />
        </div>
        <ChatItems />
        <ChatItems />
        <ChatItems />
        <ChatItems />
        <ChatItems />
        <ChatItems />
        <ChatItems />
      </div>
      {/* Chat box area */}
      <div className="shadow-md rounded-lg overflow-hidden flex flex-col h-full w-3/5">
        {/* Heading */}
        <div className="flex items-center gap-5 px-4 py-3 border-b w-full">
          <div className="w-12 h-12 rounded-full">
            <img src="/user.png" alt="user" className="w-full" />
          </div>
          <h2 className="text-lg font-medium">User Name</h2>
        </div>
        {/* Message area */}
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
          id="chatDisplay"
        >
          {/* Send Message */}
          <div className="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            Send Message
          </div>
          {/* Recive Message */}
          <div className="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            Recive Message
          </div>
        </div>
        {/* Footer */}
        <div className="px-3 py-2 border-t dark:border-zinc-700">
          <div className="flex gap-2">
            <input
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
              id="chatInput"
              type="text"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
              id="sendButton"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
