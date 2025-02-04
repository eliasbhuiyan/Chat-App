import React from "react";
import UserList from "../components/UserList";
import FriendList from "../components/FriendList";
import FriendRequestList from "../components/FriendRequestList";
import BlockList from "../components/BlockList";

const Home = () => {
  return (
    <div className="grid grid-cols-2 m-auto h-full gap-10 my-10 max-w-7xl">
      <UserList />
      <FriendRequestList />
      <FriendList />
      <BlockList />
    </div>
  );
};

export default Home;
