import React from "react";
import List from "./List";

const FriendsList = ({ friendsData }) => {
  return (
    <ul>
      {friendsData.map((friend) => (
        <List friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
