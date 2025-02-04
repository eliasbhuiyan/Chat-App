import React from "react";
import { CiSearch } from "react-icons/ci";
import FriendReqItems from "./FriendReqItems";

const FriendRequestList = () => {
  return (
    <div className="shadow-2xl h-[60vh] p-6 rounded-xl">
      <h1 className="font-semibold text-xl text-primary">Friend Request</h1>
      <div className="flex items-center p-2 border rounded-xl mt-2 mb-4">
        <CiSearch />
        <input type="text" placeholder="Search" className="px-2 outline-none" />
      </div>
      <div className="overflow-y-auto h-[80%]">
        <FriendReqItems />
        <FriendReqItems />
        <FriendReqItems />
      </div>
    </div>
  );
};

export default FriendRequestList;
