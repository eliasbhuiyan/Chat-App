import React from "react";

const ChatItems = () => {
  return (
    <div className="flex items-center gap-5 p-2 shadow-sm my-1">
      <div className="w-12 h-12 rounded-full">
        <img src="/user.png" alt="user" className="w-full" />
      </div>
      <h2 className="text-lg font-medium">User Name</h2>
      <p className="ml-auto text-sm">user@gmail.com</p>
    </div>
  );
};

export default ChatItems;
