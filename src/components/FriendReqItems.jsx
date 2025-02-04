import React from "react";

const FriendReqItems = () => {
  return (
    <div className="flex items-center gap-5 p-2 shadow-sm my-1">
      <div className="w-12 h-12 rounded-full">
        <img src="/user.png" alt="user" className="w-full" />
      </div>
      <h2 className="text-lg font-medium">User Name</h2>
      <button className="ml-auto text-2xl cursor-pointer text-green-600">
        Confirm
      </button>
      <button className="text-2xl cursor-pointer text-red-600">Cancel</button>
    </div>
  );
};

export default FriendReqItems;
