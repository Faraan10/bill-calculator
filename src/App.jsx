const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const App = () => {
  const [friendsData, setFriendsData] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleClick = () => {
    setShowFriend((show) => !show); // getting the latest state which is
    // more accurate way than setShowFriend(!showFriend)
  };

  // below using state uplifting from formAddFriend using a callback
  // function to add data to the firendsData useState

  const addFriendData = (newData) => {
    setFriendsData((prevData) => [...prevData, newData]);
    setShowFriend(false);
  };

  // another state uplifting for FriendsList, List component
  // to store data in selectingFriend useState

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((selected) =>
      selected?.id === friend?.id ? null : friend
    );
    setShowFriend(false);
  };
  // console.log(selectedFriend);

  const handleSplitBill = (value) => {
    console.log(value);

    setFriendsData((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsData={friendsData}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
        {showFriend && <FormAddFriend addFriendData={addFriendData} />}
        <Button onClick={handleClick}>
          {showFriend ? `Close` : `Add Friend`}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};
export default App;
