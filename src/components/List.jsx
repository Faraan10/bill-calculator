import React from "react";
import Button from "./Button";

const List = ({ friend, selectedFriend, handleSelection }) => {
  const isSelected = selectedFriend?.id === friend?.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      ) : (
        <p>both are square</p>
      )}
      <Button onClick={() => handleSelection(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
};

export default List;
