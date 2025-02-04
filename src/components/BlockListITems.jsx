import React from "react";

const BlockListITems = () => {
  return (
    <div className="flex items-center gap-5 p-2 shadow-sm my-1">
      <div className="w-12 h-12 rounded-full">
        <img src="/user.png" alt="user" className="w-full" />
      </div>
      <h2 className="text-lg font-medium">User Name</h2>
      <button className="ml-auto text-2xl cursor-pointer">Unblock</button>
    </div>
  );
};

export default BlockListITems;
