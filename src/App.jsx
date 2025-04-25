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

  const handleClick = () => {
    setShowFriend((show) => !show); // getting the latest state which is
    // more accurate way than setShowFriend(!showFriend)
  };
  // console.log(showFriend);

  // below doing state uplifting from formAddFriend to add data to the
  // firendsData useState

  const addFriendData = (newData) => {
    setFriendsData((prevData) => [...prevData, newData]);
    setShowFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendsData={friendsData} />
        {showFriend && <FormAddFriend addFriendData={addFriendData} />}
        <Button onClick={handleClick}>
          {showFriend ? `Close` : `Add Friend`}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};
export default App;
