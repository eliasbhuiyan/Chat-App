import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl">
      <div className="text-center mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl font-black tracking-tight">
        ChatApp
      </div>
      <div className="border border-gray-200/80 py-1 px-2 flex gap-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <div className="group relative px-3 cursor-pointer">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
          >
            <IoHomeOutline />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
            Home
          </span>
        </div>

        <div className="group relative px-3 cursor-pointer">
          <Link
            to="/chat"
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
          >
            <FiMessageCircle />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
            Messages
          </span>
        </div>

        <div className="group relative px-3 cursor-pointer">
          <Link
            to="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
          >
            <FaRegUser />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
            Profile
          </span>
        </div>

        <div className="group relative px-3 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
            <IoMdLogOut />
          </div>
          <span className="absolute -top-8 left-[50%] text-nowrap -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
