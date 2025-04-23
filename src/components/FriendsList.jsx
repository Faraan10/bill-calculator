import React from "react";
import List from "./List";

const FriendsList = ({ initialFriends }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <List friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
