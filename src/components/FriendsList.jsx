import React from "react";
import List from "./List";

const FriendsList = ({ friendsData, selectedFriend, handleSelection }) => {
  return (
    <ul>
      {friendsData.map((friend) => (
        <List
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
