import React from "react";
import { IoMdPersonAdd } from "react-icons/io";

const UserItems = () => {
  return (
    <div className="flex items-center gap-5 p-2 shadow-sm my-1">
      <div className="w-12 h-12 rounded-full">
        <img src="/user.png" alt="user" className="w-full" />
      </div>
      <h2 className="text-lg font-medium">User Name</h2>
      <button className="ml-auto text-2xl cursor-pointer">
        <IoMdPersonAdd />
      </button>
    </div>
  );
};

export default UserItems;
